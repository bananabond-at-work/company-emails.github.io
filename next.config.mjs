const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/company-email-formats/' : '',
  basePath: isProd ? '/company-email-formats' : '',
  output: 'export',
  // Disable API routes since we're using static export
  trailingSlash: true,
};

export default nextConfig;