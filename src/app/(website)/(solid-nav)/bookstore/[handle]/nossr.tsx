'use client';

import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import QuantityInput from '@/components/forms/inputs/quantity-input/QuantityInput';
import TextRadio from '@/components/forms/inputs/text-radio/TextRadio';
import CartModal from '@/components/modals/cart-modal/CartModal';
import { useCart } from '@/data/client/shopify/use-cart';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Product } from '@/data/types';
import cn from 'classnames';
import { Badge, Button, Spinner } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MISCELLANEOUS_DETAIL: { detail: string; description: string }[] = [
  {
    detail: 'Delivery',
    description:
      'All items are shipped directly to you. Delivery times vary by product and destination, averaging 5-10 business days after fulfillment. Orders are processed within 2-3 business days. Tracking information will be provided once your order ships. Please note that delivery times may be longer during holidays.',
  },
  {
    detail: 'Pickup',
    description:
      "Select items are available for pickup only at The Wind Church bookstore during regular service hours (Sundays 11:30AM-12PM and Wednesdays 6:30PM-7PM). You'll receive a confirmation email when you purchase. Please bring your order number or proof of purchase when picking up your item.",
  },
  {
    detail: 'Refunds & Returns',
    description:
      'We accept returns for defective or damaged items within 14 days of delivery. To request a refund or replacement, contact bookstore@thewindchurch.org with your order number, description of the issue, and photos. Personalized products are non-refundable unless defective. Refunds are issued to the original payment method once the return is approved and processed.',
  },
];

