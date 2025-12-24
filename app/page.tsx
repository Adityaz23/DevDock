import Featured from "@/components/landing-page/featured";
import Hero from "@/components/landing-page/hero-section";
import RecentlyLaunched from "@/components/landing-page/recently-launched";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading Hero Section.....</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading featured section.....</div>}>
        <Featured />
      </Suspense>
      <Suspense
  fallback={
    <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-4 py-3">
      <LoaderIcon className="size-4 animate-spin text-primary" />
      <span className="text-sm text-muted-foreground">
        Loading recently launched products…
      </span>
    </div>
  }
>
  <RecentlyLaunched />
</Suspense>
    </>
  );
};

export default page;
