import { SANITY_API_VERSION, SANITY_PROJECT_ID } from '@/data/server/env.server';
import { sanityStudioStructure } from '@/data/server/sanity/desk-structure';
import { SanitySchema } from '@/data/server/sanity/schemas';
import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';

const sanityConfig = defineConfig({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: SANITY_API_VERSION,
  title: 'The Wind Church',
  basePath: '/studio',
  plugins: [structureTool({ structure: sanityStudioStructure })],
  schema: { types: SanitySchema as SchemaTypeDefinition[] },
});

export default sanityConfig;
