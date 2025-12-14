import ShopifyDocumentStatus from '@/components/sanity/shopify-document-status';
import { defineField } from 'sanity';

type Selection = {
  isDeleted: boolean;
  previewImageUrl: string;
  priceRange: { minVariantPrice: string; maxVariantPrice: string };
  status: string;
  title: string;
  variants: any[];
};

export const ProductSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
    }),
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      options: 'store.options',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      variants: 'store.variants',
    },
    prepare(selection: Selection) {
      const { isDeleted, previewImageUrl, priceRange, status, title, variants } = selection;

      const variantCount = variants?.length;
      const minPrice = priceRange.minVariantPrice;
      const maxPrice = priceRange.maxVariantPrice;

      let description = [
        `$${minPrice}${maxPrice !== minPrice ? ` - $${maxPrice}` : ''}`,
        variantCount ? `${String(variants?.length)} Variants` : 'No variants',
      ];

      if (status !== 'active') description = ['(Unavailable in Shopify)'];

      if (isDeleted) description = ['(Deleted from Shopify)'];

      return {
        title,
        subtitle: description.join(' / '),
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
            title={title}
          />
        ),
      };
    },
  },
};
