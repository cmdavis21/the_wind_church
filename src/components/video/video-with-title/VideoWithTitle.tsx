'use client';

import { Button } from 'flowbite-react';
import React, { useRef, useState } from 'react';

import Play from '@/components/icons/play';
import SectionHeader from '@/components/sections/section-header/SectionHeader';

interface VideoWithTitleProps {
  src: string;
  poster: string;
  title?: string;
  subtitle?: string;
  rounded?: boolean;
}

const VideoWithTitle: React.FC<VideoWithTitleProps> = ({
  src,
  poster,
  title,
  subtitle,
  rounded = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [mobileIsPaused, setMobileIsPaused] = useState(true);
  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  const toggleMobilePlayback = () => {
    if (mobileVideoRef.current) {
      if (mobileIsPaused) {
        mobileVideoRef.current.play();
      } else {
        mobileVideoRef.current.pause();
      }
    }
  };
  return (
    <>
      {/* Desktop */}
      <div
        onClick={togglePlayback}
        className={`hidden md:block relative w-full max-h-[85%] aspect-video ${rounded ? 'rounded-xl lg:rounded-xxl' : ''} overflow-hidden hover:cursor-pointer`}
      >
        <video
          ref={videoRef}
          playsInline
          poster={poster}
          className={`relative w-full h-full bg-black/90 ${rounded ? 'rounded-lg lg:rounded-xl' : ''} object-cover`}
          onPlay={() => setIsPaused(false)}
          onPause={() => setIsPaused(true)}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Color Overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 ${rounded ? 'rounded-xl lg:rounded-xxl' : ''}`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 ${rounded ? 'rounded-xl lg:rounded-xxl' : ''}`}
        />

        {/* Play Button */}
        <div
          className={`${
            isPaused ? '' : 'opacity-0'
          } transition-opacity duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <Button pill color="primary" size="md" className="drop-shadow-lg hover:cursor-pointer">
            <div className="flex items-center gap-xs px-lg">
              <Play className="size-[15px]" />
              <h5 className="font-bold">Watch</h5>
            </div>
          </Button>
        </div>

        {/* Text */}
        {title && (
          <div
            className={`absolute bottom-0 left-0 pb-padding px-padding pointer-events-none ${!isPaused ? 'opacity-0' : ''} transition-opacity duration-300`}
          >
            <SectionHeader light title={title} subtitle={subtitle} />
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {/* Text */}
        {title && <SectionHeader title={title} subtitle={subtitle} />}

        <div
          onClick={toggleMobilePlayback}
          className="relative w-full aspect-video rounded-xl hover:cursor-pointer"
        >
          <video
            ref={mobileVideoRef}
            playsInline
            poster={poster}
            className={`relative w-full h-full bg-black/90 ${rounded ? 'rounded-xl' : ''} object-cover`}
            onPlay={() => setMobileIsPaused(false)}
            onPause={() => setMobileIsPaused(true)}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Play Button */}
          <div
            className={`${
              mobileIsPaused ? '' : 'opacity-0'
            } transition-opacity duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            <Button pill color="primary" size="sm" className="drop-shadow-lg">
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
