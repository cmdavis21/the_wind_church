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
  options?: {
    name: string;
    values: { name: string; color?: string }[];
  }[];
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
      <div className="h-full flex flex-col items-center rounded-xl overflow-hidden border border-gray dark:border-grayDark bg-white dark:bg-backgroundDark shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Cover Image */}
        <div className="relative w-full aspect-[3/4] bg-white dark:bg-backgroundDark overflow-hidden">
          <Image
            fill
            src={image.src}
            alt={image.alt ?? title}
            className="object-contain group-hover:scale-110 transition-scale duration-300"
          />
          {totalInventory <= 20 && (
            <Badge color="red" size="xs" className="top-1 left-1">
              Only {totalInventory} left!
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 w-full h-full text-center flex flex-col items-between gap-2">
          <h5 className="text-base font-semibold text-textPrimary dark:text-textInverse line-clamp-2">
            {title}
          </h5>

          <p className="font-medium text-navy">
            {minPrice.amount !== maxPrice.amount
              ? `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`
              : formatPrice(minPrice)}
          </p>

          <Button fullSized color="ghost">
            View Product
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
