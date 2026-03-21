import { SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_STOREFRONT_API_ENDPOINT } from '../env.client';
import { Chain } from './zeus';

const chain = Chain(SHOPIFY_STOREFRONT_API_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': `${SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
  },
});

export const ShopifyQuery = {
  query: chain('query'),
  mutation: chain('mutation'),
};
