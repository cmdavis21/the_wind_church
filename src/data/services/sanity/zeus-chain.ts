import { SANITY_EDITOR_TOKEN, SANITY_GRAPHQL_ENDPOINT } from '@/data/constants';
import { Chain } from './zeus';

const endpoint = SANITY_GRAPHQL_ENDPOINT;
const editorToken = SANITY_EDITOR_TOKEN;

const chain = Chain(endpoint, {
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${editorToken}` },
});

export const SanityQuery = chain('query');
