import Featured from "@/components/landing-page/featured";
import Hero from "@/components/landing-page/hero-section";
import RecentlyLaunched from "@/components/landing-page/recently-launched";
import ProductSkeleton from "@/components/products/product-skeleton";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Featured />

      <Suspense
        fallback={
          <ProductSkeleton />
        }
      >
        <RecentlyLaunched />
      </Suspense>
    </>
  );
};

export default page;
