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
  },
  // Completely disable metadata image generation and webpack loaders
  webpack: (config, { isServer, dev }) => {
    // Completely disable Next.js metadata image processing
    config.module.rules = config.module.rules.filter(rule => {
      // Remove any rules that handle metadata images
      if (rule.test && rule.test.toString().includes('metadata-image-loader')) {
        return false;
      }
      if (rule.test && rule.test.toString().includes('opengraph-image')) {
        return false;  
      }
      if (rule.test && rule.test.toString().includes('twitter-image')) {
        return false;
      }
      if (rule.test && rule.test.toString().includes('favicon')) {
        return false;
      }
      if (rule.test && rule.test.toString().includes('apple-icon')) {
        return false;
      }
      return true;
    });

    // Remove metadata loaders from all existing rules  
    config.module.rules.forEach(rule => {
      if (rule.use && Array.isArray(rule.use)) {
        rule.use = rule.use.filter(use => {
          if (typeof use === 'object' && use.loader) {
            const loader = use.loader;
            if (loader.includes('metadata-image-loader') || 
                loader.includes('next-metadata-image-loader') ||
                loader.includes('opengraph-image') ||
                loader.includes('twitter-image') ||
                loader.includes('favicon') ||
                loader.includes('apple-icon')) {
              return false;
            }
          }
          return true;
        });
      }
    });

    // Disable Node.js modules in client bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        buffer: false,
        util: false
      }
    }

    return config
  },
}

module.exports = nextConfig