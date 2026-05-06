import { sanityStudioStructure } from '@/data/server/sanity/desk-structure';
import { SanitySchema } from '@/data/server/sanity/schemas';
import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';

const sanityConfig = defineConfig({
  projectId: 'pyayajuh',
  dataset: 'production',
  apiVersion: '2025-03-04',
  title: 'The Wind Church',
  basePath: '/studio',
  plugins: [structureTool({ structure: sanityStudioStructure })],
  schema: { types: SanitySchema as SchemaTypeDefinition[] },
});

export default sanityConfig;
