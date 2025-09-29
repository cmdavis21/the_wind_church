'use client';

import MultiTextRadioContainer from '@/components/forms/inputs/multi-text-radio-container/MultiTextRadioContainer';
import QuantityInput from '@/components/forms/inputs/quantity-input/QuantityInput';
import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';
import CartModal from '@/components/modals/cart-modal/CartModal';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { GraphQLTypes } from '@/data/services/shopify/zeus';
import { Product } from '@/data/types';
import { Badge, Button, Spinner } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MISCELLANEOUS_DETAIL: { detail: string; description: string }[] = [
  {
    detail: 'Delivery',
    description:
      'We offer standard shipping across the U.S. via USPS and UPS. Orders are typically processed within 2-3 business days and delivered within 5-7 business days. Expedited shipping options are available at checkout. Please note that delivery times may vary during holidays or special church events.',
  },
  {
    detail: 'Pickup',
    description:
      "Local pickup is available at The Wind Church bookstore during regular service hours: Sundays 9am-1pm and Wednesdays 6pm-8pm. You'll receive a confirmation email when your order is ready. Please bring your order number or confirmation email when picking up.",
  },
  {
    detail: 'Returns',
    description:
      'We accept returns within 14 days of purchase for unused items in original packaging. To initiate a return, please contact our support team at bookstore@thewindchurch.org. Refunds will be processed within 5 business days of receiving the returned item. Digital products, devotionals, and personalized items are non-refundable.',
  },
];

