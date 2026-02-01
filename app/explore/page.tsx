"use cache";
import FeaturedHeader from "@/components/common/common-header";
import ProductExplorer from "@/components/products/productExplorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { CompassIcon } from "lucide-react";

export default async function ExplorePage() {
  const products = await getAllApprovedProducts();
  return (
    <div className="py-20">
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <div className="mb-6">
          <FeaturedHeader
            title="Explore All Products"
            icon={CompassIcon}
            description="Browse and discover all the products shared by the community!"
          />
        </div>
        {/* Creating the new product explorer component. */}
        <ProductExplorer products={products} />
      </div>
    </div>
  );
}
