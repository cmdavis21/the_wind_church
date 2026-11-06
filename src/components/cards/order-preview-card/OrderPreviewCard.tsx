'use client';

import CartModal from '@/components/modals/cart-modal/CartModal';
import { useCart } from '@/data/client/shopify/use-cart';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { formatPrice } from '@/data/format-price';

import { Order } from '@/data/types';
import { Button, Spinner } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface OrderPreviewCardProps {
  order: Order;
}

const OrderPreviewCard: React.FC<OrderPreviewCardProps> = ({ order }) => {
  const t = useTranslations('Orders');

  const {
    order_name,
    created_date,
    subtotal_price,
    total_tax,
    total_price,
    payment_details,
    shipping_address,
    billing_address,
    quantity,
    line_items,
  } = order;

  const [open, setOpen] = useState(false);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);
  const { cart, cartLoading, addCartItems } = useCart();
  const [showModal, setShowModal] = useState(false);
  const canReorder = line_items.some((ln) => ln.variant.id !== '');

  return (
    <>
      {cart && (
        <CartModal
          open={showModal}
          hideSecondaryButton
          setOpen={setShowModal}
          cartQuantity={cart.total_quantity ?? 0}
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

      <div className="relative p-6 rounded-2xl w-full overflow-hidden border border-light-gray dark:border-dark-gray bg-white dark:bg-dark-bg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* TOP LAYER */}
        <div className="w-full flex flex-col md:flex-row gap-5 justify-between">
          {/* INFO */}
          <div className="flex flex-row gap-3">
            {/* FEATURED IMAGE */}
            <div className="relative">
              {quantity > 1 && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 flex flex-row items-center justify-center rounded-lg">
                  <h4 className="text-white font-bold">{t('card.count', { quantity })}</h4>
                </div>
              )}
              <Image
                width={100}
                height={100}
                src={line_items[0].image.src}
                alt={line_items[0].image.alt}
                className="size-4xl min-w-4xl max-h-4xl object-cover rounded-lg border shadow border-light-gray dark:border-dark-gray"
              />
            </div>

            {/* QUICK FACTS */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">{t('card.name', { name: order_name })}</h4>
              <h5>{formatDateMMMddyyyy(created_date)}</h5>
              <h5>{t('card.quantity', { quantity })}</h5>
              <h5 className="md:hidden text-right font-bold">
                {t('card.total', { value: formatPrice(total_price) })}
              </h5>
            </div>
          </div>

          {/* TOTAL + ACTION */}
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="hidden md:block text-right font-bold">{formatPrice(total_price)}</h3>
            <div className="flex flex-row gap-2">
              {canReorder && (
                <Button
                  pill
                  color="primary"
                  className="w-full md:w-fit"
                  onClick={() => {
                    addCartItems(
                      line_items.map((item) => ({
                        quantity: item.quantity,
                        merchandiseId: item.variant.id as any,
                      }))
                    ).then(() => setShowModal(true));
                  }}
                >
                  {cartLoading ? <Spinner size="xs" /> : t('card.reorder')}
                </Button>
              )}
              <Button color="info" className="w-full md:w-fit" pill onClick={() => setOpen(!open)}>
                {open ? t('card.hideDetails') : t('card.viewDetails')}
              </Button>
            </div>
          </div>
        </div>

        {/* HIDDEN DETAILS */}
        <div
          style={{
            height: open ? `${subMenuDropdown.current?.offsetHeight}px` : '0px',
          }}
          className={`${
            !open ? 'pointer-events-none' : ''
          } transition-[height] duration-700 overflow-hidden`}
        >
          <div ref={subMenuDropdown} className="flex flex-col gap-5 pt-5">
            {/* MIDDLE LAYER */}
            <div className="flex flex-row gap-3 md:pl-2">
              <div className="hidden md:block size-4xl" />
              <div className="w-full flex flex-col md:flex-row gap-5 justify-between border border-x-0 py-lg border-skeletonGray dark:border-skeletonDarkGray">
                <div className="w-full flex flex-wrap gap-md md:gap-xl">
                  {/* SHIPPING ADDRESS */}
                  <div>
                    <h6>{t('card.shipping')}</h6>
                    <h5>
                      {shipping_address.first_name} {shipping_address.last_name}
                    </h5>
                    <h5>{shipping_address.address1}</h5>
                    {shipping_address.address2 && <h5>{shipping_address.address2}</h5>}
                    <h5>{shipping_address.city},</h5>
                    <h5>
                      {shipping_address.state} {shipping_address.country}
                    </h5>
                    <h5>{shipping_address.zip}</h5>
                    <h5>{shipping_address.phone}</h5>
                  </div>
                  {/* BILLING ADDRESS */}
                  <div>
                    <h6>{t('card.billing')}</h6>
                    <h5>
                      {billing_address.first_name} {billing_address.last_name}
                    </h5>
                    <h5>{billing_address.address1}</h5>
                    {billing_address.address2 && <h5>{billing_address.address2}</h5>}
                    <h5>{billing_address.city},</h5>
                    <h5>
                      {billing_address.state} {billing_address.country}
                    </h5>
                    <h5>{billing_address.zip}</h5>
                    <h5>{billing_address.phone}</h5>
                  </div>
                  {/* PAYMENT DETAILS */}
                  <div>
                    <h6>{t('card.payment')}</h6>
                    <h5>{payment_details.company}</h5>
                    <h5>{payment_details.number}</h5>
                    <h5>
                      {t('card.expiration', {
                        month: payment_details.expiration_month,
                        year: payment_details.expiration_year,
                      })}
                    </h5>
                  </div>
                </div>
                {/* TOTALS */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h6 className="md:text-right">{t('card.tax')}</h6>
                    <h4 className="md:text-right">{formatPrice(total_tax)}</h4>
                  </div>
                  <div>
                    <h6 className="md:text-right">{t('card.subtotal')}</h6>
                    <h4 className="md:text-right">{formatPrice(subtotal_price)}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM LAYER */}
            <div className="flex flex-row gap-3">
              <div className="hidden md:block size-4xl" />
              <div className="flex flex-col gap-3 w-full">
                {line_items.map((item) => (
                  <div
                    key={`order-preview-card-line-item-${item.title}-${item.variant.id}-${item.quantity}`}
                    className="pb-5 last:pb-0 w-full flex flex-row gap-5 justify-between border border-x-0 border-t-0 last:border-b-0 border-skeletonGray dark:border-skeletonDarkGray"
                  >
                    <div className="w-full flex flex-col gap-3">
                      <h5 className="font-semibold">{item.title}</h5>
                      <div className="flex flex-row gap-3 md:col-span-2">
                        {/* PRODUCT IMAGE */}
                        <Image
                          width={70}
                          height={70}
                          src={item.image.src}
                          alt={item.image.alt}
                          className="size-[70px] min-w-[70px] max-h-[70px] object-cover rounded-md border shadow border-light-gray dark:border-dark-gray"
                        />

                        {/* QUICK FACTS */}
                        <div className="flex flex-col items-start">
                          <h6 className="font-normal">
                            {t.rich('card.item.price', {
                              bold: (chunks) => (
                                <span className="text-light-charcoal dark:text-dark-charcoal">
                                  {chunks}
                                </span>
                              ),
                              value: formatPrice(item.variant.price),
                            })}
                          </h6>
                          <h6 className="font-normal">
                            {t.rich('card.item.quantity', {
                              bold: (chunks) => (
                                <span className="text-light-charcoal dark:text-dark-charcoal">
                                  {chunks}
                                </span>
                              ),
                              value: item.quantity,
                            })}
                          </h6>
                          {item.variant.selected_options.length > 0 &&
                            item.variant.selected_options.map((opt) => (
                              <h6
                                key={`order-preview-card-opt-${item.title}-${opt.value}`}
                                className="font-normal"
                              >
                                {t.rich('card.item.selection', {
                                  bold: (chunks) => (
                                    <span className="text-light-charcoal dark:text-dark-charcoal">
                                      {chunks}
                                    </span>
                                  ),
                                  name: opt.name,
                                  value: opt.value,
                                })}
                              </h6>
                            ))}
                          {/* LINE ITEM TOTAL - MOBILE */}
                          <h6 className="md:hidden">
                            {t.rich('card.item.total', {
                              bold: (chunks) => (
                                <span className="text-light-charcoal dark:text-dark-charcoal">
                                  {chunks}
                                </span>
                              ),
                              value: formatPrice(item.total_price),
                            })}
                          </h6>
                        </div>
                      </div>
                    </div>

                    {/* LINE ITEM TOTAL */}
                    <h4 className="hidden md:block text-right">{formatPrice(item.total_price)}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPreviewCard;
