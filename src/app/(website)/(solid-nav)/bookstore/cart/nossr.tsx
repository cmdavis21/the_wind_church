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
  const { cart, cartLoading } = useCart();

  return (
    <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
      <PageHeader title="Your Cart" subtitle="" />

      {cartLoading && <CartSkeleton />}

      {!cartLoading && (!cart || (cart && cart?.lines.length <= 0)) && (
        <div className="flex flex-col gap-lg items-center justify-center h-[250px]">
          <h4 className="text-center">There are no products in your cart.</h4>
          <Link href={PageRoutes.bookstore} className="w-full max-w-[300px]">
            <Button pill fullSized color="primary" className="whitespace-nowrap">
              Contine Shopping
            </Button>
          </Link>
        </div>
      )}

      {!cartLoading && cart && cart?.lines.length > 0 && (
        <div className="flex flex-col gap-lg max-w-[800px] mx-auto w-full">
          {/* CART COUNT */}
          <h5>
            <span className="font-bold">
              {cart?.total_quantity} item{cart?.total_quantity > 1 ? 's' : ''}
            </span>{' '}
            in the cart
          </h5>

          {/* SUBTOTAL + CHECKOUT */}
          <div className="flex flex-col md:flex-row gap-lg items-center justify-between">
            <div className="flex flex-col gap-sm">
              <h4 className="font-bold">Subtotal {formatPrice(cart?.subtotal_amount)}</h4>
              <h5 className="italic">Taxes and delivery determined at checkout</h5>
            </div>
            <Link href={cart?.checkout_url} className="w-full md:w-fit">
              <Button pill color="primary" className="w-full md:w-fit min-w-[200px]">
                Checkout
              </Button>
            </Link>
          </div>

          {cart?.lines
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((line) => (
              <LineItem
                key={`cart-page-desktop-${line.title}`}
                title={line.title}
                cartLineId={line.id}
                quantity={line.quantity}
                imageSrc={line.image.src}
                pickupOnly={line.pickup_only}
                subtotal={line.subtotal_amount}
                options={line.variant.selected_options}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
