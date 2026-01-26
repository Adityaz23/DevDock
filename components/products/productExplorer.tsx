import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getAllProducts } from "@/lib/products/product-select";
import ProductCard from "./products";

export default async function ProductExplorer() {
  //Now , we will use the getAllProduct Query from the product-select.ts query which we will render in the explore page.
  const products = await getAllProducts();
  return (
    // This product explorer component will be used as the search bar for all the products that are launched in the DevDock.
    <div>
      Product Explorer Component
      <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-1">
        {/* This is the input where the user will search for the product. */}
        <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4"/>
          <Input type="text" placeholder="Search products" className="pl-8" />
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"}>
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>
          <Button>
            <ClockIcon className="size-4" />
            Recent
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-bg/60">Showing {products.length} products.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold">
        {/* Now, here we are mapping all the products from the query. */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
