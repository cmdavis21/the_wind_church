import { SANITY_EDITOR_TOKEN } from '@/data/constants';
import { createClient } from '@sanity/client';

export const SanityClient = createClient({
  projectId: 'pyayajuh',
  dataset: 'production',
  apiVersion: '2025-03-04',
  useCdn: true, // set to `false` to bypass the edge cache
  headers: {
    'Content-Type': 'application/json',
  },
  token: SANITY_EDITOR_TOKEN,
});
