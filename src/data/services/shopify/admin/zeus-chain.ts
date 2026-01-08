import { Chain } from './zeus';

const endpoint = process.env.SHOPIFY_ADMIN_API_ENDPOINT ?? '';
const editorToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

const chain = Chain(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': `${editorToken}`,
  },
});

export const ShopifyAdminQuery = {
  query: chain('query'),
  mutation: chain('mutation'),
};
