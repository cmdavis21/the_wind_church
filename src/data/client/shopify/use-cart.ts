'use client';

import { GraphQLTypes } from '@/data/server/shopify/zeus';
import {
  ADD_TO_CART_KEY,
  Cart,
  GET_CART_KEY,
  REMOVE_CART_ITEMS_KEY,
  UPDATE_CART_ITEMS_KEY,
} from '@/data/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useCart = () => {
  const queryClient = useQueryClient();

  // GET CART
  const { data: cart, isLoading: cartLoading } = useQuery<Cart | null, Error>({
    queryKey: [GET_CART_KEY],
    queryFn: async () => {
      const res = await fetch('/api/shopify/cart/get');
      if (!res.ok) throw new Error(`${GET_CART_KEY} ERROR`);
      return res.json();
    },
  });

  const refetchCart = () => {
    queryClient.invalidateQueries({ queryKey: [GET_CART_KEY] });
  };

  // ADD CART ITEMS
  const addCartItemsMutation = useMutation<Cart | null, Error, GraphQLTypes['CartLineInput'][]>({
    mutationKey: [ADD_TO_CART_KEY],
    mutationFn: async (lines: GraphQLTypes['CartLineInput'][]) => {
      const res = await fetch('/api/shopify/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lines }),
      });

      if (!res.ok) throw new Error(`${ADD_TO_CART_KEY} ERROR`);
      return res.json();
    },
    onSuccess: refetchCart,
  });

  const addCartItems = (lines: GraphQLTypes['CartLineInput'][]) =>
    addCartItemsMutation.mutateAsync(lines);

  // UPDATE CART ITEMS
  const updateCartItemsMutation = useMutation<
    Cart | null,
    Error,
    GraphQLTypes['CartLineUpdateInput'][]
  >({
    mutationKey: [UPDATE_CART_ITEMS_KEY],
    mutationFn: async (lines: GraphQLTypes['CartLineUpdateInput'][]) => {
      const res = await fetch('/api/shopify/cart/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lines }),
      });

      if (!res.ok) throw new Error(`${UPDATE_CART_ITEMS_KEY} ERROR`);
      return res.json();
    },
    onSuccess: refetchCart,
  });

  const updateCartItems = (lines: GraphQLTypes['CartLineUpdateInput'][]) =>
    updateCartItemsMutation.mutateAsync(lines);

  // REMOVE CART ITEMS
  const removeCartItemsMutation = useMutation<Cart | null, Error, string[]>({
    mutationKey: [REMOVE_CART_ITEMS_KEY],
    mutationFn: async (lineIds: string[]) => {
      const res = await fetch('/api/shopify/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineIds }),
      });

      if (!res.ok) throw new Error(`${REMOVE_CART_ITEMS_KEY} ERROR`);
      return res.json();
    },
    onSuccess: refetchCart,
  });

  const removeCartItems = (lineIds: string[]) => removeCartItemsMutation.mutateAsync(lineIds);

  return { cart, cartLoading, addCartItems, updateCartItems, removeCartItems };
};
