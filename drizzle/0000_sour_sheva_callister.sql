CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120) NOT NULL,
	"slug" varchar(160) NOT NULL,
	"tagline" varchar(220) NOT NULL,
	"description" text NOT NULL,
	"website_url" text,
	"tags" json,
	"vote_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"approved_at" timestamp with time zone,
	"status" varchar(25) DEFAULT 'pending',
	"submitted_by" varchar(120) DEFAULT 'anonymous',
	"user_id" varchar(230),
	"organization_id" varchar(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "product_slug_id" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "status_of_product" ON "products" USING btree ("status");--> statement-breakpoint
CREATE INDEX "orgainzation_of_product" ON "products" USING btree ("organization_id");