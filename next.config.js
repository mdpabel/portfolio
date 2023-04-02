/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['uploads-ssl.webflow.com', 'em-content.zobj.net'],
  },
};

module.exports = nextConfig;
