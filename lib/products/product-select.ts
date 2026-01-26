import { products } from "@/db/schema";
import { db } from "@/db/seed";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  return db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.createdAt));
}
export async function getAllProducts() {
  return db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount)).limit(8);
}

export async function getRecentlyLaunedProduct() {
  await connection(); // this is the api request which will just let us get the products on the runtime.
  await new Promise((r) => setTimeout(r, 3000));
  const productData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}

export async function getProductBySlug(slug: string) {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug));
    return product?.[0] || null;
}
