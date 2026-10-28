import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import VideoCard from '@/components/cards/video-card/VideoCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';

import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL, YOUTUBE } from '@/data/server/env.server';
import { getPlaylists } from '@/data/server/youtube/playlists';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Sermons' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.sermons}`;
  const image = '/images/sermons/pastor-preaching.webp';
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
  const t = await getTranslations('Sermons');
  const playlists = await getPlaylists();

  return (
    <div className="flex flex-col gap-3xl sm:gap-4xl">
      <div className="px-padding max-width-center">
        <PageHeaderWithBackground
          media={{ src: '/images/sermons/pastor-preaching.webp', alt: t('alt') }}
          title={t('title')}
          subtitle={t('subtitle')}
        />
      </div>

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

      <MediaBackgroundAndContent
        background={{ src: '/images/sermons/pastor-preaching-afar.webp', alt: t('section.alt') }}
        content={
          <div className="flex flex-col gap-xs">
            <h2>{t('section.header')}</h2>
            <h2 className="pb-lg">{t('section.subheader')}</h2>
            <Link href={YOUTUBE}>
              <AnimativeFillButton size="lg">{t('section.cta')}</AnimativeFillButton>
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default Sermons;
