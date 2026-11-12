import { Locale } from '@/data/i18n/utils';
import { getStorefrontProductByHandle } from '@/data/server/shopify/queries/product';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const locale = (await getLocale()) as Locale;

  const { handle } = await req.json();

  const product = await getStorefrontProductByHandle(handle, locale);

  if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });

  return NextResponse.json(product);
}
