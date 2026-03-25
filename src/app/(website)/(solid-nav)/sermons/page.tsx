import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import VideoCard from '@/components/cards/video-card/VideoCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';

import { PageRoutes } from '@/data/page-routes';
import { AWS_ASSET_URL, WEBSITE_URL, YOUTUBE } from '@/data/services/env.server';
import { getPlaylists } from '@/data/services/youtube/playlists';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Sermons' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.sermons}`;
  const image = `${AWS_ASSET_URL}/placeholder-media/pastor_preaching.jpg`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

const Sermons = async () => {
  const playlists = await getPlaylists();

  return (
    <div className="flex flex-col gap-3xl sm:gap-4xl">
      <div className="px-padding max-width-center">
        <PageHeaderWithBackground
          media={{
            src: `${AWS_ASSET_URL}/placeholder-media/pastor_preaching.jpg`,
            alt: 'decorative background image',
            poster: '',
          }}
          title="Sermons"
          subtitle="Watch Pastor Singletary, catch-up on deep dive sessions, and more."
        />
      </div>

      {/* Recent Sermons */}
      {playlists.length > 0 &&
        playlists
          .filter((l) => l.videos.length > 0)
          .map((list) => (
            <div
              key={`youtube-playlist-${list.id}`}
              className="flex flex-col gap-xl lg:gap-xxl px-padding max-width-center"
            >
              <SectionHeader title={list.title} />
              <div className="grid gap-lg grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
                {list.videos.map((video) => (
                  <VideoCard
                    key={video.videoUrl}
                    poster={video.thumbnail}
                    title={video.title}
                    date={video.published_at}
                    link={video.videoUrl}
                  />
                ))}
              </div>
            </div>
          ))}

      {/* CTA to Youbtube Channel */}
      <MediaBackgroundAndContent
        background={{
          src: `${AWS_ASSET_URL}/placeholder-media/church_prayer.jpg`,
        }}
        content={
          <div className="flex flex-col gap-xs">
            <h2>More great videos</h2>
            <h2 className="pb-lg">available on YouTube!</h2>
            <Link href={YOUTUBE}>
              <AnimativeFillButton size="lg">Go to our Channel</AnimativeFillButton>
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default Sermons;
