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
  noFlex?: boolean;
}

const MediaBackgroundAndContent: React.FC<MediaBackgroundAndContentProps> = ({
  background,
  color = ColorBackground.YELLOW,
  fullWidth = true,
  content,
  centerContent = false,
  noFlex = false,
}) => {
  return (
    <div
      className={cn(
        !noFlex && 'flex',
        !fullWidth && 'rounded-xl max-w-[1800px]',
        centerContent ? 'items-center justify-center' : 'items-end',
        !background && color === ColorBackground.YELLOW
          ? 'text-textPrimary'
          : 'text-white dark:text-dark-primaryText',
        'relative p-padding overflow-hidden w-full'
      )}
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* MEDIA SELECTION */}
        {background ? (
          findMediaType(background.src) === MediaType.IMAGE ? (
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
          )
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              opacity: 20,
              backgroundImage: `url(${
                color === ColorBackground.BLUE
                  ? '/images/misc/navy_background.webp'
                  : '/images/misc/yellow_background.webp'
              })`,
            }}
          />
        )}
      </div>

      {/* COLOR GRADIENT */}
      <div
        className={cn(
          !fullWidth && 'rounded-xl',
          background && 'bg-gradient-to-r from-black/70',
          !background && color === ColorBackground.BLUE && 'bg-navy/80',
          !background && color === ColorBackground.YELLOW && 'bg-brand-primary/30',
          'absolute top-0 left-0 w-full h-full backdrop-blur-[8px]'
        )}
      />

      {/* CONTENT */}
      <div
        className={cn(
          fullWidth && 'max-width-center',
          !centerContent && 'pt-[25px] md:pt-[50px] 2xl:pt-[150px]',
          'relative'
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default MediaBackgroundAndContent;
