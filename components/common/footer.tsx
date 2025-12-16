import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 border-pink-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Dev<span className="text-indigo-600">Do</span>ck
            </h3>
            <p className="text-sm text-primary/75 max-w-xs ">
              A platform for developers to share projects, get feedback, and
              connect with creators worldwide.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/75">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/explore" className="hover:text-foreground transition text-primary/75">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/share" className="hover:text-foreground transition text-primary/75">
                  Share a Project
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-foreground transition text-primary/75">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/75">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/creators" className="hover:text-foreground transition text-primary/75">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-foreground transition text-primary/75">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-foreground transition text-primary/75">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-foreground transition"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-foreground transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-foreground transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-rose-200 pt-6 text-sm md:flex-row text-primary/75">
          <p>© {new Date().getFullYear()} DevDock. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition text-primary/75">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition text-primary/75">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
