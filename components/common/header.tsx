import Link from "next/link";
import Image from "next/image";
import { HomeIcon, LoaderIcon, SparklesIcon, CompassIcon } from "lucide-react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Suspense } from "react";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/favicon.ico"
        alt="DevDock Logo"
        width={30}
        height={30}
        className="rounded"
      />
      <span className="text-xl font-bold ">
        Dev<span className="text-pink-600">Do</span>ck
      </span>
    </Link>
  );
};

// This code is just to check if the load spinner is working or not ->
const TestDelay = async ({ children }: { children: React.ReactNode }) => {
  await new Promise((r) => setTimeout(r, 1200));
  return <>{children}</>;
};
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-200 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/30">
      <Suspense fallback={<div>Loading..</div>}>
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <Logo />
          <nav className="items-center gap-2 hidden sm:flex">
            <Link
              href="/"
              className="flex items-center gap-2 px-2 py-3 hover:text-foreground transition-colors text-sm font-serif  text-primary/90 hover:bg-muted/40 hover:bg-linear-to-bl from-blue-200 to-pink-200 border-transparent rounded-sm"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-2 py-3 hover:text-foreground transition-colors text-sm font-serif  text-primary/90 hover:bg-muted/40 hover:bg-linear-to-r from-blue-200 to-pink-200 border-transparent rounded-sm"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size=4 animate-spin" />
                </div>
              }
            >
              <TestDelay>
                <SignedOut>
                  <SignInButton>
                    <Button
                      variant="ghost"
                      className="flex items-center px-2 py-3 hover:text-foreground transition-colors text-sm font-sans text-primary hover:bg-muted/45 hover:bg-linear-to-tr from-indigo-300 to-purple-100 border border-primary rounded-md"
                    >
                      <button className="hover:cursor-pointer">Sign In</button>
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      variant="ghost"
                      className="flex items-center px-2 py-3 hover:text-foreground transition-colors text-sm font-sans text-primary hover:bg-muted/45 hover:bg-linear-to-tl from-indigo-100 to-purple-300 border border-primary rounded-md"
                    >
                      <button className="hover:cursor-pointer">Sign Up</button>
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Button
                    asChild
                    className="ml-2 px-2 py-2 text-xs font-semibold hover:bg-linear-to-tl from-blue-200 to-pink-200 hover:text-primary bg-white text-primary"
                  >
                    <Link href="/submit">
                      <SparklesIcon className="size-3" />
                      <span className="ml-1">Submit Project</span>
                    </Link>
                  </Button>

                  <CustomUserButton />
                </SignedIn>
              </TestDelay>
            </Suspense>
          </div>
        </div>
      </div>
      </Suspense>
    </header>
  );
}
