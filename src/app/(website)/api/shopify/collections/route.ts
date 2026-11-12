import { Locale } from '@/data/i18n/utils';
import { getStorefrontCollections } from '@/data/server/shopify/queries/collections';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const locale = (await getLocale()) as Locale;
  const collections = await getStorefrontCollections(locale);
  if (!collections) return NextResponse.json({ error: 'Collections not found' }, { status: 404 });
  return NextResponse.json(collections);
}
