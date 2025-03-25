/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Temporarily ignore ESLint errors during build
  },
};

module.exports = nextConfig;
