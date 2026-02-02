import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { products } from "./schema";
import { allProducts } from "./data";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await db.delete(products);
  console.log("Cleared existing data!");

  // Insert products
  for (const product of allProducts) {
    await db
      .insert(products)
      .values({
        name: product.name,
        slug: product.slug,
        tagline: product.tagline,
        description: product.description,
        websiteUrl: product.websiteUrl,
        tags: product.tags,
        voteCount: product.voteCount ?? 0,
        createdAt: product.createdAt,
        approvedAt: product.approvedAt,
        status: product.status,
        submittedBy: product.submittedBy,
        userId: product.userId,
        organizationId: product.organizationId,
      })
      .onConflictDoNothing();

    console.log(
      `Added product: ${product.name} (${product.voteCount ?? 0}) votes`
    );
  }

  const insertedProducts = await db.select().from(products);

  console.log(`\nSuccessfully seeded ${insertedProducts.length} products:\n`);
  for (const product of insertedProducts) {
    console.log(
      ` - ${product.name} (${product.slug}) — ${product.voteCount} votes`
    );
  }
}

main()
  .then(() => {
    console.log("Seeding completed");
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });
