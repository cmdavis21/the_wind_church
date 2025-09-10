'use client';

import QuantityInput from '@/components/forms/inputs/quantity-input/QuantityInput';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import Trash from '@/components/icons/trash';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { GraphQLTypes } from '@/data/services/shopify/zeus';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
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
        <div className="w-full rounded-lg p-lg flex flex-col gap-lg">
          <h5>
            You have{' '}
            <span className="font-bold">
              {getCart?.totalQuantity} item{getCart?.totalQuantity > 1 ? 's' : ''}
            </span>{' '}
            in the cart
          </h5>

          <hr className="text-lightGray" />

          {/* DESKTOP */}
          <div className="hidden md:block w-full">
            <Table>
              <Table.Head className="relative !min-w-[800px] bg-red">
                <Table.Row className="text-charcoal dark:text-softWhite">
                  <Table.HeadCell className="!w-[40%] px-4 py-2 font-medium text-left">
                    Product
                  </Table.HeadCell>
                  <Table.HeadCell className="!w-[15%] px-4 py-2 font-medium text-left">
                    Price
                  </Table.HeadCell>
                  <Table.HeadCell className="!w-[15%] px-4 py-2 font-medium text-left">
                    Quantity
                  </Table.HeadCell>
                  <Table.HeadCell className="!w-[15%] px-4 py-2 font-medium text-left">
                    Total
                  </Table.HeadCell>
                  <Table.HeadCell className="!w-[15%] px-4 py-2"></Table.HeadCell>
                </Table.Row>
              </Table.Head>

              <Table.Body className="divide-y divide-lightGray">
                {getCart?.lines.map((line, index) => (
                  <Table.Row
                    key={`cart-page-desktop-${line.title}`}
                    className={`text-charcoal dark:text-softWhite ${
                      loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''
                    }`}
                  >
                    <Table.Cell className="!w-[40%] px-4 py-3">
                      <div className="flex gap-md items-center">
                        <div className="relative w-[100px] h-[100px] shrink-0">
                          <Image
                            fill
                            src={line.image.src}
                            alt={line.image.alt}
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col gap-xs">
                          <span className="font-medium">{line.title}</span>
                          {line.variant.selectedOptions.map((opt) => (
                            <p key={opt.name} className="capitalize body-small">
                              <span className="font-bold">{opt.name}:</span> {opt.value}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Table.Cell>

                    <Table.Cell className="!w-[15%] px-4 py-3">
                      <span className="font-medium">{formatPrice(line.variant.price)}</span>
                    </Table.Cell>

                    <Table.Cell className="!w-[15%] px-4 py-3">
                      <QuantityInput
                        minQuantity={1}
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
                    </Table.Cell>

                    <Table.Cell className="!w-[15%] px-4 py-3">
                      <span className="font-medium">{formatPrice(line.subtotalAmount)}</span>
                    </Table.Cell>

                    <Table.Cell className="!w-[15%] px-4 py-3">
                      <button
                        type="button"
                        onClick={() => {
                          setLoadingItem(index);
                          deleteCartItems([line.id as GraphQLTypes['ID']]).then(() =>
                            setLoadingItem(null)
                          );
                        }}
                        className="text-red underline flex items-center gap-[2px]"
                      >
                        <Trash fill="red" className="size-[12px]" /> Remove
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>

          {/* MOBILE */}
          <div className="md:hidden divide-y divide-lightGray">
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
                  <h6 className="font-normal">{line.title}</h6>
                  <p className="capitalize body-small">
                    <span className="font-bold">Price:</span> {formatPrice(line.variant.price)}{' '}
                    {line.variant.price.currencyCode}
                  </p>
                  <QuantityInput
                    scaleDown
                    minQuantity={1}
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
                  <p className="capitalize body-small">
                    <span className="font-bold">Total:</span> {formatPrice(line.subtotalAmount)}{' '}
                    {line.subtotalAmount.currencyCode}
                  </p>
                  {line.variant.selectedOptions.map((opt) => (
                    <p className="capitalize body-small">
                      <span className="font-bold">{opt.name}:</span> {opt.value}
                    </p>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setLoadingItem(index);
                      deleteCartItems([line.id as GraphQLTypes['ID']]).then(() =>
                        setLoadingItem(null)
                      );
                    }}
                    className="text-red underline flex items-center gap-[2px]"
                  >
                    <Trash fill="red" className="size-[12px]" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <hr className="text-lightGray" />

          {/* TOTAL + CHECKOUT */}
          <div className="flex flex-col gap-sm md:items-end text-left md:text-right">
            <h3>
              Subtotal: {formatPrice(getCart?.subtotalAmount)}{' '}
              {getCart?.subtotalAmount.currencyCode}
            </h3>
            <h6>Taxes and Delivery charges calculated at checkout</h6>
            <div className="max-md:w-full flex flex-col md:flex-row gap-md">
              <Link href={PageRoutes.bookstore} className="w-full md:w-fit max-md:order-last">
                <Button color="info" fullSized className="md:w-fit whitespace-nowrap">
                  Contine Shopping
                </Button>
              </Link>
              <Link href={getCart?.checkoutUrl} className="w-full md:w-fit">
                <Button color="yellow" fullSized>
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
            <Button fullSized color="yellow" className="whitespace-nowrap">
              Contine Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
