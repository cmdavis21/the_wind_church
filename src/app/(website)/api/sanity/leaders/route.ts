import { getAllCategorizedLeaders } from '@/data/server/sanity/queries/leaders';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const leaders = await getAllCategorizedLeaders();
    return NextResponse.json(leaders);
  } catch (err) {
    console.error('Sanity leaders error:', err);
    return NextResponse.json({ error: 'Failed to fetch leaders' }, { status: 500 });
  }
}
