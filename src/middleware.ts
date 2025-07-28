import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // These routes are publicly accessible (no login required)
  publicRoutes: [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],

  // Clerk ignores these routes (usually for OAuth callbacks or system actions)
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
  ],

  // Optional: Enable debug logs in development
  // debug: process.env.NODE_ENV === 'development',
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};


// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly
