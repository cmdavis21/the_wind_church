'use client';

import { useYouTubeSnippet } from '@/data/hooks';
import { PageRoutes } from '@/data/page-routes';
import { FallbackSermonSnippet, YouTubeSermonSnippet } from '@/data/types';
import { Button, Tooltip } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import VolumeHigh from '../icons/volume-high';
import VolumeXmark from '../icons/volume-xmark';

interface LatestSermonVideoProps {
  ok: boolean;
  data?: YouTubeSermonSnippet | FallbackSermonSnippet;
}

const LatestSermonVideo: React.FC<LatestSermonVideoProps> = ({ ok, data }) => {
  if (!ok || !data) return null; // if no youtube and no s3, return nothing

  const isFallback = data.kind === 'fallback';

  const videoId = isFallback ? undefined : data.videoId;
  const duration = isFallback ? undefined : data.duration;
  const yt = !isFallback && videoId && duration ? useYouTubeSnippet(videoId, duration) : null;
  const toggleSound = yt?.toggleSound;
  const isMuted = yt?.isMuted ?? true;

  const [mute, setMute] = useState(true); // for fallback video
  const isActuallyMuted = isFallback ? mute : isMuted;

  return (
    <div className="relative w-full h-[600px] lg:h-screen">
      {isFallback ? (
        <video
          loop
          autoPlay
          playsInline
          muted={mute}
          poster={data.poster}
          className="w-full h-full object-cover bg-black/90"
        >
          <source src={data.url} type="video/mp4" />
        </video>
      ) : (
        <div className="relative w-full h-[600px] lg:h-screen overflow-hidden pointer-events-none">
          <div id="sermon-snippet" className="absolute inset-0 w-full h-full" />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full px-padding py-xl lg:py-3xl text-center lg:text-left flex flex-col gap-lg lg:gap-xl bg-gradient-to-t from-black">
        <div className="flex gap-md items-center">
          <h6 className="text-white bg-white/20 rounded-full px-md py-xs">Latest Sermon</h6>
          <button
            type="button"
            className="border-0 outline-none group"
            onClick={() => {
              if (isFallback) {
                setMute(!mute);
              } else if (toggleSound) toggleSound();
            }}
          >
            <Tooltip content={isActuallyMuted ? 'Listen to Sermon' : 'Silence Sermon'}>
              <div className="group-hover:opacity-75">
                {isActuallyMuted ? (
                  <VolumeXmark className="size-[30px] lg:size-[40px] fill-white" />
                ) : (
                  <VolumeHigh className="size-[30px] lg:size-[40px] fill-white" />
                )}
              </div>
            </Tooltip>
          </button>
        </div>

        {!isFallback && <h2 className="text-white font-semibold text-left">{data.title}</h2>}

        <div className="flex flex-col lg:flex-row gap-md lg:gap-lg items-center">
          {!isFallback && (
            <Link href={data.link} target="_blank" className="w-full lg:w-fit">
              <Button pill color="primary" className="w-full lg:w-fit">
                <h5>Watch Full Video</h5>
              </Button>
            </Link>
          )}
          <Link href={PageRoutes.sermons} className="w-full lg:w-fit">
            <Button pill color="secondary" className="w-full lg:w-fit">
              <h5>View Sermons</h5>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestSermonVideo;
