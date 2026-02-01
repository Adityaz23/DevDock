import FeaturedHeader from "@/components/common/common-header";
import VotingButtons from "@/components/products/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/products/product-select";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  LucideCalendar1,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 🚨 VERY IMPORTANT
// This page MUST be dynamic because products are added at runtime
export const dynamic = "force-dynamic";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  // If product does not exist → 404
  if (!product) {
    notFound();
  }

  const {
    id,
    name,
    description,
    tags,
    websiteUrl,
    voteCount,
    tagline,
    createdAt,
    submittedBy,
  } = product;

  // ✅ Server-safe date formatting (NO hydration issues)
  const createdDate = createdAt
    ? createdAt.toISOString().split("T")[0]
    : "Unknown";

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          Back To Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-6">
              <FeaturedHeader
                title={name}
                icon={StarIcon}
                description={tagline ?? ""}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {Array.isArray(tags) &&
                tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-linear-to-l from-blue-300 to-fuchsia-300 text-zinc-800"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>

            {/* Description */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-zinc-700/95 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Product Metadata */}
            <div className="border rounded-lg p-6 bg-primary/10">
              <h2 className="text-lg font-semibold mb-4">
                Product Details
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-sm">
                  <LucideCalendar1 className="size-4 text-zinc-700" />
                  <span className="text-zinc-700">Launched On:</span>
                  <span className="font-medium">{createdDate}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm">
                  <UserIcon className="size-4 text-zinc-700" />
                  <span className="text-zinc-700">Submitted By:</span>
                  <span className="font-medium">{submittedBy}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1 space-y-4">
            <div className="sticky top-24 space-y-4">
              {/* Voting Card */}
              <div className="border rounded-lg p-6 bg-rose-100/20 text-center space-y-4">
                <p className="text-sm text-zinc-700 font-semibold">
                  Support this product
                </p>

                <div className="flex justify-center">
                  <VotingButtons
                    productId={id}
                    voteCount={voteCount}
                  />
                </div>

                {voteCount >= 100 && (
                  <div className="pt-4 border-t">
                    <Badge
                      variant="secondary"
                      className="w-full justify-center py-2 bg-red-200/75 text-zinc-700 font-semibold"
                    >
                      🔥 Featured Product
                    </Badge>
                  </div>
                )}
              </div>

              {/* Website Link */}
              {websiteUrl && (
                <div className="border rounded-lg p-4 bg-pink-300/20">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-rose-300/20 hover:bg-primary/10"
                  >
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ExternalLinkIcon className="size-4 ml-2" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
