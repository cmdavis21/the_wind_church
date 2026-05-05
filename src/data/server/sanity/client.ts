import { createClient } from '@sanity/client';
import { SANITY_API_VERSION, SANITY_EDITOR_TOKEN, SANITY_PROJECT_ID } from '../env.server';

export const SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: SANITY_API_VERSION,
  useCdn: true, // set to `false` to bypass the edge cache
  headers: { 'Content-Type': 'application/json' },
  token: SANITY_EDITOR_TOKEN,
});
