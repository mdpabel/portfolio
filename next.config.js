/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploads-ssl.webflow.com', 'em-content.zobj.net'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
