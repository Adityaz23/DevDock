import type { Metadata } from "next";
import {Old_Standard_TT } from "next/font/google";
import "./globals.css";

const oldStandard = Old_Standard_TT({
  weight:["400","700"],
  subsets:["vietnamese"],
  style:["normal"],
  display:"swap"
})

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
    <html lang="en">
      <body
        className={`${oldStandard.className} ${oldStandard.className} antialiased`}
      >
        <header>Sharing.</header>
        {children}
        <footer>Sharing Inc.</footer>
      </body>
    </html>
  );
}
