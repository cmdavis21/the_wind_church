import { getAllEvents } from '@/data/server/sanity/queries/events';
import { GET_ALL_EVENTS } from '@/data/types';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json(events);
  } catch (err) {
    console.error(`${GET_ALL_EVENTS} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_EVENTS} ERROR` }, { status: 500 });
  }
}
