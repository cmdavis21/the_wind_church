import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';

import { SanitySchema } from '@/data/services/sanity/schemas';
import { sanityStudioStructure } from '@/data/services/sanity/desk-structure';

const sanityConfig = defineConfig({
  projectId: 'pyayajuh',
  dataset: 'production',
  apiVersion: '2025-03-04',
  title: 'The Wind Church',
  basePath: '/admin/studio',
  plugins: [
    structureTool({
      structure: sanityStudioStructure,
    }),
  ],
  schema: { types: SanitySchema as SchemaTypeDefinition[] },
});

export default sanityConfig;
