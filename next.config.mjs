/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  compress: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin('src/data/services/i18n/request.ts');

export default withNextIntl(nextConfig);
