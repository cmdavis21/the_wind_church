import { WEBSITE_BASE_URL } from '@/data/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
    sitemap: `${WEBSITE_BASE_URL}/sitemap.xml`,
  };
}
