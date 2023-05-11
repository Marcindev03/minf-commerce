/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.cdn.baselinker.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
