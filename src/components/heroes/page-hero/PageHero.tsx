import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import { findMediaType, MediaType, styleSelectedWords } from '@/data/utils';

interface PageHeroProps {
  title: string;
  highlightTitle?: number[][];
  subtitle?: string;
  size?: 'short' | 'reg' | 'full';
  media: {
    src: string;
    poster?: string;
  };
  scrollTo?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  highlightTitle,
  subtitle,
  size = 'reg',
  media,
  scrollTo,
}) => {
  return (
    <div
      className={cn(
        size === 'short' && 'h-[60vh] xl:h-[75vh]',
        size === 'reg' && 'h-[80vh]',
        size === 'full' && 'h-[100vh]',
        'relative w-full overflow-hidden'
      )}
    >
      {/* BACKGROUND IMAGE */}
      {findMediaType(media.src) === MediaType.IMAGE && (
        <Image
          fill
          src={media.src}
          alt="Decorative Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        />
      )}

      {/* BACKGROUND VIDEO */}
      {findMediaType(media.src) === MediaType.VIDEO && (
        <video
          loop
          muted
          autoPlay
          playsInline
          src={media.src}
          poster={media.poster}
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
        ></video>
      )}

      {/* GRADIENTS */}
      {['t', 'b', 'l', 'r'].map((area) => (
        <div
          key={`page-hero-gradient-${area}`}
          className={`absolute w-full h-full bg-gradient-to-${area} from-black/50 from-5% via-black/10 via-30% to-transparent to-90% z-20`}
        />
      ))}

      {/* CONTENT */}
      <div className="absolute w-full h-full p-5 md:p-[50px] 2xl:p-[100px] z-30">
        <div
          className={`relative w-full h-full flex flex-col gap-lg items-center ${scrollTo ? 'justify-center' : 'justify-end'} text-white`}
        >
          {highlightTitle ? (
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: title,
                  array: highlightTitle,
                  htmlTag: 'h1',
                  className: 'leading-none text-center 2xl:text-[55px] mx-auto',
                }),
              }}
              className="lg:max-w-[75%]"
            />
          ) : (
            <h1 className="leading-none text-center 2xl:text-[55px] mx-auto lg:max-w-[75%]">
              {title}
            </h1>
          )}

          {subtitle && <h3 className="text-center mx-auto lg:max-w-[60%]">{subtitle}</h3>}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
