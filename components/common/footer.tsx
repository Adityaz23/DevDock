"use client";

import Link from "next/link";
import { Github, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#cfaedb] via-[#c7a6d4] to-[#b896c7] text-[#2e1f3a] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Brand */}
        <h3 className="text-2xl font-semibold tracking-tight text-[#2e1f3a]">
          Dev<span className="text-pink-600">Do</span>ck
        </h3>
        <p className="mt-3 max-w-sm text-sm text-[#2e1f3a]/70">
          A platform for developers to share projects, get feedback, and connect
          with creators worldwide.
        </p>

        {/* Links */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#2e1f3a]/70">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#2e1f3a]/70">
              <li>
                <Link
                  href="/explore"
                  className="hover:text-[#2e1f3a] transition"
                >
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/share" className="hover:text-[#2e1f3a] transition">
                  Share a Project
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-[#2e1f3a] transition"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#2e1f3a]/70">
              Connect
            </h4>

            <div className="mt-4 flex gap-3">
              {/* GitHub */}
              <Link
                href="https://github.com/Adityaz23"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/30 bg-white/20 hover:bg-white/30 transition"
              >
                <Github className="h-5 w-5 text-[#2e1f3a]" />
              </Link>

              {/* X (Twitter) */}
              <Link
                href="https://x.com/AdityaS69610269"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/30 bg-white/20 hover:bg-white/30 transition"
              >
                <X className="h-5 w-5 text-[#2e1f3a]" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/aditya-soni-83225a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/30 bg-white/20 hover:bg-white/30 transition"
              >
                <Linkedin className="h-5 w-5 text-[#2e1f3a]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#2e1f3a]/70">
          <p>© {new Date().getFullYear()} DevDock. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#2e1f3a] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#2e1f3a] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
