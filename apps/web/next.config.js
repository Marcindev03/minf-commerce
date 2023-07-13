/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.cdn.baselinker.com"],
  },
  transpilePackages: ["ui", "database", "baselinker", "core"],
  typescript: {
    // TODO remove ASAP when typescript compilator "Maximum call stack exeeded" error will be removed
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
