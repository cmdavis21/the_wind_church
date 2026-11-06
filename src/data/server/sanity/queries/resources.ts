import { Locale } from '@/data/i18n/utils';
import { localizedFields, ResourceItem } from '@/data/types';
import { getLocalizedValue } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllResourcesQuery = async () => {
  return await SanityQuery({
    allResource: [
      {},
      {
        _updatedAt: true,
        title: localizedFields,
        type: true,
        description: localizedFields,
        category: true,
        file: {
          asset: {
            url: true,
          },
        },
        file_size: localizedFields,
        url: true,
        is_active: true,
      },
    ],
  }).then((y) => y.allResource);
};

export const getAllCategorizedResources = async (
  locale: Locale
): Promise<Record<string, ResourceItem[]>> => {
  const resources = await getAllResourcesQuery();

  let categorizedResources: Record<string, ResourceItem[]> = {};

  if (resources) {
    categorizedResources = resources.reduce<Record<string, ResourceItem[]>>((acc, resource) => {
      const category = resource.category;
      if (category) {
        if (!acc[category] || !resource.is_active) acc[category] = [];
        acc[category].push({
          title: getLocalizedValue(resource.title, locale) ?? '',
          type: resource.type ?? 'File',
          description: getLocalizedValue(resource.description, locale) ?? '',
          file: resource.file?.asset?.url ?? undefined,
          file_size: getLocalizedValue(resource.file_size, locale) ?? undefined,
          url: resource.url ?? undefined,
          updated_at: resource._updatedAt ? new Date(resource._updatedAt as string) : new Date(),
        });
      }
      return acc;
    }, {});
  }

  return categorizedResources;
};
