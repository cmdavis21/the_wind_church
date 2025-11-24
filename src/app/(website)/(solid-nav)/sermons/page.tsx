import { Metadata } from 'next';

import VideoCard from '@/components/cards/video-card/VideoCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL, YOUTUBE_CHANNEL } from '@/data/constants';
import { getPastLiveStreams, getPlaylistVideos } from '@/data/services/youtube/playlists';
import { Button } from 'flowbite-react';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Watch or listen to recent sermons from The Wind Church and grow in your faith anytime, anywhere.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/sermons`,
  },
};

const Sermons = async () => {
  const liveStreams = await getPastLiveStreams();
  const otherVideos = await getPlaylistVideos();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px]">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/pastor_preaching.jpg`,
          alt: 'decorative background image',
          poster: '',
        }}
        title="Sermons"
        subtitle="Watch Pastor Singletary, catch-up on deep dive sessions, and more."
      />

      {/* Recent Sermons */}
      <div className="flex flex-col gap-xl lg:gap-xxl">
        <SectionHeader
          title="Past Live Streams"
          subtitle="Guide your studies with these learning lessons"
        />
        <div className="grid gap-lg grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {liveStreams.map((video) => (
            <VideoCard
              key={video.videoUrl}
              poster={video.thumbnail}
              title={video.title}
              date={video.publishedAt}
              link={video.videoUrl}
            />
          ))}
        </div>
      </div>

      {/* Other videos */}
      <div className="flex flex-col gap-xl lg:gap-xxl">
        <SectionHeader
          noPadding
          className="pl-sm"
          title="Other uploads"
          subtitle="Guide your studies with these learning lessons"
        />
        <div className="grid gap-lg grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {otherVideos.map((video) => (
            <VideoCard
              key={video.videoUrl}
              poster={video.thumbnail}
              title={video.title}
              date={video.publishedAt}
              link={video.videoUrl}
            />
          ))}
        </div>
      </div>

      {/* CTA to Youbtube Channel */}
      <MediaBackgroundAndContent
        rounded
        background={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
        }}
        content={
          <div className="flex flex-col gap-xs">
            <h2>More great videos</h2>
            <h2>available on YouTube!</h2>
            <Button
              pill
              size="lg"
              color="primary"
              className="mt-lg w-fit font-bold whitespace-nowrap"
              href={YOUTUBE_CHANNEL}
            >
              Go to our Channel
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Sermons;
