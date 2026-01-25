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
  fullWidth?: boolean;
  content: ReactElement;
  centerContent?: boolean;
}

const MediaBackgroundAndContent: React.FC<MediaBackgroundAndContentProps> = ({
  background,
  color = ColorBackground.YELLOW,
  fullWidth = true,
  content,
  centerContent = false,
}) => {
  return (
    <div
      className={cn(
        !fullWidth && 'rounded-xl max-width-center',
        centerContent ? 'items-center justify-center' : 'items-end aspect-[3/1]',
        !background && color === ColorBackground.YELLOW
          ? 'text-light-primaryText'
          : 'text-white dark:text-dark-primaryText',
        'flex relative overflow-hidden w-full p-lg md:p-xxl lg:p-3xl'
      )}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* MEDIA SELECTION */}
        {background &&
          (findMediaType(background.src) === MediaType.IMAGE ? (
            <div className="relative w-full h-full">
              <Image
                fill
                src={background.src}
                alt={background.alt ?? 'decorative background'}
                className={cn(!fullWidth && 'rounded-xl', 'object-cover pointer-events-none')}
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
              className={cn(!fullWidth && 'rounded-xl', 'object-cover pointer-events-none')}
            />
          ))}
      </div>

      {/* COLOR GRADIENT */}
      <div
        className={cn(
          !fullWidth && 'rounded-xl',
          background && 'bg-gradient-to-r from-black/70',
          !background && color === ColorBackground.BLUE && 'bg-light-navy dark:bg-dark-navy/90',
          !background &&
            color === ColorBackground.YELLOW &&
            'bg-brand-primary/90 dark:bg-dark-navy/90',
          'absolute inset-0 backdrop-blur-[3px]'
        )}
      />

      {/* CONTENT */}
      <div className={cn('relative', fullWidth && 'max-width')}>{content}</div>
    </div>
  );
};

export default MediaBackgroundAndContent;
