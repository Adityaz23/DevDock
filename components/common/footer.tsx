// // "use client";

// // import Link from "next/link";
// // import { Github, Twitter, Linkedin } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="relative w-full bg-indigo-800 text-white py-16">
// //       <div className="mx-auto max-w-6xl px-6">
        
// //         {/* Brand */}
// //         <h3 className="text-2xl font-semibold tracking-tight">
// //           Dev<span className="text-indigo-500">Do</span>ck
// //         </h3>

// //         <p className="mt-3 max-w-sm text-sm text-white/70">
// //           A platform for developers to share projects, get feedback,
// //           and connect with creators worldwide.
// //         </p>

// //         {/* Links */}
// //         <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
// //           <div>
// //             <h4 className="text-sm font-semibold uppercase text-white/70">
// //               Product
// //             </h4>
// //             <ul className="mt-3 space-y-2 text-sm text-white/70">
// //               <li><Link href="/explore" className="hover:text-white">Explore Projects</Link></li>
// //               <li><Link href="/share" className="hover:text-white">Share a Project</Link></li>
// //               <li><Link href="/features" className="hover:text-white">Features</Link></li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-sm font-semibold uppercase text-white/70">
// //               Community
// //             </h4>
// //             <ul className="mt-3 space-y-2 text-sm text-white/70">
// //               <li><Link href="/creators" className="hover:text-white">Creators</Link></li>
// //               <li><Link href="/guidelines" className="hover:text-white">Guidelines</Link></li>
// //               <li><Link href="/feedback" className="hover:text-white">Feedback</Link></li>
// //             </ul>
// //           </div>

// //           {/* Social */}
// //           <div>
// //             <h4 className="text-sm font-semibold uppercase text-white/70">
// //               Connect
// //             </h4>

// //             <div className="mt-4 flex gap-3">
// //               {[Github, Twitter, Linkedin].map((Icon, i) => (
// //                 <div
// //                   key={i}
// //                   className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
// //                 >
// //                   <Icon className="h-5 w-5" />
// //                 </div>
// //               ))}
// "use client"
// import Link from "next/link";
// import { Github, Twitter, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="border-t bg-muted/30 border-pink-200">
//       <div className="mx-auto max-w-7xl px-6 py-12">
//         {/* Top Section */}
//         <div className="grid gap-10 md:grid-cols-4">
//           {/* Brand */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold tracking-tight">
//               Dev<span className="text-indigo-600">Do</span>ck
//             </h3>
//             <p className="text-sm text-primary/75 max-w-xs ">
//               A platform for developers to share projects, get feedback, and
//               connect with creators worldwide.
//             </p>
//           </div>

//           {/* Product */}
//           <div className="space-y-3 hidden lg:block">
//             <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/75">
//               Product
//             </h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <Link href="/explore" className="hover:text-foreground transition text-primary/75">
//                   Explore Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/share" className="hover:text-foreground transition text-primary/75">
//                   Share a Project
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/features" className="hover:text-foreground transition text-primary/75">
//                   Features
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Community */}
//           <div className="space-y-3 hidden lg:block">
//             <h4 className="text-sm font-semibold uppercase tracking-wide text-primary/75">
//               Community
//             </h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <Link href="/creators" className="hover:text-foreground transition text-primary/75">
//                   Creators
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/guidelines" className="hover:text-foreground transition text-primary/75">
//                   Guidelines
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/feedback" className="hover:text-foreground transition text-primary/75">
//                   Feedback
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div className="space-y-3">
//             <h4 className="text-sm font-semibold uppercase tracking-wide">
//               Connect
//             </h4>
//             <div className="flex items-center gap-4 text-muted-foreground">
//               <Link
//                 href="https://github.com"
//                 target="_blank"
//                 className="hover:text-foreground transition"
//               >
//                 <Github className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://twitter.com"
//                 target="_blank"
//                 className="hover:text-foreground transition"
//               >
//                 <Twitter className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://linkedin.com"
//                 target="_blank"
//                 className="hover:text-foreground transition"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
//           <p>© {new Date().getFullYear()} DevDock. All rights reserved.</p>

//           <div className="flex gap-4">
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms of Service</Link>
//         {/* Bottom Section */}
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-rose-200 pt-6 text-sm md:flex-row text-primary/75">
//           <p>© {new Date().getFullYear()} DevDock. All rights reserved.</p>

//           <div className="flex gap-4">
//             <Link href="/privacy" className="hover:text-foreground transition text-primary/75">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:text-foreground transition text-primary/75">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

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
              <li>
                <Link href="/explore" className="hover:text-white">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/share" className="hover:text-white">
                  Share a Project
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Community
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/creators" className="hover:text-white">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-white">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-white">
                  Feedback
                </Link>
              </li>
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
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}