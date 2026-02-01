"use client";

import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProductCard from "./products";
import { ProductType } from "@/types";
import { useMemo, useState } from "react";

export default function ProductExplorer({
  products,
}: {
  products: ProductType[];
}) {
  const [sortBy, setSortBy] = useState<"trending" | "recent">("trending");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // 3️⃣ Apply sorting
    if (sortBy === "trending") {
      result = [...result].sort((a, b) => b.voteCount - a.voteCount);
    }

    if (sortBy === "recent") {
      result = [...result].sort(
        (a, b) =>
          new Date(b.createdAt || "").getTime() -
          new Date(a.createdAt || "").getTime(),
      );
    }

    return result;
  }, [products, searchQuery, sortBy]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-1">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            type="text"
            placeholder="Search products"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button
  onClick={() => setSortBy("trending")}
  className={`transition-all ${
    sortBy === "trending"
      ? "bg-linear-to-r from-pink-500 to-fuchsia-500 text-white shadow-md"
      : "bg-white/90 text-gray-700 border border-gray-200 hover:bg-white"
  }`}
>
  <TrendingUpIcon className="size-4 mr-2" />
  Trending
</Button>

<Button
  onClick={() => setSortBy("recent")}
  className={`transition-all ${
    sortBy === "recent"
      ? "bg-linear-to-r from-pink-500 to-fuchsia-500 text-white shadow-md"
      : "bg-white/90 text-gray-700 border border-gray-200 hover:bg-white"
  }`}
>
  <ClockIcon className="size-4 mr-2" />
  Recent
</Button>

        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Showing {filteredProducts.length} products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
