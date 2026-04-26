import { cartCreate, cartLinesUpdate } from '@/data/server/shopify/mutations/cart';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lines } = await req.json();
  const cookieStore = cookies();

  let cartId = cookieStore.get('WSWC_CART_ID')?.value;

  // If no cart exists, create one first
  if (!cartId) {
    const newCart = await cartCreate({
      lines: lines.map((line: any) => ({
        merchandiseId: line.merchandiseId,
        quantity: line.quantity,
      })),
    });

    if (newCart?.id) {
      cookieStore.set('WSWC_CART_ID', newCart.id, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }

    return NextResponse.json(newCart);
  }

  // Update existing cart
  const updatedCart = await cartLinesUpdate(cartId, lines);
  return NextResponse.json(updatedCart);
}
