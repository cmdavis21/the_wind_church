import { ListObjectsCommand } from "@aws-sdk/client-s3";

import { s3Config } from "./config";

export const getGalleryImages = async (category?: string) => {
  try {
    const client = s3Config();
    const bucketName = process.env.AWS_BUCKET_NAME ?? "";

    // List objects only in the gallery folder
    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: "gallery/", // Filters objects within the "gallery" folder
    });

    const { Contents } = await client.send(command);

    if (Contents) {
      // Initialize a dictionary to store categories and their images
      const galleryCategories: { [category: string]: string[] } = {};

      Contents.filter((item) => item.Size && item.Size > 0) // Filter out empty folders
        .forEach((item) => {
          const imageUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`;

          // Extract the category from the second-to-last part of the path
          const pathParts = item.Key?.split("/") ?? [];
          const category =
            pathParts.length > 2
              ? pathParts[pathParts.length - 2].replace(/_/g, " ")
              : "Uncategorized";

          // Add the image URL under the appropriate category
          if (!galleryCategories[category]) {
            galleryCategories[category] = [];
          }
          galleryCategories[category].push(imageUrl);
        });

      // Convert the dictionary into an array of objects with title and urls
      const categorizedImages = Object.entries(galleryCategories).map(
        ([title, urls]) => ({
          title,
          urls,
        })
      );

      let selectGallery: string[] = [];

      if (category) {
        selectGallery =
          categorizedImages.find((g) =>
            g.title.toLowerCase().includes(category.toLowerCase())
          )?.urls ?? [];
      }

      return { gallery: categorizedImages, selectGallery };
    }

    return {};
  } catch (e: unknown) {
    console.error("Error fetching gallery contents", e);
    throw new Error("AWS FETCH GALLERY CONTENTS ERROR");
  }
};
