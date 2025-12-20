import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

const oldStandard = Old_Standard_TT({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevDock - Share Your Creation to the world",
  description: "Welcome aboard DevDock — where every project finds its harbor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${oldStandard.className} ${oldStandard.className} antialiased`}
        >
          <Suspense>
            <Header />
          </Suspense>
          {children}
          <Suspense>
            <Footer />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
