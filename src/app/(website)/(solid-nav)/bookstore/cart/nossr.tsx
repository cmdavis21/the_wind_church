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
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Total</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Row>
              </Table.Head>

              <Table.Body className="divide-y divide-gray">
                {getCart?.lines.map((line, index) => (
                  <Table.Row
                    key={`cart-page-desktop-${line.title}`}
                    className={` ${
                      loadingItem === index ? 'opacity-50 pointer-events-none animate-pulse' : ''
                    }`}
                  >
                    <Table.Cell>
                      <div className="flex gap-md items-center">
                        <div className="relative w-[100px] h-[100px] shrink-0">
                          <Image
                            fill
                            src={line.image.src}
                            alt={line.image.alt}
                            className="object-contain rounded-lg"
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

                    <Table.Cell>{formatPrice(line.variant.price)}</Table.Cell>

                    <Table.Cell>
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
                    </Table.Cell>

                    <Table.Cell>{formatPrice(line.subtotalAmount)}</Table.Cell>

                    <Table.Cell>
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
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
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
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <h6 className="font-normal">{line.title}</h6>
                  <p className="capitalize">
                    <span className="font-bold">Price:</span> {formatPrice(line.variant.price)}{' '}
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
                    <span className="font-bold">Total:</span> {formatPrice(line.subtotalAmount)}{' '}
                    {line.subtotalAmount.currencyCode}
                  </p>
                  {line.variant.selectedOptions.map((opt) => (
                    <p className="capitalize">
                      <span className="font-bold">{opt.name}:</span> {opt.value}
                    </p>
                  ))}
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
          <div className="flex flex-col gap-sm md:items-end text-left md:text-right">
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
