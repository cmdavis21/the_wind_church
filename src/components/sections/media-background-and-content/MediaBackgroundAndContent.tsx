import Image from 'next/image';
import React, { ReactElement } from 'react';

import { findMediaType, MediaType } from '@/data/utils';

interface MediaBackgroundAndContentProps {
  background: {
    src: string;
    alt?: string;
    poster?: string;
  };
  content: ReactElement;
  className?: string;
  rounded?: boolean;
  id?: string;
}

const MediaBackgroundAndContent: React.FC<MediaBackgroundAndContentProps> = ({
  background,
  content,
  className,
  rounded,
  id,
}) => {
  return (
    <div
      id={id}
      className={`relative ${className ?? ''} ${
        rounded ? 'rounded-xl' : ''
      } p-[25px] md:p-[50px] 2xl:p-[75px] max-w-[1440px] text-white dark:text-textInverse overflow-hidden flex items-end`}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {findMediaType(background.src) === MediaType.IMAGE ? (
          <div className="relative w-full h-full">
            <Image
              fill
              src={background.src}
              alt={background.alt ?? 'decorative background'}
              className={`object-cover pointer-events-none ${rounded ? 'rounded-xl' : ''}`}
            />
          </div>
        ) : (
          <video
            loop
            muted
            autoPlay
            playsInline
            src={background.src}
            poster={background.poster}
            className={`${
              rounded ? 'rounded-xl' : ''
            } w-full h-full object-cover pointer-events-none`}
          />
        )}
      </div>

      {/* color overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 ${
          rounded ? 'rounded-xl' : ''
        }`}
      />

      <div className="relative pt-[25px] md:pt-[50px] 2xl:pt-[150px]">{content}</div>
    </div>
  );
};

export default MediaBackgroundAndContent;
