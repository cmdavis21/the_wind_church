import { useQuery } from '@tanstack/react-query';
import { GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY, Product } from '../../types';

export const useGetStorefrontProductByHandle = (handle: string) => {
  const { data, isLoading, isError } = useQuery<Product | undefined, Error, string>({
    queryKey: [GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY, handle],
    queryFn: async () => {
      const res = await fetch('/api/shopify/product/handle', {
        method: 'GET',
        body: JSON.stringify({ handle }),
      });
      if (!res.ok) throw new Error(`${GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY} ERROR`);
      return res.json();
    },
  });

  return {
    product: data,
    productLoading: isLoading,
    productError: isError,
  };
};
