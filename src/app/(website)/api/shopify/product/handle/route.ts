import { getStorefrontProductByHandle } from '@/data/server/shopify/queries/product';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { handle } = await req.json();
  const product = await getStorefrontProductByHandle(handle);
  if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  return NextResponse.json(product);
}
