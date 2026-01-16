import { findMediaType, MediaType } from '@/data/utils';
import Image from 'next/image';
import React from 'react';

interface PageHeaderWithBackgroundProps {
  media: {
    src: string;
    alt: string;
    poster: string;
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
      short ? 'h-[45vh]' : 'h-[65vh]'
    } rounded-xl overflow-hidden pointer-events-none flex items-end p-lg md:p-xxl lg:p-3xl`}
  >
    <div className="absolute inset-0">
      {findMediaType(media.src) === MediaType.IMAGE ? (
        <div className="relative w-full h-full">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
      ) : (
        <video
          loop
          muted
          autoPlay
          playsInline
          src={media.src}
          poster={media.poster}
          className="rounded-xl"
        ></video>
      )}
    </div>

    {/* color overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

    <div className="relative">
      <div className="w-full 2xl:max-w-[70%] text-white">
        <div className={`font-display text-xl md:text-[75px] leading-snug`}>{title}</div>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </div>
  </div>
);

export default PageHeaderWithBackground;
