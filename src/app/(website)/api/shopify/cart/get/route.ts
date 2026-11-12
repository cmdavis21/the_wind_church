import { NextResponse } from 'next/server';

import { Locale } from '@/data/i18n/utils';
import { getCurrentCart } from '@/data/server/shopify/queries/cart';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

export async function GET() {
  const locale = (await getLocale()) as Locale;

  const cartId = cookies().get('WSWC_CART_ID')?.value;

  if (!cartId) return NextResponse.json(null);

  const cart = await getCurrentCart(cartId, locale);

  return NextResponse.json(cart);
}
