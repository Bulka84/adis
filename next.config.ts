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
    unoptimized: true,
  },
};

export default nextConfig;
