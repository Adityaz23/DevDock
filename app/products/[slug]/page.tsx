"use cache";

import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
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
  if(!product){
    notFound();
  }
  const { name, description, tags, websiteUrl, voteCount } = product;
  return (
    <div className="mb-16 flex flex-col items-center space-y-4">
      <h1>
        {name} {slug} {description}
      </h1>
    </div>
  );
}
