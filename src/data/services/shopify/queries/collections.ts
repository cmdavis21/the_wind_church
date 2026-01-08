import { GET_STOREFRONT_COLLECTIONS_KEY } from '@/data/constants';
import { Collection } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
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

const getStorefrontCollectionByHandleQuery = (handle: string) => {
  return ShopifyQuery.query({
    collection: [
      { handle },
      {
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
    ],
  });
};

const getStorefrontCollections = async (): Promise<Collection[]> => {
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

const getStorefrontCollectionByHandle = async (handle: string): Promise<Collection | null> => {
  const { collection } = await getStorefrontCollectionByHandleQuery(handle);

  if (!collection) return null;

  return {
    title: collection.title,
    handle: collection.handle,
    products: collection.products.edges.map((item) => ({
      title: item.node.title,
      handle: item.node.handle,
      minPrice: {
        amount: (item.node.priceRange.minVariantPrice.amount as string) ?? '',
        currencyCode: item.node.priceRange.minVariantPrice.currencyCode,
      },
      maxPrice: {
        amount: (item.node.priceRange.maxVariantPrice.amount as string) ?? '',
        currencyCode: item.node.priceRange.maxVariantPrice.currencyCode,
      },
      image: {
        src: (item.node.featuredImage?.url as string) ?? '',
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
  };
};

export const useGetStorefrontCollections = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_STOREFRONT_COLLECTIONS_KEY],
    queryFn: getStorefrontCollections,
  });
  return {
    collections: data,
    collectionsLoading: isLoading,
    collectionsError: isError,
  };
};

export const useGetStorefrontCollectionByHandle = (handle: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_STOREFRONT_COLLECTIONS_KEY, handle],
    queryFn: () => getStorefrontCollectionByHandle(handle),
  });
  return {
    collection: data,
    collectionLoading: isLoading,
    collectionError: isError,
  };
};
