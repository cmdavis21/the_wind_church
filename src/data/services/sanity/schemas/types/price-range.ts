import { defineField } from 'sanity';

export const PriceRange = defineField({
  name: 'priceRange',
  title: 'Price Rsange',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'minVariantPrice',
      title: 'Min variant price',
      type: 'number',
    },
    {
      name: 'maxVariantPrice',
      title: 'Max variant price',
      type: 'number',
    },
  ],
});
