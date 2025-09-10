// schemas/product.js
export const ProductSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Product Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'descriptionHtml',
      title: 'Description (HTML)',
      type: 'text',
    },
    {
      name: 'previewImageUrl',
      title: 'Preview Image URL',
      type: 'url',
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'object',
      fields: [
        { name: 'minVariantPrice', title: 'Min Price', type: 'number' },
        { name: 'maxVariantPrice', title: 'Max Price', type: 'number' },
      ],
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Option Name', type: 'string' },
            {
              name: 'values',
              title: 'Option Values',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'gid',
      title: 'Shopify Global ID',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Shopify Product ID',
      type: 'number',
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'sku', type: 'string' },
            { name: 'price', type: 'number' },
            { name: 'available', type: 'boolean' },
            {
              name: 'options',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
};
