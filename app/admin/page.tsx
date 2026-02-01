import { Suspense } from "react";
import ProductSkeleton from "@/components/products/product-skeleton";
import AdminPanelContent from "./admin-panel-content";

export default function AdminPage() {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <AdminPanelContent />
    </Suspense>
  );
}
