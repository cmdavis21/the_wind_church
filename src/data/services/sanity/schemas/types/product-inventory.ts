import { defineField } from 'sanity';

export const ProductInventory = defineField({
  name: 'inventory',
  title: 'Product Inventory',
  type: 'object',
  options: {
    columns: 3,
  },
  fields: [
    {
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
    },
    {
      name: 'management',
      title: 'Management',
      type: 'string',
    },
    {
      name: 'policy',
      title: 'Policy',
      type: 'string',
    },
  ],
});
