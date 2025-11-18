'use client';

import { Button, Tooltip } from 'flowbite-react';
import React, { useState } from 'react';

import VolumeHigh from '@/components/icons/volumeHigh';
import VolumeSlash from '@/components/icons/volumeSlash';
import { PageRoutes } from '@/data/page-routes';

interface FullscreenLatestSermonProps {
  title: string;
  src: string;
  poster: string;
  link: string;
}

const FullscreenLatestSermon: React.FC<FullscreenLatestSermonProps> = ({
  title,
  src,
  poster,
  link,
}) => {
  const [mute, setMute] = useState(true);
  return (
    <div className="relative w-full h-screen">
      <video
        loop
        muted={mute}
        autoPlay
        playsInline
        poster={poster}
        className="w-full h-full object-cover bg-black/90"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Color Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-padding text-center md:text-left flex flex-col gap-lg">
        <div className="flex gap-lg items-center">
          <h5 className="font-bold text-white bg-white/20 rounded-full px-md py-xs">
            Latest Sermon
          </h5>
          <button type="button" onClick={() => setMute(!mute)}>
            <Tooltip content={mute ? 'Listen to Sermon' : 'Silence Sermon'}>
              {mute ? (
                <VolumeSlash className="size-[30px] md:size-[40px] fill-white" />
              ) : (
                <VolumeHigh className="size-[30px] md:size-[40px] fill-white" />
              )}
            </Tooltip>
          </button>
        </div>

        <h2 className="text-primary text-left 2xl:text-[52px]">{title}</h2>

        <div className="flex flex-row gap-md md:gap-lg items-center">
          <Button
            pill
            size="sm_md"
            color="primary"
            className="w-full md:w-fit group !border-0"
            href={link}
          >
            <h5>Watch Full Video</h5>
          </Button>
          <Button
            pill
            size="sm_md"
            color="secondary"
            className="w-full md:w-fit group !border-0"
            href={PageRoutes.sermons}
          >
            <h5>View Sermons</h5>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenLatestSermon;
