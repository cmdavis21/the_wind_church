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
  const { getCart, updateCartItems, deleteCartItems } = useCartFunctions();
  const [loadingItem, setLoadingItem] = useState<number | null>(null);
  return (
    <div className="px-padding flex flex-col gap-lg lg:gap-xxl items-center">
      <PageHeader title="Your Cart" subtitle="" />

      {getCart && getCart?.lines.length > 0 ? (
        <div className="w-full rounded-lg md:p-lg flex flex-col gap-lg">
          <h5>
            You have{' '}
            <span className="font-bold">
              {getCart?.totalQuantity} item{getCart?.totalQuantity > 1 ? 's' : ''}
            </span>{' '}
            in the cart
          </h5>

          <hr className="text-gray" />

          {/* DESKTOP */}
          <div className="hidden md:block w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[50%] pb-sm text-left font-bold text-charcoalLight">Product</th>
                  <th className="w-[12.5%] pb-sm text-center font-bold text-charcoalLight">
                    Price
                  </th>
                  <th className="w-[12.5%] pb-sm text-center font-bold text-charcoalLight">
                    Quantity
                  </th>
                  <th className="w-[12.5%] pb-sm text-center font-bold text-charcoalLight">
                    Subtotal
                  </th>
                  <th className="w-[12.5%] pb-sm text-left font-bold text-charcoalLight"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray">
                {getCart?.lines.map((line, index) => (
                  <tr
                    key={`cart-page-desktop-${line.title}`}
                    className={`${
                      loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''
                    }`}
                  >
                    <td className="py-md">
                      <div className="flex gap-md">
                        <div className="relative w-[100px] h-[100px] shrink-0">
                          <Image
                            fill
                            src={line.image.src}
                            alt={line.image.alt}
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col gap-xs">
                          <h5 className="font-[500]">{line.title}</h5>
                          {line.variant.selectedOptions.map((opt) => (
                            <p key={opt.name} className="capitalize body-small">
                              <span className="text-charcoal">{opt.name}:</span> {opt.value}
                            </p>
                          ))}
                        </div>
                      </div>
                    </td>

                    <td className="py-md text-center body-large">
                      {formatPrice(line.variant.price)}
                    </td>

                    <td className="py-md">
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

                    <td className="py-md text-center body-large font-bold">
                      {formatPrice(line.subtotalAmount)}
                    </td>

                    <td className="py-md">
                      <Button
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
                          <Trash fill="white" className="size-[10px]" /> Remove
                        </div>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE */}
          <div className="md:hidden divide-y divide-gray">
            {getCart?.lines.map((line, index) => (
              <div
                key={`cart-page-mobile-${line.title}`}
                className={`${loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''} flex gap-md px-md py-lg first:pt-0 last:pb-0`}
              >
                <div className="relative size-[80px]">
                  <Image
                    fill
                    src={line.image.src}
                    alt={line.image.alt}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <h6 className="font-[500]">{line.title}</h6>
                  {line.variant.selectedOptions.map((opt) => (
                    <p className="capitalize">
                      <span className="font-[500]">{opt.name}:</span> {opt.value}
                    </p>
                  ))}
                  <p className="capitalize">
                    <span className="text-charcoal">Price:</span> {formatPrice(line.variant.price)}{' '}
                    {line.variant.price.currencyCode}
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
                  <p className="capitalize">
                    <span className="font-[500]">Total:</span> {formatPrice(line.subtotalAmount)}{' '}
                    {line.subtotalAmount.currencyCode}
                  </p>
                  <Button
                    size="xs"
                    color="danger"
                    onClick={() => {
                      setLoadingItem(index);
                      deleteCartItems([line.id as GraphQLTypes['ID']]).then(() =>
                        setLoadingItem(null)
                      );
                    }}
                  >
                    <div className="flex items-center gap-xs text-xs">
                      <Trash fill="white" className="size-[10px]" /> Remove
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <hr className="text-gray" />

          {/* TOTAL + CHECKOUT */}
          <div className="flex flex-col gap-md md:items-end text-left md:text-right">
            <h3>Subtotal: {formatPrice(getCart?.subtotalAmount)}</h3>
            <h6>Taxes and Delivery charges calculated at checkout</h6>
            <div className="max-md:w-full flex flex-col md:flex-row gap-md">
              <Link href={PageRoutes.bookstore} className="w-full md:w-fit max-md:order-last">
                <Button color="ghost" fullSized className="md:w-fit whitespace-nowrap">
                  Contine Shopping
                </Button>
              </Link>
              <Link href={getCart?.checkoutUrl} className="w-full md:w-fit">
                <Button color="primary" fullSized>
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-lg items-center justify-center">
          <h4 className="text-center">There are no products in your cart.</h4>
          <Link href={PageRoutes.bookstore} className="w-full md:w-[calc(50%-8px)]">
            <Button fullSized color="primary" className="whitespace-nowrap">
              Contine Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
