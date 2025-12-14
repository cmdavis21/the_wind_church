import { defineField } from 'sanity';

export const ShopifyProduct = {
  name: 'shopifyProduct',
  title: 'Shopify',
  type: 'object',
  readonly: true,
  options: {
    collapsed: false,
    collapsible: true,
  },
  fieldsets: [
    {
      name: 'status',
      title: 'Status',
    },
    {
      name: 'organization',
      title: 'Organization',
      options: {
        columns: 2,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      options: {
        collapsed: true,
        collapsible: true,
      },
    },
  ],
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title displayed in both cart and checkout',
    }),
    // Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Shopify Product handle',
    }),
    // Description
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5,
    }),
    // Price range
    defineField({
      name: 'priceRange',
      title: 'Price range',
      type: 'priceRange',
    }),
    // Product ID
    defineField({
      fieldset: 'organization',
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Shopify Product ID',
    }),
    // Product ID
    defineField({
      fieldset: 'organization',
      name: 'gid',
      title: 'GID',
      type: 'string',
      description: 'Shopify Product GID',
    }),
    // Product Type
    defineField({
      fieldset: 'organization',
      name: 'productType',
      title: 'Product type',
      type: 'string',
    }),
    // Tags
    defineField({
      fieldset: 'organization',
      name: 'tags',
      title: 'Tags',
      type: 'string',
    }),
    // Preview Image URL
    defineField({
      name: 'previewImageUrl',
      title: 'Preview Image URL',
      type: 'string',
      description: 'Image displayed in both cart and checkout',
    }),
    // Options
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'option',
        },
      ],
    }),
    // Variants
    defineField({
      fieldset: 'variants',
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'reference',
          weak: true,
          to: [{ type: 'shopifyProductVariant' }],
        },
      ],
    }),
    // Product status
    defineField({
      fieldset: 'status',
      name: 'status',
      title: 'Product status',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: ['active', 'archived', 'draft'],
      },
    }),
    // Deleted
    defineField({
      fieldset: 'status',
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean',
    }),
    defineField({
      fieldset: 'status',
      name: 'vendor',
      title: 'Vendor',
      type: 'string',
    }),
    // Updated at
    defineField({
      fieldset: 'status',
      name: 'updatedAt',
      title: 'Updated at',
      type: 'string',
    }),
    // Created at
    defineField({
      fieldset: 'status',
      name: 'createdAt',
      title: 'Created at',
      type: 'string',
    }),
  ],
};
