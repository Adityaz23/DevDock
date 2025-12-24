import { products } from "@/db/schema";
import { db } from "@/db/seed";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.createdAt));

  return productsData;
}
export async function getAllProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.createdAt));

  return productsData;
}

export async function getRecetnlyLaunedProduct() {
  await connection(); // this is the api request which will just let us get the products on the runtime.
  await new Promise((r) => setTimeout(r,3000));
  const productData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}
