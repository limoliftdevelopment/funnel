/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize for Vercel deployment
  output: 'standalone',
}

module.exports = nextConfig
