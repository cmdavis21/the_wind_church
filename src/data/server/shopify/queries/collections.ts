import { Collection } from '@/data/types';
import { CropRegion, ImageContentType } from '../zeus';
import { ShopifyQuery } from '../zeus-chain';

const getStorefrontCollectionsQuery = () => {
  return ShopifyQuery.query({
    collections: [
      { first: 25 },
      {
        edges: {
          node: {
            title: true,
            handle: true,
            products: [
              { first: 20 },
              {
                edges: {
                  node: {
                    title: true,
                    handle: true,
                    descriptionHtml: true,
                    featuredImage: {
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
                    priceRange: {
                      minVariantPrice: {
                        amount: true,
                        currencyCode: true,
                      },
                      maxVariantPrice: {
                        amount: true,
                        currencyCode: true,
                      },
                    },
                    totalInventory: true,
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
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });
};

export const getStorefrontCollections = async (): Promise<Collection[]> => {
  const { collections } = await getStorefrontCollectionsQuery();

  if (!collections) return [];

  return collections.edges.map((coll) => ({
    title: coll.node.title,
    handle: coll.node.handle,
    products: coll.node.products.edges.map((item) => ({
      title: item.node.title,
      handle: item.node.handle,
      minPrice: {
        amount: (item.node.priceRange.minVariantPrice.amount as string) ?? '0',
        currencyCode: item.node.priceRange.minVariantPrice.currencyCode,
      },
      maxPrice: {
        amount: (item.node.priceRange.maxVariantPrice.amount as string) ?? '0',
        currencyCode: item.node.priceRange.maxVariantPrice.currencyCode,
      },
      image: {
        src: (item.node.featuredImage?.url as string) ?? '/images/misc/shop-placeholder-image.jpg',
        alt: item.node.featuredImage?.altText as string,
      },
      total_inventory: item.node.totalInventory ?? 0,
      options:
        item.node.options && item.node.options[0]?.name !== 'Title'
          ? item.node.options.map((opt) => ({
              name: opt.name,
              values: opt.optionValues.map((v) => ({
                name: v.name,
                color: (v.swatch?.color as string) ?? undefined,
              })),
            }))
          : undefined,
    })),
  }));
};
