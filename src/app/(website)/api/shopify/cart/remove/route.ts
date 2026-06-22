import { cartLinesRemove } from '@/data/server/shopify/mutations/cart';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const cookieStore = cookies();

  const { lineIds } = await req.json();

  const cartId = cookieStore.get('WSWC_CART_ID')?.value;

  if (!cartId) {
    return NextResponse.json(null);
  }

  const updatedCart = await cartLinesRemove(cartId, lineIds);

  return NextResponse.json(updatedCart);
}
