import { useQuery } from '@tanstack/react-query';
import {
  getStorefrontCollectionByHandle,
  getStorefrontCollections,
} from '../../server/shopify/queries/collections';
import { GET_STOREFRONT_COLLECTIONS_KEY } from '../../types';

export const useGetStorefrontCollections = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_STOREFRONT_COLLECTIONS_KEY],
    queryFn: getStorefrontCollections,
  });
  return {
    collections: data,
    collectionsLoading: isLoading,
    collectionsError: isError,
  };
};

export const useGetStorefrontCollectionByHandle = (handle: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_STOREFRONT_COLLECTIONS_KEY, handle],
    queryFn: () => getStorefrontCollectionByHandle(handle),
  });
  return {
    collection: data,
    collectionLoading: isLoading,
    collectionError: isError,
  };
};
