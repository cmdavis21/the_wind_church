import { Badge } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CartPlus from '@/components/icons/cartPlus';
import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';
import { PageRoutes } from '@/data/page-routes';

import { useCart } from '@/data/services/wordpress/cart';

interface ProductCardProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: string;
  salesPrice?: string;
  categories?: string[];
  colorVariants?: string[];
  sizeVariants?: string[];
  slug: string;
  outOfStock?: boolean;
  id: number | null;
  scale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  categories,
  salesPrice,
  colorVariants,
  sizeVariants,
  slug,
  outOfStock,
  id,
  scale,
}) => {
  const {
    setCartItems,
    cartItems,
    increasetCartQuantity,
    decreasetCartQuantity,
    removeFromCart,
  } = useCart();
  return (
    <Link href={`${PageRoutes.bookstore}/${slug}`}>
      <button
        type="button"
        className={`${
          outOfStock ? 'opacity-80' : ''
        } group w-full h-full min-w-[200px] max-w-[400px] mx-auto flex flex-col gap-md`}
      >
        <div
          className={`relative w-full ${
            scale ? 'aspect-[4/3]' : 'aspect-video'
          } border border-lightGray rounded-lg`}
        >
          <Image
            fill
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-[10px]"
          />
          {salesPrice && (
            <Badge
              color="red"
              size="sm"
              className="rounded-full absolute bottom-2 right-2"
            >
              {Math.round(100 - (+salesPrice / +price) * 100)}% OFF
            </Badge>
          )}
          {outOfStock && (
            <Badge
              color="gray"
              size="sm"
              className="rounded-full absolute top-2 right-2"
            >
              Out of Stock
            </Badge>
          )}
        </div>

        <div className="text-left w-full">
          <p className="body-small font-light text-charcoal">
            {categories &&
              categories.map((cat, index) => (
                <React.Fragment key={`product-card-category-${cat}`}>
                  {cat} {index !== categories.length - 1 && '/'}
                </React.Fragment>
              ))}
          </p>
          <h5>{name}</h5>
          <div className="flex gap-sm justify-between">
            <div className="flex gap-xs font-bold body-large">
              {salesPrice && `$${salesPrice}`}
              <span
                className={`${
                  salesPrice ? 'text-charcoal/80 line-through font-light' : ''
                }`}
              >
                ${price}
              </span>
            </div>
            <div className="flex flex-col">
              {colorVariants && (
                <div className="flex flex-wrap items-center gap-[4px]">
                  {colorVariants.slice(0, 3).map((color) => (
                    <div
                      key={`product-card-color-${color}`}
                      className={`w-4 h-4 rounded-full border border-lightGray bg-${color.toLowerCase()}`}
                    />
                  ))}
                  {colorVariants.length > 3 && (
                    <div className="font-light body-small text-charcoal">
                      +{colorVariants.length - 3}
                    </div>
                  )}
                </div>
              )}
              {sizeVariants && (
                <div className="flex flex-wrap items-center gap-[4px]">
                  {sizeVariants.slice(0, 3).map((size) => (
                    <div
                      key={`product-card-size-${size}`}
                      className="text-xs font-light"
                    >
                      {size}
                    </div>
                  ))}
                  {sizeVariants.length > 3 && (
                    <div className="font-light body-small text-charcoal">
                      +{sizeVariants.length - 3}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* {id &&
            (cartItems.find((item) => item.id === id) ? (
              <div className="flex items-center w-fit text-sm">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    decreasetCartQuantity(id);
                  }}
                  className="p-[4px] hover:bg-lightGray dark:bg-softGray rounded-sm"
                >
                  <Minus className="size-[14px] fill-blue dark:fill-softBlue" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(id);
                  }}
                  className="py-xs hover:underline text-red dark:text-softRed"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    increasetCartQuantity(id);
                  }}
                  className="p-[4px] hover:bg-lightGray dark:bg-softGray rounded-sm"
                >
                  <Plus className="size-[14px] fill-blue dark:fill-softBlue" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCartItems([{ id: id, quantity: 1 }]);
                }}
                className="w-fit p-xs hover:bg-yellow dark:hover:bg-softYellow"
              >
                <CartPlus className="size-[14px] fill-blue dark:fill-softBlue" />
              </button>
            ))} */}
        </div>
      </button>
    </Link>
  );
};

export default ProductCard;
