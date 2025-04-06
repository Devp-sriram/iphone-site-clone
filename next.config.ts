import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        // SVG configuration
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
        // MP4 configuration
        '*.mp4': {
          loaders: [],
          as: 'asset',
        },
      },
    },
  },
  // Optional: Standard webpack configuration for videos
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
