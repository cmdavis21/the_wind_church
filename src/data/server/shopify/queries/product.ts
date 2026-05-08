import { Product } from '@/data/types';
import { CropRegion, ImageContentType } from '../zeus';
import { ShopifyQuery } from '../zeus-chain';

const getStorefrontProductByHandleQuery = (handle: string) => {
  return ShopifyQuery.query({
    product: [
      { handle },
      {
        title: true,
        descriptionHtml: true,
        images: [
          { first: 10 },
          {
            nodes: {
              url: [
                {
                  transform: {
                    maxWidth: 1200,
                    maxHeight: 1200,
                    crop: CropRegion.CENTER,
                    preferredContentType: ImageContentType.JPG,
                  },
                },
                true,
              ],
              altText: true,
            },
          },
        ],
        selectedOrFirstAvailableVariant: [
          {},
          {
            selectedOptions: {
              name: true,
              value: true,
            },
          },
        ],
        options: [
          {
            first: 20,
          },
          {
            name: true,
            optionValues: {
              name: true,
              swatch: {
                color: true,
              },
            },
          },
        ],
        variants: [
          { first: 25 },
          {
            nodes: {
              id: true,
              image: {
                url: [
                  {
                    transform: {
                      maxWidth: 1200,
                      maxHeight: 1200,
                      crop: CropRegion.CENTER,
                      preferredContentType: ImageContentType.JPG,
                    },
                  },
                  true,
                ],
                altText: true,
              },
              price: {
                amount: true,
                currencyCode: true,
              },
              compareAtPrice: {
                amount: true,
                currencyCode: true,
              },
              quantityAvailable: true,
              selectedOptions: {
                name: true,
                value: true,
              },
            },
          },
        ],
      },
    ],
  });
};

const getStorefrontProductHandlesQuery = () => {
  return ShopifyQuery.query({
    products: [
      { first: 100 },
      {
        nodes: {
          handle: true,
          updatedAt: true,
        },
      },
    ],
  });
};

export const getStorefrontProductByHandle = async (handle: string): Promise<Product | null> => {
  const { product } = await getStorefrontProductByHandleQuery(handle);

  if (!product) return null;

  return {
    title: product.title,
    description_html: (product.descriptionHtml as string) ?? '',
    images: product.images.nodes.map((img) => ({
      src: (img.url as string) ?? '/images/product-placeholder.webp',
      alt: img.altText ?? '',
    })),
    first_variant:
      product.selectedOrFirstAvailableVariant?.selectedOptions[0].name !== 'Title'
        ? product.selectedOrFirstAvailableVariant?.selectedOptions
        : undefined,
    options:
      product.options && product.options[0]?.name !== 'Title'
        ? product.options.map((opt) => ({
            name: opt.name,
            values: opt.optionValues.map((v) => ({
              name: v.name,
              color: (v.swatch?.color as string) ?? undefined,
            })),
          }))
        : undefined,
    variants: product.variants.nodes.map((variant) => ({
      id: variant.id as string,
      image: variant.image
        ? {
            src: String(variant.image?.url) ?? '/images/product-placeholder.webp',
            alt: variant.image?.altText ?? '',
          }
        : undefined,
      price: {
        amount: (variant.price.amount as string) ?? 0,
        currencyCode: variant.price.currencyCode,
      },
      compare_price: variant.compareAtPrice
        ? {
            amount: (variant.compareAtPrice.amount as string) ?? 0,
            currencyCode: variant.compareAtPrice.currencyCode,
          }
        : undefined,
      quantity_available: variant.quantityAvailable ?? 0,
      selected_options:
        variant.selectedOptions && variant.selectedOptions[0]?.name !== 'Title'
          ? variant.selectedOptions.map((opt) => ({
              name: opt.name,
              value: opt.value,
            }))
          : undefined,
    })),
  };
};

export const getStorefrontProductHandles = async () => {
  const { products } = await getStorefrontProductHandlesQuery();

  if (!products) return [];

  return products.nodes.map((item) => ({
    handle: item.handle,
    updatedAt: item.updatedAt,
  }));
};
