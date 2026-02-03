import { Cart } from '@/data/types';
import { NextPageContext } from 'next';
import nookies from 'nookies';
import { CropRegion, ImageContentType } from '../zeus';
import { ShopifyQuery } from '../zeus-chain';

export const getCurrentCartQuery = async (cartId: string) => {
  return ShopifyQuery.query({
    cart: [
      { id: cartId },
      {
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
    ],
  });
};

export const getCurrentCart = async (context?: NextPageContext): Promise<Cart | null> => {
  const cartId = context ? nookies.get(context).WSWC_CART_ID : nookies.get().WSWC_CART_ID;

  if (cartId) {
    const { cart } = await getCurrentCartQuery(cartId);

    if (!cart) return null;

    return {
      id: cart.id as string,
      checkout_url: cart.checkoutUrl as string,
      total_quantity: cart.totalQuantity,
      subtotal_amount: {
        amount: (cart.cost.subtotalAmount.amount as string) ?? 0,
        currencyCode: cart.cost.subtotalAmount.currencyCode,
      },
      lines: cart.lines.nodes.map((line) => ({
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
          selected_options:
            line.merchandise.selectedOptions &&
            line.merchandise.selectedOptions[0]?.name !== 'Title'
              ? line.merchandise.selectedOptions.map((opt) => ({
                  name: opt.name,
                  value: opt.value,
                }))
              : [],
        },
        quantity: line.quantity,
      })),
    };
  }

  return null;
};
