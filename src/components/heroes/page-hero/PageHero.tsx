import Image from 'next/image';
import React from 'react';

import { findMediaType, MediaType, styleSelectedWords } from '@/data/utils';

interface PageHeroProps {
  title: string;
  highlightTitle?: number[][];
  subtitle?: string;
  short?: boolean;
  media: {
    src: string;
    poster?: string;
  };
}

const PageHero: React.FC<PageHeroProps> = ({ title, highlightTitle, subtitle, short, media }) => {
  return (
    <div className={`relative w-full ${short ? 'h-[60%] xl:h-[75%]' : 'h-[95%]'} overflow-hidden`}>
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
      <div className="absolute w-full h-full p-[20px] md:p-[50px] 2xl:p-[100px] z-30">
        <div
          className={`relative w-full h-full flex flex-col gap-lg items-center justify-end text-white`}
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
