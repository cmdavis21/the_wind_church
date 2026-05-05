import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { Address, Customer, GET_ADMIN_CUSTOMER_KEY, Order } from '../../types';

export const useLookupCustomer = (
  options?: UseMutationOptions<Customer | undefined, Error, string>
) => {
  return useMutation<Customer | undefined, Error, string>({
    mutationFn: async (email) => {
      const res = await fetch('/api/shopify/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Customer not found');

      return res.json();
    },
    ...options,
  });
};

export const useLookupCustomerOrders = (options?: UseMutationOptions<Order[], Error, string>) => {
  return useMutation<Order[], Error, string>({
    mutationFn: async (email) => {
      const res = await fetch('/api/shopify/customer/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('No Orders Found');

      return res.json();
    },
    ...options,
  });
};

export const useUpdateCustomerEmail = (
  options?: UseMutationOptions<Customer, Error, { id: string; email: string }>
) => {
  const queryClient = useQueryClient();

  return useMutation<Customer, Error, { id: string; email: string }>({
    mutationFn: async ({ id, email }) => {
      const res = await fetch('/api/shopify/customer/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, email }),
      });

      if (!res.ok) throw new Error('No Customer Found');

      return res.json() as Promise<Customer>;
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ADMIN_CUSTOMER_KEY],
      });
    },

    ...options,
  });
};

export const useUpdateCustomerAddress = (
  options?: UseMutationOptions<Address, Error, { id: string; address: Partial<Address> }>
) => {
  const queryClient = useQueryClient();

  return useMutation<Address, Error, { id: string; address: Partial<Address> }>({
    mutationFn: async ({ id, address }) => {
      const res = await fetch('/api/shopify/customer/address', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, address }),
      });

      if (!res.ok) throw new Error('No Customer Found');

      return res.json() as Promise<Address>;
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ADMIN_CUSTOMER_KEY],
      });
    },

    ...options,
  });
};
