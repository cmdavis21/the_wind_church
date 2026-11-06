import { Locale } from '@/data/i18n/utils';
import { getAllCategorizedLeaders } from '@/data/server/sanity/queries/leaders';
import { GET_ALL_LEADERS } from '@/data/types';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const locale = (await getLocale()) as Locale;
    const leaders = await getAllCategorizedLeaders(locale);
    return NextResponse.json(leaders);
  } catch (err) {
    console.error(`${GET_ALL_LEADERS} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_LEADERS} ERROR` }, { status: 500 });
  }
}
