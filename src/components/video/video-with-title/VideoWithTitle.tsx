'use client';

import Play from '@/components/icons/play';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import cn from 'classnames';
import { Button } from 'flowbite-react';
import React, { useRef, useState } from 'react';

interface VideoWithTitleProps {
  src: string;
  poster: string;
  title?: string;
  subtitle?: string;
  fullscreen?: boolean;
}

const VideoWithTitle: React.FC<VideoWithTitleProps> = ({
  src,
  poster,
  title,
  subtitle,
  fullscreen = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isPaused, setIsPaused] = useState(true);
  const [mobileIsPaused, setMobileIsPaused] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime >= video.duration) video.currentTime = 0;
    isPaused ? video.play() : video.pause();
  };

  const toggleMobilePlayback = () => {
    const video = mobileVideoRef.current;
    if (!video) return;
    if (video.currentTime >= video.duration) video.currentTime = 0;
    mobileIsPaused ? video.play() : video.pause();
  };

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          !fullscreen && 'rounded-xl lg:rounded-xxl',
          'hidden md:block relative w-full max-h-[80%] max-width-center aspect-video overflow-hidden'
        )}
      >
        <video
          ref={videoRef}
          controls
          poster={poster}
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
          className={cn(
            !fullscreen && 'rounded-xl lg:rounded-xxl',
            'relative w-full h-full bg-black/90 object-cover'
          )}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className={cn(
            isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none',
            !fullscreen && 'rounded-xl lg:rounded-xxl',
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] transition-opacity duration-700',
            'bg-black/50 backdrop-blur-sm rounded-xl',
            'flex flex-row items-center justify-center'
          )}
        >
          <div className="flex flex-col items-center justify-center gap-lg">
            {title && <h2 className="text-brand-primary font-bold">{title}</h2>}
            {subtitle && <h4 className="text-light-gray dark:text-dark-gray">{subtitle}</h4>}
            <Button
              pill
              color="primary"
              onClick={togglePlayback}
              disabled={!isPaused}
              className="mt-lg drop-shadow-lg"
            >
              <div className="flex items-center gap-xs px-lg">
                <Play className="size-[15px]" />
                <h5 className="font-bold">Watch</h5>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {title && <SectionHeader title={title} subtitle={subtitle} />}
        <div className="relative w-full aspect-video rounded-xl">
          <video
            ref={mobileVideoRef}
            controls
            poster={poster}
            onPlay={() => setMobileIsPaused(false)}
            onPause={() => setMobileIsPaused(true)}
            className={cn(
              !fullscreen && 'rounded-xl',
              'relative w-full h-full bg-black/90 object-cover'
            )}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Play Button */}
          <div
            className={cn(
              mobileIsPaused ? 'opacity-100' : 'opacity-0',
              'transition-opacity duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          >
            <Button
              pill
              size="sm"
              color="primary"
              className="drop-shadow-lg"
              onClick={toggleMobilePlayback}
            >
              <div className="flex items-center gap-xs">
                <Play className="size-[12px]" />
                <p className="font-bold">Watch</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoWithTitle;
