import Link from "next/link";
import Image from "next/image";
import { CompassIcon, HomeIcon, SparklesIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

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
        Dev<span className="text-indigo-600">Do</span>ck
      </span>
    </Link>
  );
};

export default function Header() {
  const isSigned = false;
  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-200 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/30">
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <Logo />
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-2 py-3 hover:text-foreground transition-colors text-sm font-serif  text-primary/60 hover:bg-muted/40 hover:bg-linear-to-bl from-blue-200 to-pink-200 border border-primary rounded-sm"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-2 py-3 hover:text-foreground transition-colors text-sm font-serif  text-primary/60 hover:bg-muted/40 hover:bg-linear-to-r from-blue-200 to-pink-200 border border-primary rounded-sm"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
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
                className="hover:bg-linear-to-tl from-blue-200 to-pink-200 hover:text-primary bg-white text-primary font-bold"
              >
                <Link href="/submit">
                  <SparklesIcon className="size-4" />
                  Submit Project
                </Link>
              </Button>
              {/* Replace the user icon with the clerk user. */}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
