import { getAllMinistries } from '@/data/server/sanity/queries/ministries';
import { GET_ALL_MINISTRIES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ministries = await getAllMinistries();
    return NextResponse.json(ministries);
  } catch (err) {
    console.error(`${GET_ALL_MINISTRIES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_MINISTRIES} ERROR` }, { status: 500 });
  }
}
