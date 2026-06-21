'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import FullscreenMediaWithTextFadeInOutCarousel from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel';
import FullscreenMediaWithTextFadeInOutCarouselSkeleton from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel.skeleton';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import { AWS_ASSET_URL } from '@/data/client/env.client';
import { useGetAllDeepDives } from '@/data/client/sanity/deep-dives';
import { PageRoutes } from '@/data/page-routes';

import { combineNames } from '@/data/utils';

const DeepDivesClient = () => {
  const { deepDives, deepDivesLoading, deepDivesError } = useGetAllDeepDives();

  if (deepDivesError) {
    return (
      <MediaBackgroundAndContent
        centerContent
        background={{
          src: '/images/wind_church_building.webp',
          alt: 'Image of The Wind Church building',
        }}
        content={<ErrorAlert />}
      />
    );
  }

  return (
    <div>
      {deepDivesLoading && <FullscreenMediaWithTextFadeInOutCarouselSkeleton />}

      {!deepDivesLoading && deepDives && (
        <FullscreenMediaWithTextFadeInOutCarousel
          slides={
            deepDives.length > 0
              ? deepDives.map((deepDive) => ({
                  media: deepDive.image,
                  header: 'Deep Dive Studies',
                  title: deepDive.name,
                  subtitle: combineNames(deepDive.instructors),
                  description: deepDive.description,
                  link: `${PageRoutes.deepDive}/${deepDive.slug}`,
                }))
              : [
                  {
                    media: {
                      src: `${AWS_ASSET_URL}/friend-group.mp4`,
                      poster: '/images/friend-group.webp',
                      alt: '',
                    },
                    header: 'Deep Dive Studies',
                    title: 'Sorry, No Deep Dives happening now',
                    description:
                      "What are Deep Dives? Biblical Fellowship and Studies focused on select topics from God's word which applies to our relevant lives. For now, please check out our ministries if your are looking to get involved!",
                    link: PageRoutes.ministries,
                  },
                ]
          }
        />
      )}
    </div>
  );
};

export default DeepDivesClient;
