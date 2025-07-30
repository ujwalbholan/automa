import { postContentToWebHook } from '@/app/(main)/(pages)/connections/_actions/discord-connection';
import { onCreateNewPageInDatabase } from '@/app/(main)/(pages)/connections/_actions/notion-connection';
import { postMessageToSlack } from '@/app/(main)/(pages)/connections/_actions/slack-connection';
import { db } from '@/lib/db';
import axios from 'axios';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('🔴 Webhook received');

  const channelResourceId = headers().get('x-goog-resource-id');
  if (!channelResourceId) {
    console.error('Missing x-goog-resource-id header');
    return Response.json({ message: 'Missing resource ID' }, { status: 400 });
  }

  try {
    // Find user by googleResourceId
    const user = await db.user.findFirst({
      where: { googleResourceId: channelResourceId },
      select: { clerkId: true, credits: true },
    });

    if (!user) {
      // console.error(`No user found for resource ID: ${channelResourceId}`);
      return Response.json({ message: 'User not found' }, { status: 404 });
    }

    // Check credits
    const hasCredits = user.credits === 'Unlimited' || (user.credits && parseInt(user.credits) > 0);
    if (!hasCredits) {
      // console.error(`Insufficient credits for user: ${user.clerkId}`);
      return Response.json({ message: 'Insufficient credits' }, { status: 403 });
    }

    // Fetch workflows
    const workflows = await db.workflows.findMany({
      where: { userId: user.clerkId },
    });

    if (!workflows || workflows.length === 0) {
      // console.warn(`No workflows found for user: ${user.clerkId}`);
      return Response.json({ message: 'No workflows found' }, { status: 200 });
    }

    // Process each workflow
    await Promise.all(
      workflows.map(async (flow) => {
        try {
          let flowPath = JSON.parse(flow.flowPath || '[]') as string[];
          const updatedFlowPath = [...flowPath]; // Create a copy to avoid modifying during iteration

          for (let i = 0; i < flowPath.length; i++) {
            const step = flowPath[i];

            // if (step === 'Discord') {
            //   const discordMessage = await db.discordWebhook.findFirst({
            //     where: { userId: flow.userId },
            //     select: { url: true },
            //   });
            //   if (discordMessage && flow.discordTemplate) {
            //     await postContentToWebHook(flow.discordTemplate, discordMessage.url);
            //     updatedFlowPath.splice(updatedFlowPath.indexOf('Discord'), 1);
            //   } else {
            //     console.warn(`Discord step skipped: No webhook or template for flow ${flow.id}`);
            //     return Response.json(
            //       { message: 'Discord step skipped: No webhook or template' },)
            //   }
            // }

            if (step === 'Slack') {
              if (flow.slackAccessToken && flow.slackTemplate && flow.slackChannels) {
                const channels = flow.slackChannels.map((channel) => ({
                  label: '',
                  value: channel,
                }));
                console.log('channels:', channels);
                console.log(flow.slackAccessToken, channels, flow.slackTemplate);

                await postMessageToSlack(flow.slackAccessToken, channels, flow.slackTemplate);
                updatedFlowPath.splice(updatedFlowPath.indexOf('Slack'), 1);
              } else {
                console.warn(`Slack step skipped: Missing token, template, or channels for flow ${flow.id}`);
                return Response.json(
                  { message: 'Slack step skipped: Missing token, template, or channels' },
                  { status: 400 }
                );
              }
            }

            if (step === 'Notion') {
              if (flow.notionDbId && flow.notionAccessToken && flow.notionTemplate) {
                console.log(flow.notionDbId, flow.notionAccessToken, flow.notionTemplate);  

                await onCreateNewPageInDatabase(
                  flow.notionDbId,
                  flow.notionAccessToken,
                  JSON.parse(flow.notionTemplate)
                );
                
                updatedFlowPath.splice(updatedFlowPath.indexOf('Notion'), 1);
              } else {
                console.warn(`Notion step skipped: Missing DB ID, token, or template for flow ${flow.id}`);
                return Response.json(
                  { message: 'Notion step skipped: Missing DB ID, token, or template' },
                  { status: 400 }
                );
              }
            }

            if (step === 'Wait') {
              const cronResponse = await axios.put(
                'https://api.cron-job.org/jobs',
                {
                  job: {
                    url: `${process.env.NGROK_URI}?flow_id=${flow.id}`,
                    enabled: true,
                    schedule: {
                      timezone: 'Asia/Kathmandu',
                      expiresAt: 0,
                      hours: [-1],
                      mdays: [-1],
                      minutes: ['*'],
                      months: [-1],
                      wdays: [-1],
                    },
                  },
                },
                {
                  headers: {
                    Authorization: `Bearer ${process.env.CRON_JOB_KEY}`,
                    'Content-Type': 'application/json',
                  },
                }
              );

              if (cronResponse.status === 200) {
                updatedFlowPath.splice(updatedFlowPath.indexOf('Wait'), 1);
                await db.workflows.update({
                  where: { id: flow.id },
                  data: { cronPath: JSON.stringify(updatedFlowPath) },
                });
                break; // Exit after scheduling cron job
              } else {
                console.error(`Cron job scheduling failed for flow ${flow.id}`);
              }
            }
          }

          // Update credits after processing workflow
          if (user.credits !== 'Unlimited') {
            await db.user.update({
              where: { clerkId: user.clerkId },
              data: { credits: `${parseInt(user.credits ?? '0') - 1}` },
            });
          }
        } catch (error) {
          console.error(`Error processing workflow ${flow.id}:`, error);
        }
      })
    );

    return Response.json({ message: 'Workflows processed' }, { status: 200 });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return Response.json({ message: 'Internal server error' }, { status: 500 });
  }
}