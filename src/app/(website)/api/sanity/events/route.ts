import { Locale } from '@/data/i18n/utils';
import { getAllEvents } from '@/data/server/sanity/queries/events';
import { GET_ALL_EVENTS } from '@/data/types';
import { getLocale } from 'next-intl/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const locale = (await getLocale()) as Locale;
    const events = await getAllEvents(locale);
    return NextResponse.json(events);
  } catch (err) {
    console.error(`${GET_ALL_EVENTS} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_EVENTS} ERROR` }, { status: 500 });
  }
}
