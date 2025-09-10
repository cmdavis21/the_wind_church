'use client';

import { GraphQLTypes } from './zeus';
import { getCurrentCart } from './queries/cart';
import { cartLinesAdd, cartLinesRemove, cartLinesUpdate } from './mutations/cart';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  ADD_TO_CART_KEY,
  DELETE_CART_ITEMS_KEY,
  GET_CART_KEY,
  UPDATE_CART_ITEMS_KEY,
} from '@/data/constants';

export const useCartFunctions = () => {
  const queryClient = useQueryClient();

  const { data: getCart } = useQuery({
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
    mutationFn: (lineIds: GraphQLTypes['ID'][]) => cartLinesRemove(lineIds),
    onSuccess: () => refetchCart(),
  });

  const deleteCartItems = async (lineIds: GraphQLTypes['ID'][]) =>
    deleteCartItemsMutation.mutateAsync(lineIds);

  return { getCart, addToCart, updateCartItems, deleteCartItems };
};
