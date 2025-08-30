'use client';

import React from 'react';
import { Masonry } from 'react-plock';

import { AttributeType, ProductPreview } from '@/data/types';
import ProductCardSkeleton from '@/components/cards/product-card/ProductCard.skeleton';

import ProductCard from '../../cards/product-card/ProductCard';

interface ProductCardsMasonryGridProps {
  products: ProductPreview[];
  isLoading: boolean;
  columns?: number[];
  gap?: number[];
  media?: number[];
}

const ProductCardsMasonryGrid: React.FC<ProductCardsMasonryGridProps> = ({
  products,
  isLoading,
  columns,
  gap,
  media,
}) => (
  <Masonry
    items={products}
    config={{
      columns: columns ?? [1, 2, 3, 4],
      gap: gap ?? [50, 50, 50, 50],
      media: media ?? [640, 768, 1024, 1800],
      useBalancedLayout: false,
    }}
    render={(product, index) => {
      const colorVariants =
        product.attributes.find((attr) =>
          attr.type?.includes(AttributeType.COLOR)
        )?.options || [];
      const sizeVariants =
        product.attributes.find((attr) =>
          attr.type?.includes(AttributeType.SIZE)
        )?.options || [];
      console.log('scale: ', index);
      return !isLoading ? (
        <ProductCard
          key={product.name}
          {...product}
          colorVariants={colorVariants}
          sizeVariants={sizeVariants}
          id={product.attributes.length > 0 ? null : product.id}
          scale={index % 3 === 0}
        />
      ) : (
        <ProductCardSkeleton />
      );
    }}
  />
);

export default ProductCardsMasonryGrid;
