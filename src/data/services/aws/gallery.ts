import { ListObjectsCommand } from '@aws-sdk/client-s3';

import { AWS_BUCKET_NAME, AWS_REGION, GET_GALLERY_KEY } from '@/data/constants';
import { useQuery } from '@tanstack/react-query';
import { s3Config } from './config';

export const getGalleryImages = async (category?: string) => {
  try {
    const client = s3Config();

    // List objects only in the gallery folder
    const command = new ListObjectsCommand({
      Bucket: AWS_BUCKET_NAME,
      Prefix: 'gallery/', // Filters objects within the "gallery" folder
    });

    const { Contents } = await client.send(command);

    if (Contents) {
      // Initialize a dictionary to store categories and their images
      const galleryCategories: { [category: string]: string[] } = {};

      Contents.filter((item) => item.Size && item.Size > 0) // Filter out empty folders
        .forEach((item) => {
          const imageUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${item.Key}`;

          // Extract the category from the second-to-last part of the path
          const pathParts = item.Key?.split('/') ?? [];
          const category =
            pathParts.length > 2
              ? pathParts[pathParts.length - 2].replace(/_/g, ' ')
              : 'Uncategorized';

          // Add the image URL under the appropriate category
          if (!galleryCategories[category]) {
            galleryCategories[category] = [];
          }
          galleryCategories[category].push(imageUrl);
        });

      // Convert the dictionary into an array of objects with title and urls
      const categorizedImages = Object.entries(galleryCategories).map(([title, urls]) => ({
        title,
        urls,
      }));

      let selectGallery: string[] = [];

      if (category) {
        selectGallery =
          categorizedImages.find((g) => g.title.toLowerCase().includes(category.toLowerCase()))
            ?.urls ?? [];
      }

      return { gallery: categorizedImages, selectGallery };
    }

    return {};
  } catch (e: unknown) {
    console.error('Error fetching gallery contents', e);
    throw new Error('AWS FETCH GALLERY CONTENTS ERROR');
  }
};

export const useGetGalleryImages = (category?: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_GALLERY_KEY],
    queryFn: () => getGalleryImages(category),
  });
  return {
    gallery: data,
    galleryLoading: isLoading,
    galleryError: isError,
  };
};
