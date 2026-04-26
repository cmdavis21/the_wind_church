import { getGalleryImages } from '@/data/server/aws/s3/gallery';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const subfolder = searchParams.get('subfolder') ?? undefined;
  const gallery = await getGalleryImages(subfolder);
  return NextResponse.json({ gallery });
}
