import { getGalleryImages } from '@/data/services/aws/s3/gallery';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get('category') ?? undefined;
  const subfolder = searchParams.get('subfolder') ?? undefined;

  const gallery = await getGalleryImages(category, subfolder);

  return NextResponse.json({ gallery });
}
