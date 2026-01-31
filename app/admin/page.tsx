import AdminProductCard from "@/components/admin/admin-product-card";
import StatsCard from "@/components/admin/stats-card";
import FeaturedHeader from "@/components/common/common-header";
import {
  getAllProducts,
} from "@/lib/products/product-select";
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

  //  getting all the products ->
  const allProducts = await getAllProducts();
  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved",
  );
  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending",
  );
  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected",
  );

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
        <StatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />
        <section className="my-12">
          <h2 className="text-2xl font-bold">
            Pending Products ({pendingProducts.length})
          </h2>
          <div className="spave-y-4">{pendingProducts.map((product)=>(
            <AdminProductCard key={product.id} product={product}/>
          ))}</div>
        </section>
      </div>
    </div>
  );
}
