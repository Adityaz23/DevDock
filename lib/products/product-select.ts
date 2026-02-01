import { products } from "@/db/schema";
import { db } from "@/db/seed";
import { desc, eq } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

export async function getFeaturedProducts() {
  noStore();
  return db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.createdAt));
}

export async function getAllApprovedProducts() {
  noStore();
  return db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));
}

export async function getAllProducts() {
  noStore();
  return db.select().from(products).orderBy(desc(products.createdAt));
}

export async function getRecentlyLaunedProduct() {
  noStore();

  const productData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt) >= oneWeekAgo
  );
}

export async function getProductBySlug(slug: string) {
  noStore();

  const product = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug));

  return product[0] ?? null;
}
