import AdminProductCard from "@/components/admin/admin-product-card";
import StatsCard from "@/components/admin/stats-card";
import FeaturedHeader from "@/components/common/common-header";
import EmptyRecently from "@/components/common/empty-state";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { MailboxIcon, ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";

     export default async function AdminPanelContent() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const isAdmin = user.publicMetadata?.isAdmin ?? false;
  if (!isAdmin) redirect("/");

  const allProducts = await getAllProducts();

  const approvedProducts = allProducts.filter((p) => p.status === "approved");
  const pendingProducts = allProducts.filter((p) => p.status === "pending");
  const rejectedProducts = allProducts.filter((p) => p.status === "rejected");

  return (
    <div className="py-20">
      {/* ✅ MASTER CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <FeaturedHeader
          title="Product Admin"
          description="Review and manage submitted applications"
          icon={ShieldIcon}
        />

        {/* STATS */}
        <StatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />

        {/* PENDING SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Pending Products
              <span className="ml-2 text-muted-foreground">
                ({pendingProducts.length})
              </span>
            </h2>
          </div>

          {pendingProducts.length === 0 ? (
            <EmptyRecently
              message="No pending products to review."
              icon={MailboxIcon}
            />
          ) : (
            <div className="space-y-4">
              {pendingProducts.map((product) => (
                <AdminProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* ALL PRODUCTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              All Products
              <span className="ml-2 text-muted-foreground">
                ({allProducts.length})
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {allProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
