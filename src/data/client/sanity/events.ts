'use client';

import { GET_ALL_EVENTS } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllEvents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_EVENTS],
    queryFn: async () => {
      const res = await fetch('/api/sanity/events');

      if (!res.ok) throw new Error('Failed to fetch events');

      return res.json();
    },
  });

  return {
    events: data ?? [],
    eventsLoading: isLoading,
    eventsError: isError,
  };
};
