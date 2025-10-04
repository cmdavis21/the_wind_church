/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  distDir: 'build',
  output: 'standalone',
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
