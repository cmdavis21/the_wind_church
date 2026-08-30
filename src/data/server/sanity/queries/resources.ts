import { ResourceItem } from '@/data/types';
import { SanityQuery } from '../zeus-chain';

const getAllResourcesQuery = async () => {
  return await SanityQuery({
    allResource: [
      {},
      {
        _updatedAt: true,
        title: true,
        type: true,
        description: true,
        category: true,
        file: {
          asset: {
            url: true,
          },
        },
        file_size: true,
        url: true,
        is_active: true,
      },
    ],
  }).then((y) => y.allResource);
};

export const getAllCategorizedResources = async (): Promise<Record<string, ResourceItem[]>> => {
  const resources = await getAllResourcesQuery();

  let categorizedResources: Record<string, ResourceItem[]> = {};

  if (resources) {
    categorizedResources = resources.reduce<Record<string, ResourceItem[]>>((acc, resource) => {
      const category = resource.category;
      if (category) {
        if (!acc[category] || !resource.is_active) acc[category] = [];
        acc[category].push({
          title: resource.title ?? '',
          type: resource.type ?? 'File',
          description: resource.description ?? '',
          file: resource.file?.asset?.url ?? undefined,
          file_size: resource.file_size ?? undefined,
          url: resource.url ?? undefined,
          updated_at: resource._updatedAt ? new Date(resource._updatedAt as string) : new Date(),
        });
      }
      return acc;
    }, {});
  }

  return categorizedResources;
};
