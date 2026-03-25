import { GalleryCollection } from '@/data/types';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

import { AWS_S3_BUCKET, AWS_S3_REGION, WEBSITE_URL } from '../../env.server';
import { s3Client } from './client';

const extractSubfolder = (key: string): string => {
  const parts = key.split('/').filter(Boolean);
  if (parts.length < 2) return 'Uncategorized';
  return parts[parts.length - 2].replace(/_/g, ' ');
};

export async function getGalleryImages(
  subfolder?: string
): Promise<GalleryCollection | GalleryCollection[]> {
  try {
    const prefix = subfolder ? `gallery/${subfolder}/` : 'gallery/';

    const command = new ListObjectsCommand({
      Bucket: AWS_S3_BUCKET,
      Prefix: prefix,
    });

    const { Contents } = await s3Client.send(command);

    if (!Contents || Contents.length === 0) {
      return subfolder ? { title: subfolder, urls: [] } : [];
    }

    const groups: Record<string, string[]> = {};

    for (const item of Contents) {
      const key = item.Key;
      if (!key) continue;

      if (!item.Size || item.Size === 0) continue;

      const isImage =
        key.endsWith('.jpg') ||
        key.endsWith('.jpeg') ||
        key.endsWith('.png') ||
        key.endsWith('.webp');

      if (!isImage) continue;

      const url = `https://${AWS_S3_BUCKET}.s3.${AWS_S3_REGION}.amazonaws.com/${key}`;

      const title = subfolder ? subfolder.replace(/_/g, ' ') : extractSubfolder(key);

      if (!groups[title]) groups[title] = [];
      groups[title].push(url);
    }

    let result = Object.entries(groups).map(([title, urls]) => ({
      title,
      urls: urls.slice(0, 15),
    }));

    if (!subfolder) {
      result = result.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
      );
    }

    return subfolder ? result[0] : result;
  } catch (err) {
    console.error('Error fetching gallery contents', err);
    throw new Error('AWS FETCH GALLERY CONTENTS ERROR');
  }
}

export const getGallery = async (): Promise<GalleryCollection[]> => {
  const res = await fetch(`http://localhost:3000/api/gallery`, {
    method: 'GET',
    cache: 'no-store',
  });
  const { gallery } = await res.json();
  return gallery;
};

export const getMinistryGallery = async (subfolder?: string): Promise<GalleryCollection> => {
  const params = new URLSearchParams();
  if (subfolder) params.append('subfolder', subfolder);
  const res = await fetch(`${WEBSITE_URL}/api/gallery?${params.toString()}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const { gallery } = await res.json();
  return gallery;
};

export const getNextGenGallery = async (): Promise<GalleryCollection> => {
  const params = new URLSearchParams();
  params.append('subfolder', 'children_ministry');
  const res = await fetch(`${WEBSITE_URL}/api/gallery?${params.toString()}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const { gallery } = await res.json();
  return gallery;
};
