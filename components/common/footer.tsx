"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-indigo-800 text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Brand */}
        <h3 className="text-2xl font-semibold tracking-tight">
          Dev<span className="text-indigo-500">Do</span>ck
        </h3>

        <p className="mt-3 max-w-sm text-sm text-white/70">
          A platform for developers to share projects, get feedback,
          and connect with creators worldwide.
        </p>

        {/* Links */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/explore" className="hover:text-white">Explore Projects</Link></li>
              <li><Link href="/share" className="hover:text-white">Share a Project</Link></li>
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Community
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/creators" className="hover:text-white">Creators</Link></li>
              <li><Link href="/guidelines" className="hover:text-white">Guidelines</Link></li>
              <li><Link href="/feedback" className="hover:text-white">Feedback</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Connect
            </h4>

            <div className="mt-4 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} DevDock. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
