/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['leetcard.jacoblin.cool', 'raw.githubusercontent.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
