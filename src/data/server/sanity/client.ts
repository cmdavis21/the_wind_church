import { createClient } from '@sanity/client';
import { SANITY_EDITOR_TOKEN } from '../env.server';

export const SanityClient = createClient({
  projectId: 'pyayajuh',
  dataset: 'production',
  apiVersion: '2025-03-04',
  useCdn: false,
  token: SANITY_EDITOR_TOKEN,
});
