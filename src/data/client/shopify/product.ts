import { useQuery } from '@tanstack/react-query';
import { GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY } from '../../types';

export const useGetStorefrontProductByHandle = (handle: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY, handle],
    queryFn: async () => {
      const res = await fetch('/api/store/products/handle', {
        method: 'GET',
        body: JSON.stringify({ handle }),
      });
      if (!res.ok) throw new Error('Product not found');
      return res.json();
    },
  });

  return {
    product: data,
    productLoading: isLoading,
    productError: isError,
  };
};
