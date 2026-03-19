import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/adis",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
