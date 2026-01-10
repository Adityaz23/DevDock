import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { StarIcon } from "lucide-react";

import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

// // Creating the type for our featured product
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   tags: string[];
//   votes: number;
//   isFeatured: boolean;
// }

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
  const hasVoted = false;
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <Card
          className="group card-hover transition-all duration-200 ease-out hover:shadow-xl
    hover:-translate-y-1 hover:bg-primary-foreground/20 border-solid border-gray-500 min-h-[200px] relative"
        >
          <CardHeader className="grid grid-cols-[1fr_auto] gap-4">
            <div className="flex items-start gap-4">
              <div className="felx-1 min-w-0">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg group-hover:text-white transition-colors">
                    {product.name}
                  </CardTitle>
                  {product.voteCount > 10 && (
                    <Badge
                      variant="outline"
                      className="bg-linear-to-r from-rose-300 to-orange-200 gap-1"
                    >
                      <StarIcon className="size-3 bg-pink-300" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="font-bold text-gray-600 lg:text-sm gap-1">
                  {product.description}
                </CardDescription>
              </div>
              {/* Voting button. */}
              <VotingButtons
                hasVoted={hasVoted}
                voteCount={product.voteCount}
                productId={product.id}
              />
            </div>
          </CardHeader>
          <CardFooter>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="shrink-0 bg-linear-to-l from-blue-300 to-fuchsia-300 text-zinc-800"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
