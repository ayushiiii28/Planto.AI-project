// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-image-domain.com'], // Add any image domains you want to use
    },
    typescript: {
      // Enable type checking in production builds
      ignoreBuildErrors: false,
    },
    experimental: {
      appDir: true, // This is to enable App Directory (if you are using Next.js 13+)
    },
  }
  