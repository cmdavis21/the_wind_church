import { Locale } from '@/data/i18n/utils';
import { getAllDeepDives } from '@/data/server/sanity/queries/deep-dives';
import { GET_ALL_DEEP_DIVES } from '@/data/types';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const locale = (await getLocale()) as Locale;
    const deepDives = await getAllDeepDives(locale);
    return NextResponse.json(deepDives);
  } catch (err) {
    console.error(`${GET_ALL_DEEP_DIVES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_DEEP_DIVES} ERROR` }, { status: 500 });
  }
}
