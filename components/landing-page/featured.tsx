import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import FeaturedHeader from "../common/common-header";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/products";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featured = [
//     {
//         id:1,
//         name: "Parity",
//         description: "A tool for finding kitty party!",
//         tags:["AI","NextJS","TailwindCSS"],
//         isFeatured: true,
//         votes: 300
//     },
//       {
//         id:2,
//         name: "Charity",
//         description: "A website for finding charities to donate!",
//         tags:["AI","NextJS","TailwindCSS"],
//         isFeatured: true,
//         votes: 100
//     },
//       {
//         id:3,
//         name: "MELLO",
//         description: "A tool similar to trello!",
//         tags:["AI","NextJS","TailwindCSS"],
//         isFeatured: true,
//         votes: 200
//     },
//       {
//         id:4,
//         name: "Kitty-Kat",
//         description: "A website to find friend for your kiity!",
//         tags:["AI","NextJS","TailwindCSS"],
//         isFeatured: false,
//         votes: 600
//     }
// ]

export default async function Featured() {
  // fetching the data from the database of drizzle which we literally just generated.
  const featured = await getFeaturedProducts()
  return (
    <section className="py-20 bg-muted/20">
      <div className="mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
        <FeaturedHeader title="Featued This Week!" icon={StarIcon} description="This week hot products!"/>
      <Button variant="outline" asChild className="hidden sm:flex text-rose-100 hover:from-red-300 hover:to-yellow-200 bg-linear-to-r from-fuchsia-400 to-pink-300 border-red-300"><Link href="/explore">
      View All
      <ArrowUpRightIcon className="size-4"/>
      </Link>
      </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </div>
    </section>
  );
}
