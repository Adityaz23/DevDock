import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine, EyeIcon, LucideRocket, UserCircle, WandSparklesIcon } from "lucide-react";
import Link from "next/link";
import Stats from "./stats-card";
// extracting the hero section badge which is live in here
const LiveBadge = () => {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 mb-6 mr-2 text-sm backdrop-blur-sm font-semibold bg-transaparent border-x-fuchsia-500 border-y-rose-300"
    >
      <span className="relative flex h-2 w-2 ">
        <span className="animate-ping absolute inline-flex items-center h-full w-full rounded-full bg-rose-300 opacity-75 size-0.5" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-200" />
      </span>

      <span className="text-shadow-muted-foreground">
        Join Thousand of developers sharing their work!
      </span>
    </Badge>
  );
};
const StatsData = [
  {
    icon: LucideRocket,
    value: "1.2K",
    label:"Project Shared!"
  },
   {
    icon: UserCircle,
    value: "5K",
    label:"Active Creators!",
    hasBorder: true, 
  },
   {
    icon: EyeIcon,
    value: "20K",
    label:"Monthly visitors!"
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear from-background via-background/1 to-muted/1">
        <div className="mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
            <LiveBadge />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-mono tracking-tight mb-6 max-w-6xl">
              The Home for Developers to Share What They Create.
            </h1>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              Turn your ideas into impact. Share your builds, get feedback, and
              connect with creators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Button
                asChild
                size="lg"
                className="text-base px-8 shadow-lg hover:bg-pink-300 bg-primary hover:text-black"
              >
                <Link href="/submit">
                  <WandSparklesIcon className="size-4" />
                  Share your projects
                </Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                size="lg"
                className="text-base px-8 shadow-lg  bg-rose-200 hover:bg-red-300 hover:text-white"
              >
                <Link href="/explore">
                  Explore projects
                  <ArrowRightToLine className="size-4" />
                </Link>
              </Button>
            </div>
            {/* looping thorught the stats card. */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
            {StatsData.map((stat)=>(
                <Stats key={stat.label}{...stat}/>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
