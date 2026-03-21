import { SANITY_EDITOR_TOKEN, SANITY_GRAPHQL_ENDPOINT } from '../env.client';
import { Chain } from './zeus';

const chain = Chain(SANITY_GRAPHQL_ENDPOINT, {
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SANITY_EDITOR_TOKEN}` },
});

export const SanityQuery = chain('query');
