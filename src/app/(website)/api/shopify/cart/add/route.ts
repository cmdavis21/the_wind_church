import { cartLinesAdd } from '@/data/server/shopify/mutations/cart';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lines } = await req.json();
  const result = await cartLinesAdd(lines);
  return NextResponse.json(result);
}
