'use client';

import { GET_ALL_MINISTRIES } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllMinistries = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_MINISTRIES],
    queryFn: async () => {
      const res = await fetch('/api/sanity/ministries');

      if (!res.ok) throw new Error('Failed to fetch ministries');

      return res.json();
    },
  });

  return {
    ministries: data ?? [],
    ministriesLoading: isLoading,
    ministriesError: isError,
  };
};
