'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import FullscreenMediaWithTextFadeInOutCarousel from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel';
import FullscreenMediaWithTextFadeInOutCarouselSkeleton from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel.skeleton';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import { AWS_ASSET_URL } from '@/data/client/env.client';
import { useGetAllDeepDives } from '@/data/client/sanity/deep-dives';
import { PageRoutes } from '@/data/page-routes';

import { combineNames } from '@/data/utils';
import { useTranslations } from 'next-intl';

const DeepDivesClient = () => {
  const t = useTranslations('DeepDive');

  const { deepDives, deepDivesLoading, deepDivesError } = useGetAllDeepDives();

  if (deepDivesError) {
    return (
      <MediaBackgroundAndContent
        centerContent
        content={<ErrorAlert />}
        background={{ src: '/images/wind_church_building.webp', alt: t('errorAlt') }}
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
                  header: t('header'),
                  title: deepDive.name,
                  subtitle: combineNames(deepDive.instructors),
                  description: deepDive.description,
                  link: `${PageRoutes.deepDive}/${deepDive.slug}`,
                }))
              : [
                  {
                    media: {
                      src: `${AWS_ASSET_URL}/bible-study-video.mp4`,
                      poster: '/images/bible-study-video-poster.webp',
                    },
                    header: t('header'),
                    title: t('none.title'),
                    description: t('none.description'),
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
