import { getAllCategorizedLeaders } from '@/data/server/sanity/queries/leaders';
import { GET_ALL_LEADERS } from '@/data/types';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const leaders = await getAllCategorizedLeaders();
    return NextResponse.json(leaders);
  } catch (err) {
    console.error(`${GET_ALL_LEADERS} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_LEADERS} ERROR` }, { status: 500 });
  }
}
