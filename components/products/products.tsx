import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Creating the type for our featured product
interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const hasVoted = false;
  return (
    <div>
      <Link href={`/products${product.id}`}>
        <Card
          className="group card-hover transition-all duration-200 ease-out hover:shadow-xl
    hover:-translate-y-1 hover:bg-primary-foreground/20 border-solid border-gray-500 min-h-[180px] relative"
        >
          <CardHeader className="flex-1">
            <div className="flex items-start gap-4">
              <div className="felx-1 min-w-0">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg group-hover:text-white transition-colors">
                    {product.name}
                  </CardTitle>
                  {product.isFeatured && (
                    <Badge
                      variant="outline"
                      className="bg-linear-to-r from-rose-300 to-orange-200 gap-1"
                    >
                      <StarIcon className="size-3 bg-pink-300" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="font-bold text-gray-600">
                  {product.description}
                </CardDescription>
              </div>
              {/* Voting button. */}
              <div className="absolute right-4 top-1/4 -translate-y-0.5 flex flex-col items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={cn(
                    "h-8 w-8 text-primary",
                    hasVoted
                      ? "hover:text-green-500 hover:bg-linear-to-r from-green-100 to-teal-100"
                      : "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ChevronUpIcon className="size-4" />
                </Button>
                <span className="text-xs font-semibold transition-colors text-foreground">
                  10
                </span>

                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={cn(
                    "h-8 w-8 text-primary",
                    hasVoted
                      ? "hover:text-red-500 hover:bg-linear-to-r from-pink-100 to-red-100"
                      : "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ChevronDownIcon className="size-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-2 ">
              {product.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-linear-to-l from-blue-300 to-fuchsia-300 text-zinc-800 items-center"
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
