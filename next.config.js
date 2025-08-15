/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Enable build caching
    turbotrace: {
      logLevel: 'error'
    }
  },
  // Optimize for Netlify
  generateBuildId: async () => {
    return 'netlify-build'
  }
}

module.exports = nextConfig