import { getAllMinistries } from '@/data/server/sanity/queries/ministries';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ministries = await getAllMinistries();
    return NextResponse.json(ministries);
  } catch (err) {
    console.error('Sanity ministries error:', err);
    return NextResponse.json({ error: 'Failed to fetch ministries' }, { status: 500 });
  }
}
