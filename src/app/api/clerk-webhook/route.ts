import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {

    const body = await req.json();


    const { id, email_addresses, first_name, image_url } = body?.data || {};

    console.log('Received data:', { id, email_addresses, first_name, image_url });

    const email = email_addresses?.[0]?.email_address;
    console.log('Extracted email:', email);

    if (!id || !email) {
      return new NextResponse('Missing required user fields', { status: 400 });
    }

    console.log('Syncing user with ID:', id);

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || '',
        profileImage: image_url || '',
      },
    });

    return new NextResponse('User synced with DB', { status: 200 });
  } catch (error) {
    // console.error('Error syncing user:', error);
    return new NextResponse('Error updating user in DB', { status: 500 });
  }
}
