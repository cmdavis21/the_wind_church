'use client';

import { GET_ALL_MINISTRIES, Ministry } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllMinistries = () => {
  const { data, isLoading, isError } = useQuery<Ministry[], Error>({
    queryKey: [GET_ALL_MINISTRIES],
    queryFn: async () => {
      const res = await fetch('/api/sanity/ministries');
      if (!res.ok) throw new Error(`${GET_ALL_MINISTRIES} ERROR`);
      return res.json();
    },
  });

  return {
    ministries: data ?? [],
    ministriesLoading: isLoading,
    ministriesError: isError,
  };
};
