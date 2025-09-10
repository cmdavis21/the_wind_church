import { Cart } from '@/data/types';
import nookies from 'nookies';
import { CropRegion, CurrencyCode, GraphQLTypes, ImageContentType } from '../zeus';
import { ShopifyQuery } from '../zeus-chain';
import { NextPageContext } from 'next';

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

export const cartLinesRemoveMutation = async (cartId: string, lineIds: GraphQLTypes['ID'][]) => {
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

export const cartCreate = async (input: GraphQLTypes['CartInput']): Promise<Cart | undefined> => {
  const { cartCreate } = await cartCreateMutation(input);

  if (!cartCreate) return undefined;

  return {
    id: cartCreate.cart?.id as string,
    checkoutUrl: (cartCreate.cart?.checkoutUrl as string) ?? '',
    totalQuantity: cartCreate.cart?.totalQuantity ?? 0,
    subtotalAmount: {
      amount: (cartCreate.cart?.cost.subtotalAmount.amount as string) ?? 0,
      currencyCode: cartCreate.cart?.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
    },
    lines:
      cartCreate.cart?.lines.nodes.map((line) => ({
        id: line.id as string,
        title: line.merchandise.product.title,
        image: {
          src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
          alt: line.merchandise.product.images.nodes[0].altText ?? '',
        },
        subtotalAmount: {
          amount: (line.cost.subtotalAmount.amount as string) ?? 0,
          currencyCode: line.cost.subtotalAmount.currencyCode,
        },
        variant: {
          id: line.merchandise.id as string,
          price: {
            amount: (line.merchandise.price.amount as string) ?? 0,
            currencyCode: line.merchandise.price.currencyCode,
          },
          compareAtPrice: line.merchandise.compareAtPrice
            ? {
                amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                currencyCode: line.merchandise.compareAtPrice.currencyCode,
              }
            : undefined,
          selectedOptions: line.merchandise.selectedOptions,
        },
        quantity: line.quantity,
      })) ?? [],
  };
};

export const cartLinesAdd = async (
  lines: GraphQLTypes['CartLineInput'][],
  context?: NextPageContext
): Promise<Cart | undefined> => {
  const cartId = context ? nookies.get(context).WSWC_CART_ID : nookies.get().WSWC_CART_ID;

  if (cartId) {
    const { cartLinesAdd } = await cartLinesAddMutation(cartId, lines);

    if (!cartLinesAdd) return undefined;

    return {
      id: cartLinesAdd.cart?.id as string,
      checkoutUrl: (cartLinesAdd.cart?.checkoutUrl as string) ?? '',
      totalQuantity: cartLinesAdd.cart?.totalQuantity ?? 0,
      subtotalAmount: {
        amount: (cartLinesAdd.cart?.cost.subtotalAmount.amount as string) ?? 0,
        currencyCode: cartLinesAdd.cart?.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
      },
      lines:
        cartLinesAdd.cart?.lines.nodes.map((line) => ({
          id: line.id as string,
          title: line.merchandise.product.title,
          image: {
            src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
            alt: line.merchandise.product.images.nodes[0].altText ?? '',
          },
          subtotalAmount: {
            amount: (line.cost.subtotalAmount.amount as string) ?? 0,
            currencyCode: line.cost.subtotalAmount.currencyCode,
          },
          variant: {
            id: line.merchandise.id as string,
            price: {
              amount: (line.merchandise.price.amount as string) ?? 0,
              currencyCode: line.merchandise.price.currencyCode,
            },
            compareAtPrice: line.merchandise.compareAtPrice
              ? {
                  amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                  currencyCode: line.merchandise.compareAtPrice.currencyCode,
                }
              : undefined,
            selectedOptions: line.merchandise.selectedOptions,
          },
          quantity: line.quantity,
        })) ?? [],
    };
  } else {
    const input: GraphQLTypes['CartInput'] = {
      lines: lines.map((line) => ({
        merchandiseId: line.merchandiseId!,
        quantity: line.quantity,
      })),
    };

    const createCart = await cartCreate(input);

    if (createCart?.id) {
      nookies.set(context, 'WSWC_CART_ID', createCart.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }
};

export const cartLinesUpdate = async (
  lines: GraphQLTypes['CartLineUpdateInput'][],
  context?: NextPageContext
): Promise<Cart | undefined> => {
  const cartId = context ? nookies.get(context).WSWC_CART_ID : nookies.get().WSWC_CART_ID;

  if (cartId) {
    const { cartLinesUpdate } = await cartLinesUpdateMutation(cartId, lines);

    if (!cartLinesUpdate) return undefined;

    return {
      id: cartLinesUpdate.cart?.id as string,
      checkoutUrl: (cartLinesUpdate.cart?.checkoutUrl as string) ?? '',
      totalQuantity: cartLinesUpdate.cart?.totalQuantity ?? 0,
      subtotalAmount: {
        amount: (cartLinesUpdate.cart?.cost.subtotalAmount.amount as string) ?? 0,
        currencyCode: cartLinesUpdate.cart?.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
      },
      lines:
        cartLinesUpdate.cart?.lines.nodes.map((line) => ({
          id: line.id as string,
          title: line.merchandise.product.title,
          image: {
            src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
            alt: line.merchandise.product.images.nodes[0].altText ?? '',
          },
          subtotalAmount: {
            amount: (line.cost.subtotalAmount.amount as string) ?? 0,
            currencyCode: line.cost.subtotalAmount.currencyCode,
          },
          variant: {
            id: line.merchandise.id as string,
            price: {
              amount: (line.merchandise.price.amount as string) ?? 0,
              currencyCode: line.merchandise.price.currencyCode,
            },
            compareAtPrice: line.merchandise.compareAtPrice
              ? {
                  amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                  currencyCode: line.merchandise.compareAtPrice.currencyCode,
                }
              : undefined,
            selectedOptions: line.merchandise.selectedOptions,
          },
          quantity: line.quantity,
        })) ?? [],
    };
  } else {
    const input: GraphQLTypes['CartInput'] = {
      lines: lines.map((line) => ({
        merchandiseId: line.merchandiseId!,
        quantity: line.quantity,
      })),
    };

    const createCart = await cartCreate(input);

    if (createCart?.id) {
      nookies.set(context, 'WSWC_CART_ID', createCart.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }
};

export const cartLinesRemove = async (
  lineIds: GraphQLTypes['ID'][],
  context?: NextPageContext
): Promise<Cart | undefined> => {
  const cartId = context ? nookies.get(context).WSWC_CART_ID : nookies.get().WSWC_CART_ID;

  if (cartId) {
    const { cartLinesRemove } = await cartLinesRemoveMutation(cartId, lineIds);

    if (!cartLinesRemove) return undefined;

    return {
      id: cartLinesRemove.cart?.id as string,
      checkoutUrl: (cartLinesRemove.cart?.checkoutUrl as string) ?? '',
      totalQuantity: cartLinesRemove.cart?.totalQuantity ?? 0,
      subtotalAmount: {
        amount: (cartLinesRemove.cart?.cost.subtotalAmount.amount as string) ?? 0,
        currencyCode: cartLinesRemove.cart?.cost.subtotalAmount.currencyCode ?? CurrencyCode.USD,
      },
      lines:
        cartLinesRemove.cart?.lines.nodes.map((line) => ({
          id: line.id as string,
          title: line.merchandise.product.title,
          image: {
            src: (line.merchandise.product.images.nodes[0].url as string) ?? '',
            alt: line.merchandise.product.images.nodes[0].altText ?? '',
          },
          subtotalAmount: {
            amount: (line.cost.subtotalAmount.amount as string) ?? 0,
            currencyCode: line.cost.subtotalAmount.currencyCode,
          },
          variant: {
            id: line.merchandise.id as string,
            price: {
              amount: (line.merchandise.price.amount as string) ?? 0,
              currencyCode: line.merchandise.price.currencyCode,
            },
            compareAtPrice: line.merchandise.compareAtPrice
              ? {
                  amount: (line.merchandise.compareAtPrice.amount as string) ?? 0,
                  currencyCode: line.merchandise.compareAtPrice.currencyCode,
                }
              : undefined,
            selectedOptions: line.merchandise.selectedOptions,
          },
          quantity: line.quantity,
        })) ?? [],
    };
  }

  return undefined;
};
