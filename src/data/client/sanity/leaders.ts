'use client';

import { GET_ALL_LEADERS, Leader } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategorizedLeaders = () => {
  const { data, isLoading, isError } = useQuery<Leader[], Error>({
    queryKey: [GET_ALL_LEADERS],
    queryFn: async () => {
      const res = await fetch('/api/sanity/leaders');
      if (!res.ok) throw new Error(`${GET_ALL_LEADERS} ERROR`);
      return res.json();
    },
  });

  return {
    leaders: data ?? [],
    leadersLoading: isLoading,
    leadersError: isError,
  };
};
