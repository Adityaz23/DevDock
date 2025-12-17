import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";
export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    //Core product name ->
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    tagline: varchar("tagline", { length: 100 }).notNull(),
    description: text("description").notNull(),

    // Website Url's ->
    websiteUrl: text("website_url"),
    tags: json("tags").$type<string[]>(),

    //Voting ->
    voteCount: integer("vote_count").notNull().default(0),

    // MetaData ->
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    approvedAt: timestamp("approved_at", { withTimezone: true }),
    status: varchar("status", { length: 25 }).default("pending"), // pending, approved or deleted
    submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),
    userId: varchar("user_id", { length: 120 }), //Clerk user id.

    //Organization refernce (for backend queries)
    organizationId: varchar("organization_id", { length: 200 }),
  },
  (table) => ({
    slugIdx: uniqueIndex("product_slug_id").on(table.slug),
    statusIdx: index("status_of_product").on(table.status),
    organizationIdx: index("orgainzation_of_product").on(table.organizationId),
  })
);
