'use client';

import FullscreenMediaWithTextFadeInOutCarousel from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel';
import FullscreenMediaWithTextFadeInOutCarouselSkeleton from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel.skeleton';
import ErrorPage from '@/components/error-page/ErrorPage';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { useGetAllDeepDives } from '@/data/services/sanity/queries/deep-dives';

const DeepDivesClient = () => {
  const { deepDives, deepDivesLoading, deepDivesError } = useGetAllDeepDives();
  const constructSubtitle = (names: { first_name: string; last_name: string }[]) => {
    if (!names || names.length === 0) return '';
    return names.map((n) => `${n.first_name} ${n.last_name}`).join(' & ');
  };

  if (deepDivesError) {
    return (
      <div className="pt-padding">
        <ErrorPage description="There are no ministries at this time. Please check again later." />
      </div>
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
                  subtitle: constructSubtitle(deepDive.instructors),
                  description: deepDive.description,
                  link: `${PageRoutes.deepDive}/${deepDive.slug}`,
                }))
              : [
                  {
                    media: {
                      src: `${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4`,
                      poster: `${AWS_ASSET_BASE_URL}/placeholder-media/food_bank.jpg`,
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
