import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border rounded-xl p-6 space-y-4 min-h-[200px]">
            {/* Top content */}
            <div className="flex items-start justify-between gap-4">
              {/* Left text */}
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Vote column */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <Skeleton className="h-5 w-5 rounded-md" />
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-5 w-5 rounded-md" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
