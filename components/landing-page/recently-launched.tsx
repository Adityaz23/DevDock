import { CalendarIcon, RocketIcon } from "lucide-react";
import FeaturedHeader from "../common/common-header";
import ProductCard from "../products/products";
import EmptyRecently from "../common/empty-state";

export default function RecentlyLaunched() {
  const recentlyLaunchedProduct = [
    {
      id: 1,
      name: "Parity",
      description: "A tool for finding kitty party!",
      tags: ["AI", "NextJS", "TailwindCSS"],
      isFeatured: true,
      votes: 300,
    },
    {
      id: 2,
      name: "Charity",
      description: "A website for finding charities to donate!",
      tags: ["AI", "NextJS", "TailwindCSS"],
      isFeatured: true,
      votes: 100,
    },
    {
      id: 3,
      name: "MELLO",
      description: "A tool similar to trello!",
      tags: ["AI", "NextJS", "TailwindCSS"],
      isFeatured: true,
      votes: 200,
    },
    {
      id: 4,
      name: "Kitty-Kat",
      description: "A website to find friend for your kiity!",
      tags: ["AI", "NextJS", "TailwindCSS"],
      isFeatured: false,
      votes: 600,
    },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-4 lg:px-8">
        <FeaturedHeader
          title="Recently Launched!"
          icon={RocketIcon}
          description="Discover the latest product on DevDock."
        />
        {recentlyLaunchedProduct.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
