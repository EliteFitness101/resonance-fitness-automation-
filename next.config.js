/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This replaces the deprecated middleware convention
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.shopify.com/:path*', // Example proxy
      },
    ];
  },
};

module.exports = nextConfig;
