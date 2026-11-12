'use client';

import LineItem from '@/components/cards/line-item/LineItem';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import { useCart } from '@/data/client/shopify/use-cart';
import { formatPrice } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CartSkeleton } from './skeleton';

const CartPage = () => {
  const t = useTranslations('Cart');

  const { cart, cartLoading } = useCart();

  return (
    <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      {cartLoading && <CartSkeleton />}

      {!cartLoading && (!cart || (cart && cart?.lines.length <= 0)) && (
        <div className="flex flex-col gap-lg items-center justify-center h-[250px]">
          <h4 className="text-center">{t('emptyCart')}</h4>
          <Link href={PageRoutes.bookstore} className="w-full max-w-[300px]">
            <Button pill fullSized color="primary" className="whitespace-nowrap">
              {t('continue')}
            </Button>
          </Link>
        </div>
      )}

      {!cartLoading && cart && cart?.lines.length > 0 && (
        <div className="flex flex-col gap-lg max-w-[800px] mx-auto w-full">
          {/* CART COUNT */}
          <h5>
            {t.rich('quantity', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
              quantity: cart.total_quantity,
            })}
          </h5>

          {/* SUBTOTAL + CHECKOUT */}
          <div className="flex flex-col md:flex-row gap-lg items-center justify-between">
            <div className="flex flex-col gap-sm">
              <h4 className="font-bold">
                {t('subtotal', { amount: formatPrice(cart?.subtotal_amount) })}
              </h4>
              <h5 className="italic">{t('taxes')}</h5>
            </div>
            <Link href={cart?.checkout_url} className="w-full md:w-fit">
              <Button pill color="primary" className="w-full md:w-fit min-w-[200px]">
                {t('checkout')}
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
