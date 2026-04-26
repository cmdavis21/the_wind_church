import { getAllEvents } from '@/data/server/sanity/queries/events';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json(events);
  } catch (err) {
    console.error('Sanity events error:', err);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
