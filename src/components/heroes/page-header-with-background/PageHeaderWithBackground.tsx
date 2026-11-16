'use client';

import { findMediaType, MediaType } from '@/data/utils';
import Image from 'next/image';
import React from 'react';

interface PageHeaderWithBackgroundProps {
  media: {
    src: string;
    alt?: string;
    poster?: string;
  };
  title: string;
  subtitle?: string;
  short?: boolean;
}

const PageHeaderWithBackground: React.FC<PageHeaderWithBackgroundProps> = ({
  media,
  title,
  subtitle,
  short,
}) => (
  <div
    className={`relative ${
      short ? 'h-[30vh] md:h-[45vh] max-h-[500px]' : 'h-[50vh] md:h-[65vh] max-h-[600px]'
    } rounded-xl overflow-hidden pointer-events-none flex items-end p-lg sm:p-xxl lg:p-3xl`}
  >
    {/* BACKGROUND MEDIA */}
    {findMediaType(media.src) === MediaType.IMAGE && (
      <Image
        fill
        priority
        src={media.src}
        alt={media.alt ?? ''}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 motion-safe:animate-hero-zoom"
      />
    )}
    {findMediaType(media.src) === MediaType.VIDEO && (
      <video
        loop
        muted
        autoPlay
        playsInline
        src={media.src}
        poster={media.poster}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
    )}

    {/* Color Gradient Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 dark:from-black/50 rounded-xl" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 dark:from-black/50 rounded-xl" />

    <div className="relative w-full text-white flex flex-col gap-xs md:gap-md">
      <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-snug lg:max-w-[75%] inline-block motion-safe:animate-hero-word-up">
        {title}
      </h2>
      {subtitle && <h3 className="md:max-w-[50%] motion-safe:animate-hero-fade-in">{subtitle}</h3>}
    </div>
  </div>
);

export default PageHeaderWithBackground;
