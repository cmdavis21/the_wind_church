import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { SanityClient } from '@/data/services/sanity/client';
import { getStorefrontProductHandles } from '@/data/services/shopify/queries/products';
import { MetadataRoute } from 'next';

// Exclude external or unwanted routes
const EXCLUDED = [PageRoutes.pushpay];

// Priority overrides for missionally important pages
const PRIORITY_OVERRIDES: Record<string, number> = {
  [PageRoutes.salvation]: 0.9,
  [PageRoutes.give]: 0.8,
  [PageRoutes.prayerRequests]: 0.7,
  [PageRoutes.events]: 0.8,
  [PageRoutes.sermons]: 0.8,
  [PageRoutes.deepDive]: 0.8,
  [PageRoutes.ministries]: 0.7,
};

// Change frequency overrides
const FREQUENCY_OVERRIDES: Record<string, MetadataRoute.Sitemap[number]['changeFrequency']> = {
  [PageRoutes.events]: 'monthly',
  [PageRoutes.sermons]: 'monthly',
  [PageRoutes.deepDive]: 'monthly',
  [PageRoutes.bookstore]: 'monthly',
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic slugs from Sanity
  const [deepDives, ministries] = await Promise.all([
    SanityClient.fetch(`*[_type == "deepDive"]{ "slug": slug.current, _updatedAt }`),
    SanityClient.fetch(`*[_type == "ministries"]{ "slug": slug.current, _updatedAt }`),
  ]);

  // Fetch dynamic slugs from Shopify
  const products = await getStorefrontProductHandles();

  // Convert dynamic content into sitemap entries
  const dynamicEntries = [
    ...deepDives.map((item: any) => ({
      url: `${WEBSITE_BASE_URL}${PageRoutes.deepDive}/${item.slug}`,
      lastModified: item._updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...ministries.map((item: any) => ({
      url: `${WEBSITE_BASE_URL}${PageRoutes.ministries}/${item.slug}`,
      lastModified: item._updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...products.map((item: any) => ({
      url: `${WEBSITE_BASE_URL}${PageRoutes.bookstore}/${item.handle}`,
      lastModified: item.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  // Static routes from PageRoutes
  const staticEntries = Object.values(PageRoutes)
    .filter((route) => !EXCLUDED.includes(route))
    .map((route) => ({
      url: `${WEBSITE_BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: FREQUENCY_OVERRIDES[route] ?? 'yearly',
      priority: PRIORITY_OVERRIDES[route] ?? 0.5,
    }));

  return [...staticEntries, ...dynamicEntries];
}
