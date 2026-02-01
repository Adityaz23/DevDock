// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: false, // 🚨 TURN THIS OFF
  },
  reactCompiler: true,
};

export default nextConfig;
