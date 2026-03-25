import { GalleryCollection } from '@/data/types';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

import { AWS_S3_BUCKET, AWS_S3_REGION, WEBSITE_URL } from '../../env.server';
import { s3Client } from './client';

const extractCategory = (key: string): string => {
  const parts = key.split('/').filter(Boolean); // removes empty segments
  if (parts.length < 2) return 'Uncategorized';
  return parts[parts.length - 2].replace(/_/g, ' ');
};

export async function getGalleryImages(
  category?: string,
  subfolder?: string
): Promise<GalleryCollection | GalleryCollection[]> {
  try {
    const prefix =
      category && subfolder
        ? `gallery/${category}/${subfolder}/`
        : category
          ? `gallery/${category}/`
          : 'gallery/';

    const command = new ListObjectsCommand({
      Bucket: AWS_S3_BUCKET,
      Prefix: prefix,
    });

    const { Contents } = await s3Client.send(command);

    if (!Contents || Contents.length === 0) {
      return category && subfolder ? { title: subfolder, urls: [] } : [];
    }

    const categories: Record<string, string[]> = {};

    for (const item of Contents) {
      const key = item.Key;
      if (!key) continue;

      // Skip folder markers and non-image files
      const isImage =
        key.endsWith('.jpg') ||
        key.endsWith('.jpeg') ||
        key.endsWith('.png') ||
        key.endsWith('.webp');

      if (!isImage) continue;

      const imageUrl = `https://${AWS_S3_BUCKET}.s3.${AWS_S3_REGION}.amazonaws.com/${key}`;

      let title: string;

      if (category && subfolder) {
        // Exact subfolder mode
        title = subfolder.replace(/_/g, ' ');
      } else {
        // Category-only OR no-category → always group by subfolder
        title = extractCategory(key);
      }

      if (!categories[title]) categories[title] = [];
      categories[title].push(imageUrl);
    }

    const result = Object.entries(categories).map(([title, urls]) => ({
      title,
      urls: urls.slice(0, 15),
    }));

    return category && subfolder ? result[0] : result;
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

  params.append('category', 'ministries');
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

  params.append('category', 'ministries');
  params.append('subfolder', 'children_ministry');

  const res = await fetch(`${WEBSITE_URL}/api/gallery?${params.toString()}`, {
    method: 'GET',
    cache: 'no-store',
  });

  const { gallery } = await res.json();
  return gallery;
};
