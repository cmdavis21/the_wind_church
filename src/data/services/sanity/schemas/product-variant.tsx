import Calendar from '@/components/icons/calendar';
import ShopifyDocumentStatus from '@/components/sanity/shopify-document-status';
import { defineField, defineType } from 'sanity';

export const ProductVariant = defineType({
  name: 'productVariant',
  title: 'Product variant',
  type: 'document',
  icon: Calendar,
  fields: [
    // Shopify product variant
    defineField({
      name: 'store',
      title: 'Shopify',
      description: 'Variant data from Shopify (read-only)',
      type: 'shopifyProductVariant',
    }),
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      previewImageUrl: 'store.previewImageUrl',
      sku: 'store.sku',
      status: 'store.status',
      title: 'store.title',
    },
    prepare(selection) {
      const { isDeleted, previewImageUrl, sku, status, title } = selection;

      return {
        media: (
          <ShopifyDocumentStatus
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="productVariant"
            url={previewImageUrl}
            title={title}
          />
        ),
        subtitle: sku,
        title,
      };
    },
  },
});