const ProductPage = (product: Product) => {
  const { cart, addCartItems, cartLoading } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [variations, setVariations] = useState<{ key: string; value: string }[]>([]);

  // DYNAMICALLY TOGGLE DESCRIPTION HEIGHT
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      const fullHeight = el.scrollHeight;
      const clampHeight = parseFloat(getComputedStyle(el).lineHeight) * 2;
      setIsClamped(fullHeight > clampHeight);
    }
  }, [product.description_html]);

  const updateVariation = (key: string, value: string) => {
    setVariations((prev) => {
      const filtered = prev.filter((v) => v.key !== key);
      return [...filtered, { key, value }];
    });
  };

  // DEFAULT SELECT FIRST AVAILABLE VARIANT
  useEffect(() => {
    if (product.first_variant) {
      setVariations(product.first_variant?.map((item) => ({ key: item.name, value: item.value })));
    }
  }, []);

  useEffect(() => {
    const foundVariantIndex = product.variants.findIndex((v) => {
      if (!v.selected_options) return false;

      return variations.every((opt) =>
        v.selected_options?.some((so) => opt.key === so.name && opt.value === so.value)
      );
    });

    if (foundVariantIndex !== -1) {
      setSelectedVariantIndex(foundVariantIndex);
    } else {
      setSelectedVariantIndex(0);
    }
  }, [variations]);

  const selectedVariant = product.variants[selectedVariantIndex];

  return (
    <>
      {cart && (
        <CartModal
          open={showModal}
          setOpen={setShowModal}
          cartQuantity={cart.total_quantity ?? quantity}
          cartLines={cart.lines.map((line) => ({
            image: line.image,
            title: line.title,
            quantity: line.quantity,
            price: line.variant.price,
            pickupOnly: line.pickup_only,
            subtotal: line.subtotal_amount,
            selectedOptions: line.variant.selected_options.map((opt) => opt),
          }))}
        />
      )}

      <div>
        {/* LEFT DECORATIVE BORDER */}
        <div className="absolute top-0 left-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />

        <div className="px-[25px] md:px-[50px] relative grid grid-cols-1 md:grid-cols-2 gap-xxl max-width-center">
          {/* MEDIA */}
          <div className="p-1">
            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-2 gap-md lg:gap-lg">
              {[
                selectedVariant.image,
                ...product.images.filter((img) => img.src !== selectedVariant.image.src),
              ].map((img, idx) => (
                <div
                  key={`product-image-${img.src}-${idx}`}
                  className={cn(
                    idx === 0 ? 'aspect-[18/12] col-span-2' : 'aspect-square',
                    'border border-light-gray dark:border-dark-gray',
                    'shadow-sm hover:shadow-md transition-shadow duration-200',
                    'relative overflow-hidden rounded-xl bg-white dark:bg-dark-bg'
                  )}
                >
                  <Image fill src={img.src} alt={img.alt} className="object-cover" />
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <SimpleCarousel
              className="md:hidden"
              slides={[
                selectedVariant.image,
                ...product.images.filter((img) => img.src !== selectedVariant.image.src),
              ].map((img, idx) => (
                <div
                  key={`mobile-product-image-${img.src}-${idx}`}
                  className="relative overflow-hidden w-full rounded-xl bg-white dark:bg-dark-bg aspect-square border border-light-gray dark:border-dark-gray"
                >
                  <Image fill src={img.src} alt={img.alt} className="object-cover" />
                </div>
              ))}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-xl">
            <h3>{product.title}</h3>

            {/* PRICING */}
            <div className="flex items-center gap-sm">
              <h3>{formatPrice(selectedVariant.price)}</h3>
              {selectedVariant.compare_price && (
                <h4 className="line-through text-light-charcoal dark:text-dark-primaryText">
                  {formatPrice(selectedVariant.compare_price)}
                </h4>
              )}
              {/* INVENTORY BADGE */}
              {selectedVariant.quantity_available <= 20 && (
                <Badge color="red" size="md">
                  {selectedVariant.quantity_available <= 0
                    ? 'Out of Stock'
                    : `Only ${selectedVariant.quantity_available} left!`}
                </Badge>
              )}
              {/* PICKUP ONLY */}
              {product.pickup_only && (
                <Badge color="warning" size="md">
                  No Shipping, Pickup-only
                </Badge>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-sm">
              <div
                ref={descriptionRef}
                className={`body-large text-light-charcoal dark:text-dark-primaryText ${!showDescription ? 'line-clamp-2' : ''} transition-all duration-200`}
                dangerouslySetInnerHTML={{ __html: product.description_html }}
              />
              {isClamped && (
                <button
                  type="button"
                  onClick={() => setShowDescription(!showDescription)}
                  className="pt-sm border border-light-gray hover:opacity-75 dark:border-dark-gray border-x-0 border-b-0 flex items-center gap-xs text-light-charcoal dark:text-dark-primaryText"
                >
                  Read {showDescription ? 'Less' : 'More'}
                </button>
              )}
            </div>

            {/* OPTIONS */}
            <div className="md:pb-lg flex flex-col gap-lg">
              {product.options &&
                product.options.map((opt) => (
                  <div className="flex flex-col gap-sm">
                    <h5>{opt.name}</h5>
                    <div className="flex flex-wrap gap-sm">
                      {opt.values.map((subOpt) => {
                        const found = variations.find(
                          (obj) => obj.key === opt.name && obj.value === subOpt.name
                        );
                        return (
                          <TextRadio
                            key={subOpt.color}
                            text={subOpt.name}
                            color={subOpt.color}
                            selected={!!found}
                            onSelect={(value) => updateVariation(opt.name, value)}
                          />
                        );
                      })}
                    </div>
                  </div>
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
                <div className="text-light-charcoal dark:text-dark-primaryText body-small">
                  In the Bag (
                  {cart
                    ? (cart?.lines.find((item) => item.variant.id === selectedVariant.id)
                        ?.quantity ?? 0)
                    : 0}
                  )
                </div>
              </div>
              {quantity === 10 && (
                <p className="text-error body-small">*Can only add up to 10 items max</p>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-md">
              <Button
                pill
                disabled={selectedVariant.quantity_available <= 0}
                onClick={() => {
                  if (selectedVariant.id) {
                    addCartItems([
                      {
                        quantity,
                        merchandiseId: selectedVariant.id as any,
                      },
                    ]).then(() => setShowModal(true));
                  }
                }}
                fullSized
                color="primary"
                className="md:w-[calc(50%-8px)] whitespace-nowrap"
              >
                {cartLoading ? (
                  <Spinner />
                ) : selectedVariant.quantity_available <= 0 ? (
                  'Out of Stock'
                ) : (
                  'Add to cart'
                )}
              </Button>
              <Link href={PageRoutes.bookstore} className="w-full md:w-[calc(50%-8px)]">
                <Button pill fullSized color="info" className="whitespace-nowrap">
                  Contine Shopping
                </Button>
              </Link>
            </div>

            {/* MISCELLANEOUS INFO */}
            <div className="pt-xl flex flex-col gap-xl">
              {MISCELLANEOUS_DETAIL.map(({ detail, description }) => (
                <div
                  key={detail}
                  className="flex flex-col gap-sm text-light-charcoal dark:text-dark-primaryText"
                >
                  <h5>{detail}</h5>
                  <p className="pt-sm border border-light-gray dark:border-dark-gray border-x-0 border-b-0">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT DECORATIVE BORDER */}
        <div className="absolute top-0 right-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />
      </div>
    </>
  );
};

export default ProductPage;
