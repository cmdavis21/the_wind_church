import { SHOPIFY_ADMIN_ACCESS_TOKEN, SHOPIFY_ADMIN_API_ENDPOINT } from '../../env.client';
import { Chain } from './zeus';

const chain = Chain(SHOPIFY_ADMIN_API_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': `${SHOPIFY_ADMIN_ACCESS_TOKEN}`,
  },
});

export const ShopifyAdminQuery = {
  query: chain('query'),
  mutation: chain('mutation'),
};
