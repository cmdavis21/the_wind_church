import { cartCreate, cartLinesAdd } from '@/data/server/shopify/mutations/cart';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { lines } = await req.json();
  const cookieStore = cookies();
  const cartId = cookieStore.get('WSWC_CART_ID')?.value;

  if (!cartId) {
    const newCart = await cartCreate({ lines });
    if (newCart?.id) {
      cookieStore.set('WSWC_CART_ID', newCart.id, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }
    return Response.json(newCart);
  }

  const updated = await cartLinesAdd(cartId, lines);
  return Response.json(updated);
}
