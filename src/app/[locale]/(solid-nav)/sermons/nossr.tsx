"use client";
import { Button } from "flowbite-react";
import React from "react";

import VideoPlaylistCarousel from "@/components/carousels/video-playlist-carousel/VideoPlaylistCarousel";
import VideoPlaylistCarouselSkeleton from "@/components/carousels/video-playlist-carousel/VideoPlaylistCarousel.skeleton";
import PageHeaderWithBackground from "@/components/heroes/page-header-with-background/PageHeaderWithBackground";
import MediaBackgroundAndContent from "@/components/sections/media-background-and-content/MediaBackgroundAndContent";
import SectionHeader from "@/components/sections/section-header/SectionHeader";
import { YOUTUBE_CHANNEL } from "@/data/constants";
import {
  useGetPastLiveStreams,
  useGetPlaylistVideos,
} from "@/data/services/youtube/playlists";

const SermonsClient = () => {
  // const { playlistVideos, playlistVideosLoading } = useGetPlaylistVideos();
  // const { pastLiveStreams, pastLiveStreamsLoading } = useGetPastLiveStreams();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeaderWithBackground
        media={{
          src: "/placeholder-media/pastor_preaching.jpg",
          alt: "decorative background image",
          poster: "",
        }}
        title="Sermons"
        subtitle="Watch Pastor Singletary, catch-up on deep dive sessions, and more."
      />

      {/* Recent Sermons */}
      <div className="flex flex-col gap-lg md:gap-xl">
        <SectionHeader
          noPadding
          className="pl-sm"
          title="Past Live Streams"
          subtitle="Guide your studies with these learning lessons"
        />

        {/* {pastLiveStreamsLoading && <VideoPlaylistCarouselSkeleton />} */}

        {/* {!pastLiveStreamsLoading && pastLiveStreams && (
          <VideoPlaylistCarousel
            playlist={pastLiveStreams?.map((video) => ({
              poster: video.thumbnail,
              title: video.title,
              date: video.publishedAt,
              link: video.videoUrl,
            }))}
          />
        )} */}
      </div>

      {/* Other videos */}
      <div className="flex flex-col gap-lg md:gap-xl">
        <SectionHeader
          noPadding
          className="pl-sm"
          title="Other uploads"
          subtitle="Guide your studies with these learning lessons"
        />
        {/* 
        {playlistVideosLoading && <VideoPlaylistCarouselSkeleton />}

        {!playlistVideosLoading && playlistVideos && (
          <VideoPlaylistCarousel
            playlist={playlistVideos?.map((video) => ({
              poster: video.thumbnail,
              title: video.title,
              date: video.publishedAt,
              link: video.videoUrl,
            }))}
          />
        )} */}
      </div>

      {/* CTA to Youbtube Channel */}
      <MediaBackgroundAndContent
        rounded
        background={{
          src: "/placeholder-media/church_prayer.jpg",
        }}
        content={
          <div className="pt-padding flex flex-col gap-xs">
            <h2>More great videos</h2>
            <h2>available on YouTube!</h2>
            <Button
              pill
              size="lg"
              color="yellow"
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

export default SermonsClient;
