'use client';

import { DeepDive, GET_ALL_DEEP_DIVES } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllDeepDives = () => {
  const { data, isLoading, isError } = useQuery<DeepDive[], Error>({
    queryKey: [GET_ALL_DEEP_DIVES],
    queryFn: async () => {
      const res = await fetch('/api/sanity/deep-dives');
      if (!res.ok) throw new Error(`${GET_ALL_DEEP_DIVES} ERROR`);
      return res.json();
    },
  });

  return {
    deepDives: data ?? [],
    deepDivesLoading: isLoading,
    deepDivesError: isError,
  };
};
