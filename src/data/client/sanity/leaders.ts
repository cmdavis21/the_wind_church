'use client';

import { GET_ALL_LEADERS } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategorizedLeaders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_LEADERS],
    queryFn: async () => {
      const res = await fetch('/api/sanity/leaders');

      if (!res.ok) throw new Error('Failed to fetch leaders');

      return res.json();
    },
  });

  return {
    leaders: data ?? [],
    leadersLoading: isLoading,
    leadersError: isError,
  };
};
