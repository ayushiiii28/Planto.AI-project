// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // Replace with your actual image domains
  },
  typescript: {
    ignoreBuildErrors: false, // Set to true to ignore TypeScript errors in production
  },
  experimental: {
    appDir: true, // Enable app directory (Next.js 13+ feature)
  },
}

export default nextConfig
