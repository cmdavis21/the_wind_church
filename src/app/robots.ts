import { WEBSITE_BASE_URL } from '@/data/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_APPLICATION_MODE === 'production';
  return isProd
    ? {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/studio/'],
        },
        sitemap: `${WEBSITE_BASE_URL}/sitemap.xml`,
      }
    : {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
      };
}
