/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
  };
  
  module.exports = nextConfig;

  // next.config.js
const path = require('path');

module.exports = {
  experimental: {
    esmExternals: true,
  },
  
  images: {
    domains: ['i.pravatar.cc'], 
  },
  pageExtensions: ['jsx', 'js'],
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};


  // /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig