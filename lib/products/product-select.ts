import { products } from "@/db/schema";
import { db } from "@/db/seed";

export async function getFeaturedProducts() {
  const productsData = await db.select().from(products);

  return productsData;
}
