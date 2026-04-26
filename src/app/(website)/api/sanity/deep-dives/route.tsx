import { getAllDeepDives } from '@/data/server/sanity/queries/deep-dives';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const deepDives = await getAllDeepDives();
    return NextResponse.json(deepDives);
  } catch (err) {
    console.error('Sanity deep dives error:', err);
    return NextResponse.json({ error: 'Failed to fetch deep dives' }, { status: 500 });
  }
}
