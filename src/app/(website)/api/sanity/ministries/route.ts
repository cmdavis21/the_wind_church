import { Locale } from '@/data/i18n/utils';
import { getAllMinistries } from '@/data/server/sanity/queries/ministries';
import { GET_ALL_MINISTRIES } from '@/data/types';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const locale = (await getLocale()) as Locale;
    const ministries = await getAllMinistries(locale);
    return NextResponse.json(ministries);
  } catch (err) {
    console.error(`${GET_ALL_MINISTRIES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_MINISTRIES} ERROR` }, { status: 500 });
  }
}
