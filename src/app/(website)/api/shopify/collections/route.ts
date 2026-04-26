import { getStorefrontCollections } from '@/data/server/shopify/queries/collections';
import { NextResponse } from 'next/server';

export async function GET() {
  const collections = await getStorefrontCollections();
  if (!collections) return NextResponse.json({ error: 'Collections not found' }, { status: 404 });
  return NextResponse.json(collections);
}
