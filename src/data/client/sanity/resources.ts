'use client';

import { GET_ALL_RESOURCES, ResourceItem } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategorizedResources = () => {
  const { data, isLoading, isError } = useQuery<Record<string, ResourceItem[]>, Error>({
    queryKey: [GET_ALL_RESOURCES],
    queryFn: async () => {
      const res = await fetch('/api/sanity/resources');
      if (!res.ok) throw new Error(`${GET_ALL_RESOURCES} ERROR`);
      return res.json();
    },
  });

  return {
    resources: data ?? [],
    resourcesLoading: isLoading,
    resourcesError: isError,
  };
};
