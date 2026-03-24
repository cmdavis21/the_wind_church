import { findMediaType, MediaType } from '@/data/utils';
import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export enum ColorBackground {
  BLUE,
  YELLOW,
}

interface MediaBackgroundAndContentProps {
  background?: {
    src: string;
    alt?: string;
    poster?: string;
  };
  color?: ColorBackground;
  content: ReactElement;
  centerContent?: boolean;
}

const MediaBackgroundAndContent: React.FC<MediaBackgroundAndContentProps> = ({
  background,
  color = ColorBackground.YELLOW,
  content,
  centerContent = false,
}) => {
  return (
    <div
      className={cn(
        centerContent ? 'items-center justify-center' : 'items-end',
        !background && color === ColorBackground.YELLOW
          ? 'text-light-primaryText'
          : 'text-white dark:text-dark-primaryText',
        'flex relative overflow-hidden w-full p-padding'
      )}
    >
      {/* BACKGROUND */}
      {background && (
        <div className="absolute inset-0">
          {findMediaType(background.src) === MediaType.IMAGE ? (
            <div className="relative w-full h-full">
              <Image
                fill
                src={background.src}
                alt={background.alt ?? 'decorative background'}
                className="object-cover pointer-events-none"
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
              className="object-cover pointer-events-none"
            />
          )}
        </div>
      )}

      {/* COLOR GRADIENT */}
      <div
        className={cn(
          background && 'bg-gradient-to-r from-black/70',
          !background && color === ColorBackground.BLUE && 'blue-gradient',
          !background && color === ColorBackground.YELLOW && 'yellow-gradient',
          'absolute inset-0 backdrop-blur-[3px]'
        )}
      />

      {/* CONTENT */}
      <div className={cn('relative py-[50px] md:py-[75px] max-width')}>{content}</div>
    </div>
  );
};

export default MediaBackgroundAndContent;
