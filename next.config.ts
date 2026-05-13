import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/landing-page-gen',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
