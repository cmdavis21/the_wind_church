import { Cart } from '@/data/types';
import { CropRegion, CurrencyCode, GraphQLTypes, ImageContentType } from '../zeus';
import { ShopifyQuery } from '../zeus-chain';

export const cartCreateMutation = async (input: GraphQLTypes['CartInput']) => {
  return await ShopifyQuery.mutation({
    cartCreate: [
      { input },
      {
        cart: {
          id: true,
          checkoutUrl: true,
          totalQuantity: true,
          cost: {
            subtotalAmount: {
              amount: true,
              currencyCode: true,
            },
          },
          lines: [
            { first: 20 },
            {
              nodes: {
                id: true,
                quantity: true,
                cost: {
                  subtotalAmount: {
                    amount: true,
                    currencyCode: true,
                  },
                },
                merchandise: {
                  '...on ProductVariant': {
                    id: true,
                    price: {
                      amount: true,
                      currencyCode: true,
                    },
                    compareAtPrice: {
                      amount: true,
                      currencyCode: true,
                    },
                    selectedOptions: {
                      name: true,
                      value: true,
                    },
                    product: {
                      title: true,
                      images: [
                        { first: 1 },
                        {
                          nodes: {
                            url: [
                              {
                                transform: {
                                  maxWidth: 1200,
                                  maxHeight: 1200,
                                  crop: CropRegion.CENTER,
                                  preferredContentType: ImageContentType.JPG,
                                },
                              },
                              true,
                            ],
                            altText: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ],
  });
};

export const cartLinesAddMutation = async (
  cartId: string,
  lines: GraphQLTypes['CartLineInput'][]
) => {
  return await ShopifyQuery.mutation({
    cartLinesAdd: [
      { cartId, lines },
      {
        cart: {
          id: true,
          checkoutUrl: true,
          totalQuantity: true,
          cost: {
            subtotalAmount: {
              amount: true,
              currencyCode: true,
            },
          },
          lines: [
            { first: 20 },
            {
              nodes: {
                id: true,
                quantity: true,
                cost: {
                  subtotalAmount: {
                    amount: true,
                    currencyCode: true,
                  },
                },
                merchandise: {
                  '...on ProductVariant': {
                    id: true,
                    price: {
                      amount: true,
                      currencyCode: true,
                    },
                    compareAtPrice: {
                      amount: true,
                      currencyCode: true,
                    },
                    selectedOptions: {
                      name: true,
                      value: true,
                    },
                    product: {
                      title: true,
                      images: [
                        { first: 1 },
                        {
                          nodes: {
                            url: [
                              {
                                transform: {
                                  maxWidth: 1200,
                                  maxHeight: 1200,
                                  crop: CropRegion.CENTER,
                                  preferredContentType: ImageContentType.JPG,
                                },
                              },
                              true,
                            ],
                            altText: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ],
  });
};

export const cartLinesUpdateMutation = async (
  cartId: string,
  lines: GraphQLTypes['CartLineUpdateInput'][]
) => {
  console.log(cartId, lines);
  return await ShopifyQuery.mutation({
    cartLinesUpdate: [
      { cartId, lines },
      {
        cart: {
          id: true,
          checkoutUrl: true,
          totalQuantity: true,
          cost: {
            subtotalAmount: {
              amount: true,
              currencyCode: true,
            },
          },
          lines: [
            { first: 20 },
            {
              nodes: {
                id: true,
                quantity: true,
                cost: {
                  subtotalAmount: {
                    amount: true,
                    currencyCode: true,
                  },
                },
                merchandise: {
                  '...on ProductVariant': {
                    id: true,
                    price: {
                      amount: true,
                      currencyCode: true,
                    },
                    compareAtPrice: {
                      amount: true,
                      currencyCode: true,
                    },
                    selectedOptions: {
                      name: true,
                      value: true,
                    },
                    product: {
                      title: true,
                      images: [
                        { first: 1 },
                        {
                          nodes: {
                            url: [
                              {
                                transform: {
                                  maxWidth: 1200,
                                  maxHeight: 1200,
                                  crop: CropRegion.CENTER,
                                  preferredContentType: ImageContentType.JPG,
                                },
                              },
                              true,
                            ],
                            altText: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ],
  });
};

export const cartLinesRemoveMutation = async (cartId: string, lineIds: string[]) => {
  return await ShopifyQuery.mutation({
    cartLinesRemove: [
      { cartId, lineIds },
      {
        cart: {
          id: true,
          checkoutUrl: true,
          totalQuantity: true,
          cost: {
            subtotalAmount: {
              amount: true,
              currencyCode: true,
            },
          },
          lines: [
            { first: 20 },
            {
              nodes: {
                id: true,
                quantity: true,
                cost: {
                  subtotalAmount: {
                    amount: true,
                    currencyCode: true,
                  },
                },
                merchandise: {
                  '...on ProductVariant': {
                    id: true,
                    price: {
                      amount: true,
                      currencyCode: true,
                    },
                    compareAtPrice: {
                      amount: true,
                      currencyCode: true,
                    },
                    selectedOptions: {
                      name: true,
                      value: true,
                    },
                    product: {
                      title: true,
                      images: [
                        { first: 1 },
                        {
                          nodes: {
                            url: [
                              {
                                transform: {
                                  maxWidth: 1200,
                                  maxHeight: 1200,
                                  crop: CropRegion.CENTER,
                                  preferredContentType: ImageContentType.JPG,
                                },
                              },
                              true,
                            ],
                            altText: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ],
  });
};

export const cartCreate = async (input: GraphQLTypes['CartInput']): Promise<Cart | null> => {
  const { cartCreate } = await cartCreateMutation(input);

  if (!cartCreate?.cart) return null;

  const cart = cartCreate.cart;

  return {
    id: cart.id as string,
    checkout_url: (cart.checkoutUrl as string) ?? '',
    total_quantity: cart.totalQuantity ?? 0,
    subtotal_amount: {
      amount: (cart.cost.subtotalAmount.amount as string) ?? 0,
      currencyCode: cart.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
    },
    lines:
      cart.lines.nodes.map((line) => ({
        id: line.id as string,
        title: line.merchandise.product.title,
        image: {
          src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
          alt: line.merchandise.product.images.nodes[0].altText ?? '',
        },
        subtotal_amount: {
          amount: (line.cost.subtotalAmount.amount as string) ?? 0,
          currencyCode: line.cost.subtotalAmount.currencyCode,
        },
        variant: {
          id: line.merchandise.id as string,
          price: {
            amount: (line.merchandise.price.amount as string) ?? 0,
            currencyCode: line.merchandise.price.currencyCode,
          },
          compare_price: line.merchandise.compareAtPrice
            ? {
                amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                currencyCode: line.merchandise.compareAtPrice.currencyCode,
              }
            : undefined,
          selected_options: line.merchandise.selectedOptions,
        },
        quantity: line.quantity,
      })) ?? [],
  };
};

export const cartLinesAdd = async (
  cartId: string,
  lines: GraphQLTypes['CartLineInput'][]
): Promise<Cart | null> => {
  const { cartLinesAdd } = await cartLinesAddMutation(cartId, lines);

  if (!cartLinesAdd?.cart) return null;

  const cart = cartLinesAdd.cart;

  return {
    id: cart.id as string,
    checkout_url: (cart.checkoutUrl as string) ?? '',
    total_quantity: cart.totalQuantity ?? 0,
    subtotal_amount: {
      amount: (cart.cost.subtotalAmount.amount as string) ?? 0,
      currencyCode: cart.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
    },
    lines:
      cart.lines.nodes.map((line) => ({
        id: line.id as string,
        title: line.merchandise.product.title,
        image: {
          src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
          alt: line.merchandise.product.images.nodes[0].altText ?? '',
        },
        subtotal_amount: {
          amount: (line.cost.subtotalAmount.amount as string) ?? 0,
          currencyCode: line.cost.subtotalAmount.currencyCode,
        },
        variant: {
          id: line.merchandise.id as string,
          price: {
            amount: (line.merchandise.price.amount as string) ?? 0,
            currencyCode: line.merchandise.price.currencyCode,
          },
          compare_price: line.merchandise.compareAtPrice
            ? {
                amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                currencyCode: line.merchandise.compareAtPrice.currencyCode,
              }
            : undefined,
          selected_options: line.merchandise.selectedOptions,
        },
        quantity: line.quantity,
      })) ?? [],
  };
};

export const cartLinesUpdate = async (
  cartId: string,
  lines: GraphQLTypes['CartLineUpdateInput'][]
): Promise<Cart | null> => {
  const { cartLinesUpdate } = await cartLinesUpdateMutation(cartId, lines);

  if (!cartLinesUpdate?.cart) return null;

  const cart = cartLinesUpdate.cart;

  return {
    id: cart.id as string,
    checkout_url: (cart.checkoutUrl as string) ?? '',
    total_quantity: cart.totalQuantity ?? 0,
    subtotal_amount: {
      amount: (cart.cost.subtotalAmount.amount as string) ?? 0,
      currencyCode: cart.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
    },
    lines:
      cart.lines.nodes.map((line) => ({
        id: line.id as string,
        title: line.merchandise.product.title,
        image: {
          src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
          alt: line.merchandise.product.images.nodes[0].altText ?? '',
        },
        subtotal_amount: {
          amount: (line.cost.subtotalAmount.amount as string) ?? 0,
          currencyCode: line.cost.subtotalAmount.currencyCode,
        },
        variant: {
          id: line.merchandise.id as string,
          price: {
            amount: (line.merchandise.price.amount as string) ?? 0,
            currencyCode: line.merchandise.price.currencyCode,
          },
          compare_price: line.merchandise.compareAtPrice
            ? {
                amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                currencyCode: line.merchandise.compareAtPrice.currencyCode,
              }
            : undefined,
          selected_options: line.merchandise.selectedOptions,
        },
        quantity: line.quantity,
      })) ?? [],
  };
};

export const cartLinesRemove = async (cartId: string, lineIds: string[]): Promise<Cart | null> => {
  const { cartLinesRemove } = await cartLinesRemoveMutation(cartId, lineIds);

  if (!cartLinesRemove?.cart) return null;

  const cart = cartLinesRemove.cart;

  return {
    id: cart.id as string,
    checkout_url: (cart.checkoutUrl as string) ?? '',
    total_quantity: cart.totalQuantity ?? 0,
    subtotal_amount: {
      amount: (cart.cost.subtotalAmount.amount as string) ?? 0,
      currencyCode: cart.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
    },
    lines:
      cart.lines.nodes.map((line) => ({
        id: line.id as string,
        title: line.merchandise.product.title,
        image: {
          src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
          alt: line.merchandise.product.images.nodes[0].altText ?? '',
        },
        subtotal_amount: {
          amount: (line.cost.subtotalAmount.amount as string) ?? 0,
          currencyCode: line.cost.subtotalAmount.currencyCode,
        },
        variant: {
          id: line.merchandise.id as string,
          price: {
            amount: (line.merchandise.price.amount as string) ?? 0,
            currencyCode: line.merchandise.price.currencyCode,
          },
          compare_price: line.merchandise.compareAtPrice
            ? {
                amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                currencyCode: line.merchandise.compareAtPrice.currencyCode,
              }
            : undefined,
          selected_options: line.merchandise.selectedOptions,
        },
        quantity: line.quantity,
      })) ?? [],
  };
};
