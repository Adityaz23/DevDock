import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: !isDev, // ❌ dev | ✅ prod
  },
  reactCompiler: true,
};

export default nextConfig;
