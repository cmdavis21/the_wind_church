/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  compress: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        // SANITY
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        // SHOPIFY
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
      {
        // AWS
        protocol: 'https',
        hostname: 'thewindchurch.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        // YOUTUBE
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin('src/data/services/i18n/request.ts');

export default withNextIntl(nextConfig);
