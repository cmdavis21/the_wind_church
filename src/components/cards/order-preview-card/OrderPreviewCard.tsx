'use client';

import CartModal from '@/components/modals/cart-modal/CartModal';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { formatPrice } from '@/data/format-price';
import { GraphQLTypes } from '@/data/services/shopify/admin/zeus';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { Order } from '@/data/types';
import { Button, Spinner } from 'flowbite-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface OrderPreviewCardProps {
  order: Order;
}

const OrderPreviewCard: React.FC<OrderPreviewCardProps> = ({ order }) => {
  const [open, setOpen] = useState(false);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);
  const { getCart, cartLoading, addToCart } = useCartFunctions();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CartModal
        open={showModal}
        setOpen={setShowModal}
        hideSecondaryButton
        cartQuantity={getCart?.total_quantity ?? 0}
        cartLines={
          getCart?.lines.map((line) => ({
            image: line.image,
            title: line.title,
            price: line.variant.price,
            quantity: line.quantity,
            subtotal: line.subtotal_amount,
            selectedOptions: line.variant.selected_options.map((opt) => opt),
          })) ?? []
        }
      />

      <div className="relative p-4 rounded-2xl border border-light-gray dark:border-dark-gray bg-white dark:bg-dark-bg shadow-sm w-full">
        {/* TOP LAYER */}
        <div className="w-full flex flex-col md:flex-row gap-5 justify-between">
          {/* INFO */}
          <div className="flex flex-row gap-3">
            {/* FEATURED IMAGE */}
            <div className="relative">
              {order.quantity > 1 && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 flex flex-row items-center justify-center rounded-lg">
                  <h4 className="text-white font-bold">+{order.quantity}</h4>
                </div>
              )}
              <Image
                width={100}
                height={100}
                src={order.line_items[0].image.src}
                alt={order.line_items[0].image.alt}
                className="size-4xl min-w-4xl max-h-4xl object-cover rounded-lg"
              />
            </div>

            {/* QUICK FACTS */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">Order {order.order_name}</h4>
              <h6>{formatDateMMMddyyyy(order.created_date)}</h6>
              <h6>
                {order.quantity} item{order.quantity > 1 ? 's' : ''}
              </h6>
              <h4 className="md:hidden text-right font-bold">
                Total: {formatPrice(order.total_price)}
              </h4>
            </div>
          </div>

          {/* TOTAL + ACTION */}
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="hidden md:block text-right font-bold">
              {formatPrice(order.total_price)}
            </h3>
            <div className="flex flex-row gap-2">
              <Button
                color="primary"
                className="w-full md:w-fit"
                onClick={() => {
                  addToCart(
                    order.line_items.map((item) => ({
                      quantity: item.quantity,
                      merchandiseId: item.variant.id as GraphQLTypes['ID'],
                    }))
                  ).then(() => setShowModal(true));
                }}
              >
                {cartLoading ? <Spinner size="xs" /> : 'Reorder'}
              </Button>
              <Button color="info" className="w-full md:w-fit" onClick={() => setOpen(!open)}>
                {open ? 'Hide' : 'View'} Details
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
                    <h6>Shipping Address:</h6>
                    <h5>
                      {order.shipping_address.first_name} {order.shipping_address.last_name}
                    </h5>
                    <h5>{order.shipping_address.address1}</h5>
                    {order.shipping_address.address2 && <h5>{order.shipping_address.address2}</h5>}
                    <h5>{order.shipping_address.city},</h5>
                    <h5>
                      {order.shipping_address.province} {order.shipping_address.country}
                    </h5>
                    <h5>{order.shipping_address.zip}</h5>
                  </div>
                  {/* BILLING ADDRESS */}
                  <div>
                    <h6>Billing Address:</h6>
                    <h5>
                      {order.billing_address.first_name} {order.billing_address.last_name}
                    </h5>
                    <h5>{order.billing_address.address1}</h5>
                    {order.billing_address.address2 && <h5>{order.billing_address.address2}</h5>}
                    <h5>{order.billing_address.city},</h5>
                    <h5>
                      {order.billing_address.province} {order.billing_address.country}
                    </h5>
                    <h5>{order.billing_address.zip}</h5>
                  </div>
                  {/* PAYMENT DETAILS */}
                  <div>
                    <h6>Payment Details:</h6>
                    <h5>{order.payment_details.company}</h5>
                    <h5>{order.payment_details.number}</h5>
                    <h5>
                      Exp. {order.payment_details.expiration_month} /{' '}
                      {order.payment_details.expiration_year}
                    </h5>
                  </div>
                </div>
                {/* TOTALS */}
                <div className="flex flex-col gap-5">
                  <div>
                    <h6 className="md:text-right">Tax</h6>
                    <h4 className="md:text-right">{formatPrice(order.total_tax)}</h4>
                  </div>
                  <div>
                    <h6 className="md:text-right">Subtotal</h6>
                    <h4 className="md:text-right">{formatPrice(order.subtotal_price)}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM LAYER */}
            <div className="flex flex-row gap-3">
              <div className="hidden md:block size-4xl" />
              <div className="flex flex-col gap-3 w-full">
                {order.line_items.map((item) => (
                  <div
                    key={`order-preview-card-line-item-${item.variant.id}`}
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
                          className="size-[70px] min-w-[70px] max-h-[70px] object-cover rounded-md"
                        />

                        {/* QUICK FACTS */}
                        <div className="flex flex-col items-start">
                          <h6 className="font-normal">
                            <span className="text-light-charcoal dark:text-dark-charcoal">
                              Price:
                            </span>{' '}
                            {formatPrice(item.variant.price)}
                          </h6>
                          <h6 className="font-normal">
                            <span className="text-light-charcoal dark:text-dark-charcoal">
                              Qty:
                            </span>{' '}
                            {item.quantity}
                          </h6>
                          {item.variant.selected_options.length > 0 &&
                            item.variant.selected_options.map((opt, index) => (
                              <h6
                                key={`order-preview-card-opt-${item.title}-${opt.value}`}
                                className="font-normal"
                              >
                                <span className="text-light-charcoal dark:text-dark-charcoal">
                                  {opt.name}:
                                </span>{' '}
                                {opt.value}
                              </h6>
                            ))}
                          {/* LINE ITEM TOTAL - MOBILE */}
                          <h6 className="md:hidden">
                            <span className="text-light-charcoal dark:text-dark-charcoal">
                              Total:
                            </span>{' '}
                            {formatPrice(item.total_price)}
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
