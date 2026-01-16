'use client';
import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import Play from '@/components/icons/play';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import cn from 'classnames';
import React, { useRef, useState } from 'react';

interface VideoWithTitleProps {
  src: string;
  poster: string;
  title: string;
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
  const [initialPlaying, setInitialPlaying] = useState(true);
  const [initialPlayingMobile, setInitialPlayingMobile] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isPaused, setIsPaused] = useState(true);
  const [mobileIsPaused, setMobileIsPaused] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (initialPlaying || video.currentTime >= video.duration) video.currentTime = 0;
    if (initialPlaying) {
      video.play();
      setInitialPlaying(false);
    } else isPaused ? video.play() : video.pause();
  };

  const toggleMobilePlayback = () => {
    const video = mobileVideoRef.current;
    if (!video) return;
    if (initialPlayingMobile || video.currentTime >= video.duration) video.currentTime = 0;
    if (initialPlayingMobile) {
      video.play();
      setInitialPlayingMobile(false);
    } else mobileIsPaused ? video.play() : video.pause();
  };

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          !fullscreen && 'rounded-xl lg:rounded-xxl max-width-center',
          'hidden md:block relative w-full h-[95vh] aspect-video overflow-hidden'
        )}
      >
        <video
          ref={videoRef}
          poster={poster}
          loop={initialPlaying}
          muted={initialPlaying}
          controls={!initialPlaying}
          autoPlay={initialPlaying}
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
            initialPlaying
              ? 'opacity-100'
              : isPaused
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none',
            !fullscreen && 'rounded-xl lg:rounded-xxl',
            'flex flex-row items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl',
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] transition-opacity duration-700'
          )}
        >
          <div className="flex flex-col items-center justify-center gap-lg">
            <h2 className="text-brand-primary font-bold">{title}</h2>
            {subtitle && <h4 className="text-light-gray dark:text-dark-neutral">{subtitle}</h4>}
            <AnimativeFillButton onClick={togglePlayback} size="xl" className="mt-sm">
              <div className="flex items-center gap-xxs body-large font-bold">
                <Play className="size-[18px] fill-light-primaryText dark:fill-dark-primaryText" />
                Watch
              </div>
            </AnimativeFillButton>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={cn(!fullscreen && 'max-width-center', 'md:hidden flex flex-col gap-md')}>
        <div className="px-padding">
          <SectionHeader title={title} subtitle={subtitle} />
        </div>
        <div className={cn(!fullscreen && 'rounded-xl', 'relative w-full aspect-video')}>
          <video
            ref={mobileVideoRef}
            poster={poster}
            loop={initialPlayingMobile}
            muted={initialPlayingMobile}
            controls={!initialPlayingMobile}
            autoPlay={initialPlayingMobile}
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
              mobileIsPaused ? 'opacity-100' : 'opacity-0 pointer-events-none',
              'transition-opacity duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          >
            <AnimativeFillButton onClick={toggleMobilePlayback}>
              <div className="flex items-center gap-xxs">
                <Play className="fill-light-primaryText dark:fill-dark-primaryText" />
                Watch
              </div>
            </AnimativeFillButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoWithTitle;
