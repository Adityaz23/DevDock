"use cache";
import FeaturedHeader from "@/components/common/common-header";
import { Badge } from "@/components/ui/badge";
import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
import { ArrowLeftIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
};
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  // Now, we will check if the product with the slug even exists or not if it does not exists then we will return 404 page.
  if (!product) {
    notFound();
  }
  const { name, description, tags, websiteUrl, voteCount, tagline } = product;
  return (
    <div className="py-16">
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeftIcon className="size-4" /> Back To Explore
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex-1 min-w-0">
                {/* passing the section header to it from the common-header */}
                <FeaturedHeader
                  title={name}
                  icon={StarIcon}
                  description={tagline ?? ""}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(tags) &&
                  tags?.map((tag) => <Badge variant="secondary" key={tag}>{tag}</Badge>)}
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <h1>
          {name}
          {description}
          {slug}
        </h1>
      </div>
    </div>
  );
}
