import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/financial-calculator/",
  assetPrefix: '/financial-calculator/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
