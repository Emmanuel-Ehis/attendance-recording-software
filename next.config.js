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
  // Specify the location of the pages directory
  images: {
    domains: ['127.0.0.1'], 
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