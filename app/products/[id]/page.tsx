"use cache"
import { getFeaturedProducts } from "@/lib/products/product-select";

// generating the params for the nextjs pages where we can see the which product page is rendered.
export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <div>Product {id}</div>
    </>
  );
}
