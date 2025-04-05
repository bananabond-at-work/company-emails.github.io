/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // No API routes needed since we're using static files
  trailingSlash: true,
};

export default nextConfig;