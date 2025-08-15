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
  generateBuildId: async () => {
    return 'netlify-build'
  },
  webpack: (config, { isServer }) => {
    // Disable all metadata processing
    config.resolve.alias = {
      ...config.resolve.alias,
      'next/og': false
    };

    // Remove metadata-related rules and loaders
    config.module.rules = config.module.rules.filter(rule => {
      const ruleStr = rule.test ? rule.test.toString() : '';
      if (ruleStr.includes('metadata') || 
          ruleStr.includes('icon') || 
          ruleStr.includes('opengraph') || 
          ruleStr.includes('apple-icon')) {
        return false;
      }
      return true;
    });

    // Filter out metadata loaders from all rules
    config.module.rules.forEach(rule => {
      if (rule.use && Array.isArray(rule.use)) {
        rule.use = rule.use.filter(use => {
          if (typeof use === 'object' && use.loader) {
            const loader = use.loader;
            if (loader.includes('metadata') || 
                loader.includes('next-metadata')) {
              return false;
            }
          }
          return true;
        });
      }
    });

    return config;
  }
}

module.exports = nextConfig