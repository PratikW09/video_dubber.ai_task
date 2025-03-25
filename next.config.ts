/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ If using app router
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
