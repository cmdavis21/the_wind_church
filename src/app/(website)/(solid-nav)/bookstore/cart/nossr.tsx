'use client';

import LineItem from '@/components/cards/line-item/LineItem';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import { useCart } from '@/data/client/shopify/use-cart';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { CartSkeleton } from './skeleton';

const CartPage = () => {
  const { getCart, cartLoading } = useCart();

  return (
    <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
      <PageHeader title="Your Cart" subtitle="" />

      {cartLoading && <CartSkeleton />}

      {!cartLoading && (!getCart || (getCart && getCart?.lines.length <= 0)) && (
        <div className="flex flex-col gap-lg items-center justify-center h-[250px]">
          <h4 className="text-center">There are no products in your cart.</h4>
          <Link href={PageRoutes.bookstore} className="w-full max-w-[300px]">
            <Button pill fullSized color="primary" className="whitespace-nowrap">
              Contine Shopping
            </Button>
          </Link>
        </div>
      )}

      {!cartLoading && getCart && getCart?.lines.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg lg:gap-xl">
          <div className="flex flex-col gap-lg lg:col-span-2">
            <h5>
              <span className="font-bold">
                {getCart?.total_quantity} item{getCart?.total_quantity > 1 ? 's' : ''}
              </span>{' '}
              in the cart
            </h5>

            <div className="flex flex-col gap-lg">
              {getCart?.lines
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((line) => (
                  <LineItem
                    key={`cart-page-desktop-${line.title}`}
                    id={line.variant.id}
                    imageSrc={line.image.src}
                    title={line.title}
                    options={line.variant.selected_options}
                    quantity={line.quantity}
                    subtotal={line.subtotal_amount}
                  />
                ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-5 rounded-lg w-full mt-12 bg-light-gray/20 h-fit dark:bg-dark-gray p-lg flex flex-col gap-sm">
            <h2 className="font-bold">Summary</h2>
            <div className="flex flex-row justify-between gap-sm pt-lg">
              <h4 className="font-bold">Subtotal</h4>
              <h4 className="font-bold">{formatPrice(getCart?.subtotal_amount)}</h4>
            </div>
            <div className="flex flex-col gap-xs">
              <div className="flex flex-row justify-between gap-sm">
                <h5>Delivery</h5>
                <h5>At checkout</h5>
              </div>
              <div className="flex flex-row justify-between gap-sm">
                <h5>Taxes</h5>
                <h5>At checkout</h5>
              </div>
            </div>
            <hr className="text-light-gray dark:text-dark-gray" />
            <div className="flex flex-row justify-between gap-sm pb-xl">
              <h4 className="font-bold">Total</h4>
              <h4 className="font-bold">{formatPrice(getCart?.subtotal_amount)}</h4>
            </div>
            <Link href={getCart?.checkout_url} className="w-full">
              <Button pill color="primary" fullSized>
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
