import { Order } from '@/data/types';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { CurrencyCode } from '../../zeus';
import { Audience, CropRegion, ImageContentType } from '../zeus';
import { ShopifyAdminQuery } from '../zeus-chain';

const getAdminOrdersQuery = (email: string) => {
  return ShopifyAdminQuery.query({
    orders: [
      { query: email, first: 20 },
      {
        edges: {
          node: {
            name: true,
            createdAt: true,
            statusPageUrl: [{ audience: Audience.CUSTOMERVIEW }, true],
            taxesIncluded: true,
            currentShippingPriceSet: {
              presentmentMoney: {
                amount: true,
                currencyCode: true,
              },
            },
            currentSubtotalPriceSet: {
              presentmentMoney: {
                amount: true,
                currencyCode: true,
              },
            },
            currentTotalTaxSet: {
              presentmentMoney: {
                amount: true,
                currencyCode: true,
              },
            },
            currentTotalPriceSet: {
              presentmentMoney: {
                amount: true,
                currencyCode: true,
              },
            },
            transactions: [
              {
                first: 1,
              },
              {
                paymentDetails: {
                  '...on CardPaymentDetails': {
                    expirationMonth: true,
                    expirationYear: true,
                    company: true,
                    number: true,
                  },
                },
              },
            ],
            shippingAddress: {
              firstName: true,
              lastName: true,
              address1: true,
              address2: true,
              city: true,
              province: true,
              country: true,
              zip: true,
            },
            billingAddress: {
              firstName: true,
              lastName: true,
              address1: true,
              address2: true,
              city: true,
              province: true,
              country: true,
              zip: true,
            },
            currentSubtotalLineItemsQuantity: true,
            lineItems: [
              { first: 15 },
              {
                edges: {
                  node: {
                    image: {
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
                    originalTotalSet: {
                      presentmentMoney: {
                        amount: true,
                        currencyCode: true,
                      },
                    },
                    currentQuantity: true,
                    title: true,
                    variant: {
                      id: true,
                      price: true,
                      selectedOptions: {
                        name: true,
                        value: true,
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });
};

export const getAdminCustomerOrders = async (email: string): Promise<Order[]> => {
  const { orders } = await getAdminOrdersQuery(email);

  if (!orders) return [];

  return orders.edges.map((order) => ({
    order_name: order.node.name,
    created_date: order.node.createdAt as Date,
    status_page_url: order.node.statusPageUrl as string,
    shipping_price: {
      amount: order.node.currentShippingPriceSet.presentmentMoney.amount as string,
      currencyCode: order.node.currentShippingPriceSet.presentmentMoney
        .currencyCode as CurrencyCode,
    },
    subtotal_price: {
      amount: order.node.currentSubtotalPriceSet.presentmentMoney.amount as string,
      currencyCode: order.node.currentSubtotalPriceSet.presentmentMoney
        .currencyCode as CurrencyCode,
    },
    total_tax: {
      amount: order.node.currentTotalTaxSet.presentmentMoney.amount as string,
      currencyCode: order.node.currentTotalTaxSet.presentmentMoney.currencyCode as CurrencyCode,
    },
    total_price: {
      amount: order.node.currentTotalPriceSet.presentmentMoney.amount as string,
      currencyCode: order.node.currentTotalPriceSet.presentmentMoney.currencyCode as CurrencyCode,
    },
    payment_details: {
      company: order.node.transactions[0].paymentDetails?.company as string,
      number: order.node.transactions[0].paymentDetails?.number as string,
      expiration_year: order.node.transactions[0].paymentDetails?.expirationYear as string,
      expiration_month: order.node.transactions[0].paymentDetails?.expirationMonth as string,
    },
    shipping_address: {
      first_name: order.node.shippingAddress?.firstName ?? '',
      last_name: order.node.shippingAddress?.lastName ?? '',
      address1: order.node.shippingAddress?.address1 ?? '',
      address2: order.node.shippingAddress?.address2 ?? '',
      city: order.node.shippingAddress?.city ?? '',
      province: order.node.shippingAddress?.province ?? '',
      country: order.node.shippingAddress?.country ?? '',
      zip: order.node.shippingAddress?.zip ?? '',
    },
    billing_address: {
      first_name: order.node.billingAddress?.firstName ?? '',
      last_name: order.node.billingAddress?.lastName ?? '',
      address1: order.node.billingAddress?.address1 ?? '',
      address2: order.node.billingAddress?.address2 ?? '',
      city: order.node.billingAddress?.city ?? '',
      province: order.node.billingAddress?.province ?? '',
      country: order.node.billingAddress?.country ?? '',
      zip: order.node.billingAddress?.zip ?? '',
    },
    quantity: order.node.currentSubtotalLineItemsQuantity ?? 0,
    line_items: order.node.lineItems.edges.map((item) => ({
      title: item.node.title ?? '',
      image: {
        src: (item.node.image?.url as string) ?? '',
        alt: item.node.image?.altText ?? '',
      },
      total_price: {
        amount: item.node.originalTotalSet.presentmentMoney.amount as string,
        currencyCode: item.node.originalTotalSet.presentmentMoney.currencyCode as CurrencyCode,
      },
      quantity: item.node.currentQuantity ?? 0,
      variant: {
        id: (item.node.variant?.id as string) ?? '',
        price: {
          amount: item.node.variant?.price as string,
          currencyCode: item.node.originalTotalSet.presentmentMoney.currencyCode as CurrencyCode,
        },
        selected_options:
          item.node.variant?.selectedOptions &&
          item.node.variant?.selectedOptions[0]?.name !== 'Title'
            ? item.node.variant?.selectedOptions.map((opt) => ({
                name: opt.name,
                value: opt.value,
              }))
            : [],
      },
    })),
  }));
};

export const useLookupCustomerOrders = (options?: UseMutationOptions<Order[], Error, string>) => {
  return useMutation<Order[], Error, string>({
    mutationFn: async (email) => {
      const res = await fetch('/api/customer/orders', {
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
