/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.cdn.baselinker.com"],
  },
  experimental: {
    appDir: true,
  },
  transpilePackages: ['ui']
};

module.exports = nextConfig;
