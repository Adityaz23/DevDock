import { CalendarIcon, RocketIcon } from "lucide-react";
import FeaturedHeader from "../common/common-header";
import ProductCard from "../products/products";
import EmptyRecently from "../common/empty-state";
import { getRecetnlyLaunedProduct } from "@/lib/products/product-select";

export default async function RecentlyLaunched() {
  const recentlyLaunchedProduct = await getRecetnlyLaunedProduct();
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-4 lg:px-8">
        <FeaturedHeader
          title="Recently Launched!"
          icon={RocketIcon}
          description="Discover the latest product on DevDock."
        />
        {recentlyLaunchedProduct.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold text-primary">
            {recentlyLaunchedProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyRecently message="No product launched in the last week. Check back soon for new launches" icon={CalendarIcon}/>
        )}
      </div>
    </section>
  );
}
