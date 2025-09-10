import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';
import { shopifyAssets } from 'sanity-plugin-shopify-assets';
import { SanitySchema } from '@/data/services/sanity/schemas';
import { sanityStudioStructure } from '@/data/services/sanity/desk-structure';

const sanityConfig = defineConfig({
  projectId: 'pyayajuh',
  dataset: 'production',
  apiVersion: '2025-03-04',
  title: 'The Wind Church',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: sanityStudioStructure,
    }),
    shopifyAssets({
      shopifyDomain: '*.myshopify.com',
    }),
  ],
  schema: { types: SanitySchema as SchemaTypeDefinition[] },
});

export default sanityConfig;
