import { ProductType } from "@/types";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Navigation, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function AdminProductCard({
  product,
}: {
  product: ProductType;
}) {
  return (
    // stylling the admin site card ->
    <Card className="mt-2 border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <div className="space-y-4 min-w-0 flex-1">
          <CardTitle className="text-xl font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p>{product.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-linear-to-r from-teal-400 to-emerald-200 text-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-x-4 gap-y-3 text-sm text-zinc-700">
              <p>
                <span className="font-bold">Submitted By:</span>{" "}
                {product.submittedBy}
              </p>
              <p>
                <span className="font-bold">Submitted On: </span>
                {product.createdAt
                  ? new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(product.createdAt?.toISOString() ?? ""))
                  : ""}
              </p>
              <p>
                <a
                  href={product.websiteUrl ?? " "}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:underline"
                >
                  Visit Website
                  <Navigation className="size-3" />
                </a>
              </p>
            </div>
          </CardDescription>
          <CardFooter>
            <Button
              variant={"outline"}
              className="hover:bg-red-400 hover:cursor-pointer"
            >
              <TrashIcon className="size-3" />
              Delete
            </Button>
          </CardFooter>
        </div>
      <div className="lg:shrink-0">hi{/* <ApprovedActions /> */}</div>
      </div>
    </Card>
  );
}
