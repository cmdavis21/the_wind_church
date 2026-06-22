import { NextResponse } from 'next/server';

import { getCurrentCart } from '@/data/server/shopify/queries/cart';
import { cookies } from 'next/headers';

export async function GET() {
  const cartId = cookies().get('WSWC_CART_ID')?.value;

  if (!cartId) {
    return NextResponse.json(null);
  }

  const cart = await getCurrentCart(cartId);

  return NextResponse.json(cart);
}
