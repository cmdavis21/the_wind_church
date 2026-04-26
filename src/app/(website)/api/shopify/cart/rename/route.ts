import { cartLinesRemove } from '@/data/server/shopify/mutations/cart';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lineIds } = await req.json();
  const result = await cartLinesRemove(lineIds);
  return NextResponse.json(result);
}
