import { getAllDeepDives } from '@/data/server/sanity/queries/deep-dives';
import { GET_ALL_DEEP_DIVES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const deepDives = await getAllDeepDives();
    return NextResponse.json(deepDives);
  } catch (err) {
    console.error(`${GET_ALL_DEEP_DIVES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_DEEP_DIVES} ERROR` }, { status: 500 });
  }
}
