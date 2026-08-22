import { SANITY_WEBHOOK_REVALIDATION_TOKEN } from '@/data/server/env.server';
import { parseBody } from 'next-sanity/webhook';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { body, isValidSignature } = await parseBody(req, SANITY_WEBHOOK_REVALIDATION_TOKEN);

  if (!isValidSignature) return new Response('Invalid signature', { status: 401 });

  if (!body) return;

  revalidateTag(body._type);

  return NextResponse.json({ revalidated: true });
}
