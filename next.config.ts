import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a verification build write somewhere other than the running dev
  // server's .next, which the two otherwise fight over.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