const ProductPage = (product: Product) => {
  const { getCart, addToCart } = useCartFunctions();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [variations, setVariations] = useState<{ key: string; value: string }[]>([]);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      const fullHeight = el.scrollHeight;
      const clampHeight = parseFloat(getComputedStyle(el).lineHeight) * 2;

      setIsClamped(fullHeight > clampHeight);
    }
  }, [product.descriptionHtml]);

  const updateVariation = (key: string, value: string) => {
    setVariations((prev) => {
      const filtered = prev.filter((v) => v.key !== key);
      return [...filtered, { key, value }];
    });
  };

  useEffect(() => {
    if (product.firstVariant) {
      setVariations(product.firstVariant?.map((item) => ({ key: item.name, value: item.value })));
    }
  }, []);

  useEffect(() => {
    const foundVariantIndex = product.variants.findIndex((v) => {
      if (!v.selectedOptions) return false;

      return variations.every((opt) =>
        v.selectedOptions?.some((so) => opt.key === so.name && opt.value === so.value)
      );
    });

    if (foundVariantIndex !== -1) {
      setSelectedVariant(foundVariantIndex);
    } else {
      setSelectedVariant(0);
    }
  }, [variations]);

  return (
    <>
      <CartModal
        open={showModal}
        setOpen={setShowModal}
        cartQuantity={getCart?.totalQuantity ?? quantity}
        cartLines={
          getCart?.lines.map((line) => ({
            image: line.image,
            title: line.title,
            price: line.variant.price,
            quantity: line.quantity,
            subtotal: line.subtotalAmount,
            selectedOptions: line.variant.selectedOptions.map((opt) => opt),
          })) ?? []
        }
      />

      <div>
        {/* LEFT DECORATIVE BORDER */}
        <div className="absolute top-0 left-0 bottom-0 w-[5px] md:w-[22px] lg:w-[32px] min-h-full bg-primary dark:bg-primaryDark" />

        <div className="px-padding relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          {/* MEDIA */}
          <div className="md:col-span-2">
            {/* DESKTOP */}
            <div className="hidden lg:grid grid-cols-2 gap-lg">
              {product.images.map((img, idx) => (
                <div
                  key={`product-single-desktop-${product.variants[selectedVariant].id}-${idx}`}
                  className={`relative w-full ${idx === 0 ? 'col-span-2 aspect-video' : 'col-span-1 aspect-square'}`}
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt ?? product.title}
                    className={`${idx === 0 ? 'object-contain' : 'object-cover'} rounded-lg`}
                  />
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="lg:hidden flex flex-col gap-lg">
              <div className="relative w-full aspect-square">
                <Image
                  fill
                  src={product.images[activeImage].src ?? ''}
                  alt={product.images[activeImage].alt ?? ''}
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="flex items-center gap-sm x-scrollbox scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    type="button"
                    key={`product-single-mobile-${product.variants[selectedVariant].id}-${idx}`}
                    onClick={() => setActiveImage(idx)}
                    className="relative size-[75px] md:size-[150px] aspect-square"
                  >
                    <Image
                      fill
                      src={img.src}
                      alt={img.alt ?? product.title}
                      className="object-contain rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-xl">
            <h3>{product.title}</h3>

            {/* PRICING */}
            <div className="flex items-center gap-sm">
              <h3>{formatPrice(product.variants[selectedVariant].price)}</h3>
              {product.variants[selectedVariant].compareAtPrice && (
                <h4 className="line-through text-charcoal dark:text-textInverse">
                  {formatPrice(product.variants[selectedVariant].compareAtPrice)}
                </h4>
              )}
              {/* INVENTORY BADGE */}
              {product.variants[selectedVariant].quantityAvailable <= 20 && (
                <Badge color="red" size="md">
                  Only {product.variants[selectedVariant].quantityAvailable} left!
                </Badge>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-sm">
              <div
                ref={descriptionRef}
                className={`body-large text-charcoal ${!showDescription ? 'line-clamp-2' : ''} transition-all duration-200`}
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              {isClamped && (
                <button
                  type="button"
                  onClick={() => setShowDescription(!showDescription)}
                  className="p-sm pb-0 border border-lightGray border-x-0 border-b-0 flex items-center gap-md justify-between text-charcoal"
                >
                  Read {showDescription ? 'Less' : 'More'}{' '}
                  {showDescription ? (
                    <Minus className="fill-charcoal size-[15px]" />
                  ) : (
                    <Plus className="fill-charcoal size-[15px]" />
                  )}
                </button>
              )}
            </div>

            {/* OPTIONS */}
            <div className="pb-lg flex flex-col gap-[25px]">
              {product.options &&
                product.options.map((opt) => (
                  <MultiTextRadioContainer
                    label={opt.name}
                    onSelect={(value) => updateVariation(opt.name, value)}
                    options={opt.values.map((subOpt) => {
                      const found = variations.find(
                        (obj) => obj.key === opt.name && obj.value === subOpt.name
                      );
                      return {
                        text: subOpt.name,
                        color: subOpt.color,
                        selected: found !== undefined,
                      };
                    })}
                  />
                ))}
            </div>

            {/* QUANTITY & BAG INFO */}
            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-md">
                <QuantityInput
                  maxQuantity={10}
                  quantity={quantity}
                  decrement={setQuantity}
                  increment={setQuantity}
                />
                <div className="text-charcoal body-small">
                  In the Bag (
                  {getCart?.lines.find(
                    (item) => item.variant.id === product.variants[selectedVariant].id
                  )?.quantity ?? 0}
                  )
                </div>
              </div>
              {quantity === 10 && (
                <p className="text-red body-small">*Can only add up to 10 items max</p>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row items-center gap-md">
              <Button
                onClick={() => {
                  if (product.variants[selectedVariant].id) {
                    setLoading(true);
                    addToCart([
                      {
                        quantity,
                        merchandiseId: product.variants[selectedVariant].id as GraphQLTypes['ID'],
                      },
                    ]).then(() => {
                      setShowModal(true);
                      setLoading(false);
                    });
                  }
                }}
                fullSized
                color="primary"
                className="md:w-[calc(50%-8px)] whitespace-nowrap"
              >
                {loading ? <Spinner /> : 'Add to cart'}
              </Button>
              <Link href={PageRoutes.bookstore} className="w-full md:w-[calc(50%-8px)]">
                <Button fullSized color="ghost" className="whitespace-nowrap">
                  Contine Shopping
                </Button>
              </Link>
            </div>

            {/* MISCELLANEOUS INFO */}
            <div className="pt-xl flex flex-col gap-[25px]">
              {MISCELLANEOUS_DETAIL.map(({ detail, description }) => (
                <div
                  key={detail}
                  className="flex flex-col gap-sm text-charcoal dark:text-textInverse"
                >
                  <h5>{detail}</h5>
                  <hr className="text-gray" />
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT DECORATIVE BORDER */}
        <div className="absolute top-0 right-0 bottom-0 w-[5px] md:w-[22px] lg:w-[32px] min-h-full bg-primary dark:bg-primaryDark" />
      </div>
    </>
  );
};

export default ProductPage;
