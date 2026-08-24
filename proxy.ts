import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|ogg|mp3|wav)).*)",

    // Always run for Clerk's auto-proxy path
    "/__clerk/:path*",

    // Always run for API routes
    "/(api|trpc)(.*)",

    // Protected application routes
    "/admin(.*)",
    "/sign-in(.*)",
    "/sign-up(.*)",
  ],
};
