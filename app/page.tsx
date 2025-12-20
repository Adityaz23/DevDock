import Featured from "@/components/landing-page/featured";
import Hero from "@/components/landing-page/hero-section";
import RecentlyLaunched from "@/components/landing-page/recently-launched";
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
      <Suspense fallback={<div>Loading recently featured section.....</div>}>
        <RecentlyLaunched />
      </Suspense>
    </>
  );
};

export default page;
