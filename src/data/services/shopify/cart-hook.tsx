'use client';

import {
  ADD_TO_CART_KEY,
  DELETE_CART_ITEMS_KEY,
  GET_CART_KEY,
  UPDATE_CART_ITEMS_KEY,
} from '@/data/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { cartLinesAdd, cartLinesRemove, cartLinesUpdate } from './mutations/cart';
import { getCurrentCart } from './queries/cart';
import { GraphQLTypes } from './zeus';

export const useCartFunctions = () => {
  const queryClient = useQueryClient();

  const { data: getCart, isLoading: cartLoading } = useQuery({
    queryKey: [GET_CART_KEY],
    queryFn: () => getCurrentCart(),
  });

  const refetchCart = () => {
    queryClient.invalidateQueries({ queryKey: [GET_CART_KEY] });
  };

  const addToCartMutation = useMutation({
    mutationKey: [ADD_TO_CART_KEY],
    mutationFn: (input: GraphQLTypes['CartLineInput'][]) => cartLinesAdd(input),
    onSuccess: () => refetchCart(),
  });

  const addToCart = async (input: GraphQLTypes['CartLineInput'][]) =>
    addToCartMutation.mutateAsync(input);

  const updateCartItemsMutation = useMutation({
    mutationKey: [UPDATE_CART_ITEMS_KEY],
    mutationFn: (lines: GraphQLTypes['CartLineUpdateInput'][]) => cartLinesUpdate(lines),
    onSuccess: () => refetchCart(),
  });

  const updateCartItems = async (lines: GraphQLTypes['CartLineUpdateInput'][]) =>
    updateCartItemsMutation.mutateAsync(lines);

  const deleteCartItemsMutation = useMutation({
    mutationKey: [DELETE_CART_ITEMS_KEY],
    mutationFn: (lineIds: string[]) => cartLinesRemove(lineIds),
    onSuccess: () => refetchCart(),
  });

  const deleteCartItems = async (lineIds: string[]) => deleteCartItemsMutation.mutateAsync(lineIds);

  return { getCart, cartLoading, addToCart, updateCartItems, deleteCartItems };
};
