'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { PageRoutes } from '@/data/page-routes';

import { formatPrice, Price } from '@/data/format-price';
import { Badge } from 'flowbite-react';

interface ProductCardProps {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  minPrice: Price;
  maxPrice: Price;
  totalInventory: number;
  handle: string;
  options?: {
    name: string;
    values: {
      name: string;
      color?: string;
    }[];
  }[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  minPrice,
  maxPrice,
  totalInventory,
  handle,
  options,
}) => {
  return (
    <Link href={`${PageRoutes.bookstore}/${handle}`}>
      <button
        type="button"
        className="bg-white dark:bg-charcoal group w-full min-w-[200px] max-w-[300px] flex flex-col gap-xs p-md rounded-lg hover:shadow-lg"
      >
        <div className={`relative w-full aspect-[2/3] rounded-lg`}>
          <Image
            fill
            src={image.src}
            alt={image.alt ?? title}
            className="object-contain rounded-lg"
          />
          {totalInventory <= 20 && (
            <Badge color="red" className="top-1 left-1">
              Only {totalInventory} left!
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-xs items-start text-left">
          <h6 className="font-normal text-left">{title}</h6>
          {minPrice.amount !== maxPrice.amount ? (
            <h6 className="whitespace-nowrap font-normal">
              {formatPrice(minPrice)} ~ {formatPrice(maxPrice)}
            </h6>
          ) : (
            <h6 className="font-normal">{formatPrice(minPrice)}</h6>
          )}
          {options &&
            options.map((opt) => (
              <React.Fragment key={`product-card-${opt.name}`}>
                <div className="flex items-center gap-xs">
                  {opt.values.slice(0, 3).map((val) => (
                    <React.Fragment key={val.name}>
                      {val.color ? (
                        <div
                          style={{ backgroundColor: val.color }}
                          className="size-4 rounded-full border border-lightGray"
                        />
                      ) : (
                        <p className="body-small leading-none font-bold p-[3px] rounded-sm bg-lightGray">
                          {val.name}
                        </p>
                      )}
                    </React.Fragment>
                  ))}
                  {opt.values.slice(3).length > 0 && (
                    <p className="text-[10px] font-bold">+{opt.values.slice(3).length}</p>
                  )}
                </div>
              </React.Fragment>
            ))}
        </div>
      </button>
    </Link>
  );
};

export default ProductCard;
