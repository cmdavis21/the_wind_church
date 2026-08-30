import { getAllCategorizedResources } from '@/data/server/sanity/queries/resources';
import { GET_ALL_RESOURCES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const resources = await getAllCategorizedResources();
    return NextResponse.json(resources);
  } catch (err) {
    console.error(`${GET_ALL_RESOURCES} ERROR`, err);
    return NextResponse.json({ error: `${GET_ALL_RESOURCES} ERROR` }, { status: 500 });
  }
}
