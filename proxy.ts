import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  console.log("Middleware check:", {
    userId,
    orgId,
    path: req.nextUrl.pathname,
  });

  if (userId && !orgId) {
    console.log("➡️ Entered org-auto-create block");

    try {
      console.log("➡️ Calling clerkClient()…");
      const client = await clerkClient();
      console.log("✅ clerkClient resolved");

      const { data: organizations = [] } =
        await client.users.getOrganizationMembershipList({ userId });

      console.log("📊 Existing org count:", organizations.length);

      organizations.forEach((org) => {
        console.log(
          `🏢 Org: ${org.organization.name} (${org.organization.id})`
        );
      });
      if (organizations.length > 0) {
        console.log("✔️ User already has an org — skipping create");
        return NextResponse.next();
      }

      const user = await client.users.getUser(userId);

      const orgName =
        (user.fullName && `${user.fullName}'s organization`) ??
        (user.firstName && `${user.firstName}'s organization`) ??
        (user.username && `${user.username}'s organization`) ??
        (user.emailAddresses?.[0]?.emailAddress &&
          `${user.emailAddresses[0].emailAddress}'s organization`) ??
        "My Organization";

      await client.organizations.createOrganization({
        name: orgName,
        createdBy: userId,
      });

      console.log("🎉 Auto-created organization:", orgName);
    } catch (err) {
      console.error("❌ ORG AUTO-CREATE ERROR:", err);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
