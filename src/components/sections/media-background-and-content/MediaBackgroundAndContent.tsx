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
        centerContent ? 'items-center justify-center' : 'items-end px-padding',
        !background && color === ColorBackground.YELLOW
          ? 'text-light-primaryText'
          : 'text-white dark:text-dark-primaryText',
        'flex relative overflow-hidden w-full py-xxl lg:py-3xl'
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
          )}
        </div>
      )}

      {/* COLOR GRADIENT */}
      <div
        className={cn(
          !fullWidth && 'rounded-xl',
          background && 'bg-gradient-to-r from-black/70',
          !background &&
            color === ColorBackground.BLUE &&
            'bg-gradient-to-br from-[#051050] via-[#0B2A8C] to-[#0A1A4A]',
          !background &&
            color === ColorBackground.YELLOW &&
            'bg-gradient-to-br from-[#FDD738] via-[#F4E2B5] to-[#A57D19]',
          'absolute inset-0 backdrop-blur-[3px]'
        )}
      />

      {/* CONTENT */}
      <div
        className={cn('relative', fullWidth && 'max-width', !centerContent && 'pt-xxl sm:pt-4xl')}
      >
        {content}
      </div>
    </div>
  );
};

export default MediaBackgroundAndContent;
