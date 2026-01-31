import FeaturedHeader from "@/components/common/common-header";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function adminPanel() {
  // checking if the user is logged in or not
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // using the getUser api by clerk->
  const response = await clerkClient();
  const user = await response.users.getUser(userId!);

  //   if the user is logged in then we need to check the metadata that the user is admin or not.
  //    console.log(user);
  const metadata = user.publicMetadata;
  const isAdmin = metadata?.isAdmin ?? false;

  //   if the user is not admin then redirecting them to the homepage.
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <div className="py-20">
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <div className="mb-12">
          <FeaturedHeader
            title="Product Admin"
            description="Review and manage submitted applications"
            icon={ShieldIcon}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Now, adding the stats that we need to map through the card */}
          <div className="hover:shadow-2xl rounded-2xl bg-pink-200/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/45 font-bold text-center
    sm:text-left">
            <p className="md:text-sm sm:text-lgtext-foreground">Total</p>
            <p className="text-foreground">8</p>
          </div>
          <div className="hover:shadow-2xl rounded-2xl bg-gray-500/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/50 font-bold text-center
    sm:text-left">
            <p className="md:text-sm sm:text-lg text-foreground">Pending</p>
            <p className="text-foreground">0</p>
          </div>
          <div className="hover:shadow-2xl rounded-2xl bg-green-300/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/40 font-bold text-center
    sm:text-left">
            <p className="md:text-sm sm:text-lg text-foreground">Approved</p>
            <p className="text-foreground">8</p>
          </div>
          <div className="hover:shadow-2xl rounded-2xl bg-red-600/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/50 font-bold text-center
    sm:text-left">
            <p className="md:text-sm sm:text-lg text-foreground">Rejected</p>
            <p className="text-foreground">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
