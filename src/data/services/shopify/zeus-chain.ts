import { SHOPIFY_STOREFRONT_API_ENDPOINT, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '@/data/constants';
import { Chain } from './zeus';

const endpoint = SHOPIFY_STOREFRONT_API_ENDPOINT;
const editorToken = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const chain = Chain(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `X-Shopify-Storefront-Access-Token ${editorToken}`,
  },
});

export const ShopifyQuery = {
  query: chain('query'),
  mutation: chain('mutation'),
};
