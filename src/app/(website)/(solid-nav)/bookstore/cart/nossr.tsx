'use client';

import QuantityInput from '@/components/forms/inputs/quantity-input/QuantityInput';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import Trash from '@/components/icons/trash';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { GraphQLTypes } from '@/data/services/shopify/zeus';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CartPage = () => {
  const { getCart, cartLoading, updateCartItems, deleteCartItems } = useCartFunctions();
  const [loadingItem, setLoadingItem] = useState<number | null>(null);

  return (
    <div className="px-padding flex flex-col gap-lg lg:gap-xxl items-center">
      <PageHeader title="Your Cart" subtitle="" />

      {cartLoading && <div></div>}

      {!cartLoading && (!getCart || (getCart && getCart?.lines.length <= 0)) && (
        <div className="flex flex-col gap-lg items-center justify-center">
          <h4 className="text-center">There are no products in your cart.</h4>
          <Link href={PageRoutes.bookstore} className="w-full md:w-[calc(50%-8px)]">
            <Button pill fullSized color="primary" className="whitespace-nowrap">
              Contine Shopping
            </Button>
          </Link>
        </div>
      )}

      {!cartLoading && getCart && getCart?.lines.length > 0 && (
        <div className="w-full rounded-lg md:p-lg flex flex-col gap-lg">
          <h5>
            You have{' '}
            <span className="font-bold">
              {getCart?.total_quantity} item{getCart?.total_quantity > 1 ? 's' : ''}
            </span>{' '}
            in the cart
          </h5>

          <hr className="text-light-gray dark:text-light-grayDark" />

          {/* DESKTOP */}
          <div className="hidden md:block w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[50%] pb-md text-left font-bold text-light-charcoalLight">
                    Product
                  </th>
                  <th className="w-[12.5%] pb-md text-center font-bold text-light-charcoalLight">
                    Price
                  </th>
                  <th className="w-[12.5%] pb-md text-center font-bold text-light-charcoalLight">
                    Quantity
                  </th>
                  <th className="w-[12.5%] pb-md text-center font-bold text-light-charcoalLight">
                    Subtotal
                  </th>
                  <th className="w-[12.5%] pb-md text-left font-bold text-light-charcoalLight"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-light-gray dark:divide-dark-gray">
                {getCart?.lines
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((line, index) => (
                    <tr
                      key={`cart-page-desktop-${line.title}`}
                      className={`${
                        loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''
                      }`}
                    >
                      <td className="py-lg">
                        <div className="flex gap-md">
                          <Image
                            width={100}
                            height={100}
                            src={line.image.src}
                            alt={line.image.alt}
                            className="object-cover min-w-[100px] size-[100px] object-top rounded-lg"
                          />
                          <div className="flex flex-col">
                            <h5 className="font-bold">{line.title}</h5>
                            {line.variant.selected_options.map((opt) => (
                              <p key={opt.name} className="capitalize">
                                <span className="text-light-charcoal dark:text-dark-charcoal">
                                  {opt.name}:
                                </span>{' '}
                                {opt.value}
                              </p>
                            ))}
                          </div>
                        </div>
                      </td>

                      <td className="py-lg text-center body-large">
                        {formatPrice(line.variant.price)}
                      </td>

                      <td className="py-lg">
                        <div className="w-fit mx-auto">
                          <QuantityInput
                            maxQuantity={10}
                            quantity={line.quantity}
                            decrement={() => {
                              setLoadingItem(index);
                              updateCartItems([
                                { quantity: line.quantity - 1, id: line.id as GraphQLTypes['ID'] },
                              ]).then(() => setLoadingItem(null));
                            }}
                            increment={() => {
                              setLoadingItem(index);
                              updateCartItems([
                                { quantity: line.quantity + 1, id: line.id as GraphQLTypes['ID'] },
                              ]).then(() => setLoadingItem(null));
                            }}
                          />
                        </div>
                      </td>

                      <td className="py-lg text-center body-large font-[500]">
                        {formatPrice(line.subtotal_amount)}
                      </td>

                      <td className="py-lg">
                        <Button
                          pill
                          size="sm"
                          color="danger"
                          className="mx-auto"
                          onClick={() => {
                            setLoadingItem(index);
                            deleteCartItems([line.id as GraphQLTypes['ID']]).then(() =>
                              setLoadingItem(null)
                            );
                          }}
                        >
                          <div className="flex items-center gap-xs text-xs">
                            <Trash fill="white" className="size-[15px]" /> Remove
                          </div>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE */}
          <div className="md:hidden divide-y divide-light-gray dark:divide-dark-gray">
            {getCart?.lines.map((line, index) => (
              <div
                key={`cart-page-mobile-${line.title}`}
                className={`${loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''} flex gap-md px-sm py-lg first:pt-0`}
              >
                <Image
                  width={60}
                  height={60}
                  src={line.image.src}
                  alt={line.image.alt}
                  className="object-cover min-w-[60px] size-[60px] object-top rounded-md"
                />
                <div className="flex flex-col gap-xs">
                  <h6 className="font-bold">{line.title}</h6>
                  {line.variant.selected_options.map((opt) => (
                    <p className="capitalize">
                      <span className="text-light-charcoal dark:text-dark-charcoal">
                        {opt.name}:
                      </span>{' '}
                      {opt.value}
                    </p>
                  ))}
                  <p className="capitalize">
                    <span className="text-light-charcoal dark:text-dark-charcoal">Price:</span>{' '}
                    {formatPrice(line.variant.price)} {line.variant.price.currencyCode}
                  </p>
                  <QuantityInput
                    scaleDown
                    maxQuantity={10}
                    quantity={line.quantity}
                    decrement={() => {
                      setLoadingItem(index);
                      updateCartItems([
                        { quantity: line.quantity - 1, id: line.id as GraphQLTypes['ID'] },
                      ]).then(() => setLoadingItem(null));
                    }}
                    increment={() => {
                      setLoadingItem(index);
                      updateCartItems([
                        { quantity: line.quantity + 1, id: line.id as GraphQLTypes['ID'] },
                      ]).then(() => setLoadingItem(null));
                    }}
                  />
                  <p className="capitalize font-bold">
                    Total: {formatPrice(line.subtotal_amount)} {line.subtotal_amount.currencyCode}
                  </p>
                  <Button
                    pill
                    size="xs"
                    color="danger"
                    onClick={() => {
                      setLoadingItem(index);
                      deleteCartItems([line.id as GraphQLTypes['ID']]).then(() =>
                        setLoadingItem(null)
                      );
                    }}
                  >
                    <div className="flex items-center gap-xxs text-xs">
                      <Trash fill="white" className="size-[12px]" /> Remove
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <hr className="text-light-gray dark:text-light-grayDark" />

          {/* TOTAL + CHECKOUT */}
          <div className="flex flex-col gap-md md:items-end text-left md:text-right">
            <h3>Subtotal: {formatPrice(getCart?.subtotal_amount)}</h3>
            <h6>Taxes and Delivery charges calculated at checkout</h6>
            <div className="max-md:w-full flex flex-col md:flex-row gap-md">
              <Link href={PageRoutes.bookstore} className="w-full md:w-fit max-md:order-last">
                <Button pill color="info" fullSized className="md:w-fit whitespace-nowrap">
                  Contine Shopping
                </Button>
              </Link>
              <Link href={getCart?.checkout_url} className="w-full md:w-fit">
                <Button pill color="primary" fullSized>
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
