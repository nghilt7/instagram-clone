/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "img.freepik.com"],
  },
};

module.exports = nextConfig;
