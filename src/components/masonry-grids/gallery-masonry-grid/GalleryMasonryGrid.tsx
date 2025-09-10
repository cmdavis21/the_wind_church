'use client';

import React from 'react';
import { Masonry } from 'react-plock';

import ImageCardWithModal from '../../cards/image-card-with-modal/ImageCardWithModal';

interface GalleryMasonryGridProps {
  images: string[];
  columns?: number[];
  gap?: number[];
  media?: number[];
}

const GalleryMasonryGrid: React.FC<GalleryMasonryGridProps> = ({ images, columns, gap, media }) => (
  <Masonry
    items={images}
    config={{
      columns: columns ?? [1, 2, 3, 4],
      gap: gap ?? [25, 25, 25, 25],
      media: media ?? [640, 768, 1024, 1280],
      useBalancedLayout: false,
    }}
    render={(img) => (
      <ImageCardWithModal
        key={`wind-gallery-${img}`}
        src={img}
        alt="The Wind Church Gallery Image"
        className="w-full min-w-[200px] max-w-[500px] min-h-[400px] max-h-[700px]"
      />
    )}
  />
);

export default GalleryMasonryGrid;
