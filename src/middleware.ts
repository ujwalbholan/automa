import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/about',
    '/contact',
    '/pricing',
    '/sign-in', 
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],

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
