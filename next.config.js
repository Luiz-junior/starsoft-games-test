/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    // Enables SSR / class-name consistency for styled-components
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'softstar.s3.amazonaws.com' },
    ],
  },
};

module.exports = nextConfig;
