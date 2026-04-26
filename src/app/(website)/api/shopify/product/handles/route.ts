import { getStorefrontProductHandles } from '@/data/server/shopify/queries/product';
import { NextResponse } from 'next/server';

export async function GET() {
  const handles = await getStorefrontProductHandles();
  if (!handles) return NextResponse.json({ error: 'Product handles not found' }, { status: 404 });
  return NextResponse.json(handles);
}
