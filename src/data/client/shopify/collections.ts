import { useQuery } from '@tanstack/react-query';
import { Collection, GET_STOREFRONT_COLLECTIONS_KEY } from '../../types';

export const useGetStorefrontCollections = () => {
  const { data, isLoading, isError } = useQuery<Collection[], Error>({
    queryKey: [GET_STOREFRONT_COLLECTIONS_KEY],
    queryFn: async () => {
      const res = await fetch('/api/shopify/collections');
      if (!res.ok) throw new Error(`${GET_STOREFRONT_COLLECTIONS_KEY} ERROR`);
      return res.json();
    },
  });

  return {
    collections: data ?? [],
    collectionsLoading: isLoading,
    collectionsError: isError,
  };
};
