import type { NextConfig } from "next";
const env = process.env.NODE_ENV
console.log(env)

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: env !== "production" ?"" :"https://bananabond-at-work.github.io/company-email-formats",
  // No API routes needed since we're using static files
  trailingSlash: true,
};

export default nextConfig;
