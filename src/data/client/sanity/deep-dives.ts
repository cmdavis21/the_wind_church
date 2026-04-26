'use client';

import { GET_ALL_DEEP_DIVES } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllDeepDives = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_DEEP_DIVES],
    queryFn: async () => {
      const res = await fetch('/api/sanity/deep-dives');

      if (!res.ok) throw new Error('Failed to fetch deep dives');

      return res.json();
    },
  });

  return {
    deepDives: data ?? [],
    deepDivesLoading: isLoading,
    deepDivesError: isError,
  };
};
