/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.cdn.baselinker.com"],
  },
  transpilePackages: ["ui", "database"],
};

module.exports = nextConfig;
