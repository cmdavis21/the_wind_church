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
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  title,
  minPrice,
  maxPrice,
  totalInventory,
  handle,
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
    <Link
      href={`${PageRoutes.bookstore}/${handle}`}
      className="group w-full h-fit min-w-[300px] max-w-[350px]"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full rounded-xl overflow-hidden border border-light-gray dark:border-dark-gray bg-white dark:bg-dark-bg shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        {/* Cover Image */}
        <div className="relative">
          <Carousel
            infinite
            arrows={false}
            autoPlaySpeed={2000}
            responsive={responsive}
            customDot={<CustomDot />}
            showDots={images.length > 1}
            autoPlay={isHovered && images.length > 1}
            itemClass="p-xs rounded-xl"
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
          {totalInventory <= 20 && (
            <Badge color="red" size="xs" className="top-1 left-1">
              {totalInventory <= 0 ? 'Out of Stock' : `Only ${totalInventory} left!`}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-md pt-xs flex flex-row items-end justify-between gap-2">
          <div>
            <h5 className="line-clamp-2 font-semibold leading-tight pb-1">{title}</h5>
            <h3 className="font-medium font-display text-brand-primary">
              {minPrice.amount !== maxPrice.amount
                ? `${formatPrice(minPrice)} – ${formatPrice(maxPrice)}`
                : formatPrice(minPrice)}
            </h3>
          </div>
          <div className="bg-light-gray/50 dark:bg-dark-gray group-hover:bg-transparent rounded-full size-12 min-w-12 flex items-center justify-center transition-colors duration-200">
            <UpArrow className="size-[25px] fill-light-charcoal dark:fill-dark-charcoal rotate-45 group-hover:rotate-90 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
