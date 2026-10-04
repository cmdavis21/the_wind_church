'use client';

import CarouselDot from '@/components/carousels/carousel-dot/CarouselDot';
import UpArrow from '@/components/icons/up-arrow';
import { formatPrice, Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Image as ImageType } from '@/data/types';
import { Badge } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ProductCardProps {
  images: ImageType[];
  title: string;
  minPrice: Price;
  maxPrice: Price;
  totalInventory: number;
  handle: string;
  pickupOnly: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  title,
  minPrice,
  maxPrice,
  totalInventory,
  handle,
  pickupOnly,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return <CarouselDot smallDot onClick={onClick} active={active} />;
  };

  return (
    <Link href={`${PageRoutes.bookstore}/${handle}`} className="group h-full w-[300px]">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full flex flex-col rounded-xl overflow-hidden border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        {/* Cover Image */}
        <div className="relative">
          <Carousel
            infinite
            arrows={false}
            autoPlaySpeed={1000}
            responsive={responsive}
            customDot={<CustomDot />}
            itemClass="p-xs rounded-xl"
            showDots={images.length > 1}
            autoPlay={isHovered && images.length > 1}
            dotListClass="flex gap-xs !justify-center items-center !pb-md"
          >
            {images.map((img) => (
              <div
                key={`product-card-img-${img}`}
                className="relative w-full aspect-square bg-white dark:opacity-75 overflow-hidden rounded-xl"
              >
                <Image
                  fill
                  src={img.src}
                  alt={img.alt ?? title}
                  className="object-contain group-hover:scale-110 transition-scale duration-300"
                />
              </div>
            ))}
          </Carousel>

          {/* Badge */}
          <div className="absolute top-4 left-4 flex flex-col gap-1">
            {totalInventory <= 20 && (
              <Badge color="red" size="xs">
                {totalInventory <= 0 ? 'Out of Stock' : `Only ${totalInventory} left!`}
              </Badge>
            )}
            {pickupOnly && (
              <Badge color="warning" size="xs">
                Pickup-only
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-md pt-xs flex flex-row items-end justify-between h-full gap-2">
          <div className="flex flex-col h-full justify-between">
            <h5 className="line-clamp-2 leading-tight pb-1">{title}</h5>
            <h5 className="font-semibold text-light-charcoal dark:text-dark-neutral">
              {minPrice.amount !== maxPrice.amount
                ? `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`
                : formatPrice(minPrice)}
            </h5>
          </div>
          <div className="bg-brand-primary/20 group-hover:bg-transparent rounded-full size-10 min-w-10 flex items-center justify-center transition-colors duration-200">
            <UpArrow className="fill-brand-dark dark:fill-brand-primary rotate-45 group-hover:rotate-90 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
