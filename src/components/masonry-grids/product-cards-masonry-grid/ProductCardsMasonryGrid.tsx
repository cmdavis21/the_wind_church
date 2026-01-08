'use client';

import React from 'react';
import { Masonry } from 'react-plock';

import { Price } from '@/data/format-price';

interface ProductCardsMasonryGridProps {
  products: {
    images: {
      src: string;
      alt?: string;
    }[];
    title: string;
    price: Price;
    compare_price?: Price;
    total_inventory: number;
    handle: string;
  }[];
  columns?: number[];
  gap?: number[];
  media?: number[];
}

const ProductCardsMasonryGrid: React.FC<ProductCardsMasonryGridProps> = ({
  products,
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
    render={(product, index) => (
      <div />
      // <ProductCard key={product.title} {...product} scale={index % 3 === 0} />
    )}
  />
);

export default ProductCardsMasonryGrid;
