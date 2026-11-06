import { Locale } from '@/data/i18n/utils';
import { getAllCategorizedResources } from '@/data/server/sanity/queries/resources';
import { GET_ALL_RESOURCES } from '@/data/types';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const locale = (await getLocale()) as Locale;
    const resources = await getAllCategorizedResources(locale);
    return NextResponse.json(resources);
  } catch (err) {
    console.error(`${GET_ALL_RESOURCES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_RESOURCES} ERROR` }, { status: 500 });
  }
}
