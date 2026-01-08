'use client';

import { formatPrice, Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Badge, Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  image: { src: string; alt?: string };
  title: string;
  minPrice: Price;
  maxPrice: Price;
  totalInventory: number;
  handle: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  minPrice,
  maxPrice,
  totalInventory,
  handle,
}) => {
  return (
    <Link href={`${PageRoutes.bookstore}/${handle}`} className="group w-full h-fit max-w-[300px]">
      <div className="h-full flex flex-col items-center rounded-xl overflow-hidden border border-light-gray dark:border-dark-gray bg-white dark:bg-dark-bg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Cover Image */}
        <div className="relative w-full aspect-[3/4] bg-white dark:opacity-75 overflow-hidden">
          <Image
            fill
            src={image.src}
            alt={image.alt ?? title}
            className="object-contain group-hover:scale-110 transition-scale duration-300"
          />
          {totalInventory <= 20 && (
            <Badge color="red" size="xs" className="top-1 left-1">
              {totalInventory <= 0 ? 'Out of Stock' : `Only ${totalInventory} left!`}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 w-full h-full text-center flex flex-col items-between gap-2">
          <h5 className="text-base font-semibold text-textPrimary dark:text-dark-primaryText line-clamp-1">
            {title}
          </h5>

          <p className="font-medium body-large text-light-navy dark:text-dark-navy">
            {minPrice.amount !== maxPrice.amount
              ? `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`
              : formatPrice(minPrice)}
          </p>

          <Button pill fullSized color="info">
            View Product
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
