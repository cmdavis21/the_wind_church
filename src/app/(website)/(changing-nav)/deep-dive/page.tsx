import { Metadata } from 'next';

import FullscreenMediaWithTextFadeInOutCarousel from '@/components/carousels/fullscreen-media-with-text-fade-in-out-carousel/FullscreenMediaWithTextFadeInOutCarousel';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getAllDeepDives } from '@/data/services/sanity/queries/deep-dives';

export const metadata: Metadata = {
  title: 'Deep Dive',
  description:
    'Join our Deep Dive sessions for in-depth teaching, biblical study, and spiritual growth.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/deep-dive`,
  },
};

const DeepDive = async () => {
  const deepDives = await getAllDeepDives();
  return (
    <FullscreenMediaWithTextFadeInOutCarousel
      slides={
        deepDives && deepDives.length > 0
          ? deepDives.map((deepDive) => ({
              media: deepDive.image,
              header: 'Deep Dive Studies',
              title: deepDive.name,
              subtitle:
                `${deepDive.instructors.map((d, idx) => (idx >= deepDive.instructors.length - 1 ? `${d.first_name} ${d.last_name}` : `${d.first_name} ${d.last_name} & `))}`.replace(
                  ',',
                  ''
                ),
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
  );
};

export default DeepDive;
