/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['leetcard.jacoblin.cool'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
