import { cartLinesRemove } from '@/data/server/shopify/mutations/cart';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lineIds } = await req.json();
  const cookieStore = cookies();

  const cartId = cookieStore.get('WSWC_CART_ID')?.value;

  if (!cartId) {
    return NextResponse.json({ cart: null });
  }

  const updatedCart = await cartLinesRemove(cartId, lineIds);
  return NextResponse.json(updatedCart);
}
