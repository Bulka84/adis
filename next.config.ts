import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd ? "/adis" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Static export requires unoptimized: true (no server-side image processing)
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
