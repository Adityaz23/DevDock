import FeaturedHeader from "@/components/common/common-header";
import VotingButtons from "@/components/products/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  LucideCalendar1,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
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
  if (!product) {
    notFound();
  }
  const { name, description, tags, websiteUrl, voteCount, tagline } = product;
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeftIcon className="size-4" /> Back To Explore
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex-1 min-w-0">
                {/* passing the section header to it from the common-header */}
                <div className="mb-6">
                  <FeaturedHeader
                    title={name}
                    icon={StarIcon}
                    description={tagline ?? ""}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {Array.isArray(tags) &&
                    tags?.map((tag) => (
                      <Badge
                        variant="secondary"
                        key={tag}
                        className="shrink-0 bg-linear-to-l from-blue-300 to-fuchsia-300 text-zinc-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">About</h2>{" "}
              <p className="text-zinc-700/95 leading-relaxed">{description}</p>
            </div>
            {/* Now, the metadata information like who launched it when launched it. */}
            <div className="border rounded-lg p-6 bg-primary/10">
              <h2 className="text-lg font-semibold mb-4">Product Details!</h2>
              <div className="space-y-3">
                {[
                  {
                    label: "Launched On: ",
                    value: new Date(
                      product.createdAt?.toISOString() ?? "",
                    ).toLocaleDateString(),
                    icon: LucideCalendar1,
                  },
                  {
                    label: "Submitted By: ",
                    value: product.submittedBy,
                    icon: UserIcon,
                  },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    {Icon && <Icon className="size-4 text-zinc-700" />}
                    <span className=" text-zinc-700">{label}</span>
                    <span className=" font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="sticky top-24 space-y-4">
                {/* VOTING CARD */}
                <div className="border rounded-lg p-6 bg-rose-100/20 text-center space-y-4">
                  <p className="text-sm text-zinc-700 font-semibold">
                    Support this product
                  </p>

                  <div className="flex justify-center items-center">
                    <VotingButtons
                      productId={product.id}
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
    </div>
  );
}
