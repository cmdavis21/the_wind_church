'use client';

import { Event, GET_ALL_EVENTS } from '@/data/types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllEvents = () => {
  const { data, isLoading, isError } = useQuery<Event[], Error>({
    queryKey: [GET_ALL_EVENTS],
    queryFn: async () => {
      const res = await fetch('/api/sanity/events');
      if (!res.ok) throw new Error(`${GET_ALL_EVENTS} ERROR`);
      return res.json();
    },
  });

  return {
    events: data ?? [],
    eventsLoading: isLoading,
    eventsError: isError,
  };
};
