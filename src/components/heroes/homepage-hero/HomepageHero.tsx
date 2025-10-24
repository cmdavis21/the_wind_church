import Image from 'next/image';
import React from 'react';

import UpArrow from '@/components/icons/upArrow';
import { findMediaType, MediaType, styleSelectedWords } from '@/data/utils';
import Link from 'next/link';

interface HomepageHeroProps {
  title: {
    text: string;
    hightlight?: number[][];
  };
  subtitle: {
    text: string;
    hightlight?: number[][];
  };
  primaryButton: {
    label: string;
    id: string;
  };
  secondaryButton: {
    label: string;
    link: string;
  };
  media: {
    src: string;
    poster?: string;
  };
}

const HomepageHero: React.FC<HomepageHeroProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  media,
}) => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
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
          key={`homepage-hero-gradient-${area}`}
          className={`absolute w-full h-full bg-gradient-to-${area} from-black/50 from-5% via-black/10 via-30% to-transparent to-90% z-20`}
        />
      ))}

      {/* CONTENT */}
      <div className="absolute w-full bottom-0 flex justify-center items-center p-[20px] md:p-[50px] 2xl:p-[100px] z-30">
        {/* MAIN CONTENT */}
        <div className="relative text-white flex flex-col items-center justify-center gap-md">
          {title.hightlight ? (
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: title.text,
                  array: title.hightlight,
                  htmlTag: 'h1',
                  className: 'leading-none 2xl:text-[55px]',
                }),
              }}
            />
          ) : (
            <h1 className="leading-none 2xl:text-[55px]">{title.text}</h1>
          )}
          <h4 className="font-thin">{subtitle.text}</h4>
          <div className="flex gap-md">
            <Link href={primaryButton.id}>
              <button
                type="button"
                className="relative group rounded-full w-full lg:w-fit overflow-hidden bg-transparent border border-transparent"
              >
                {/* decorative button fill */}
                <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                  <div className="flex items-center h-[47px]">
                    <div className="w-0 h-full bg-white dark:bg-textInverse group-hover:w-full transition-all duration-300" />
                    <div className="w-full h-full bg-transparent group-hover:w-0 transition-all duration-300 rounded-full" />
                  </div>
                </div>
                <div className="relative px-5 py-2.5 text-base rounded-full text-white group-hover:text-black">
                  {primaryButton.label}
                </div>
              </button>
            </Link>
            <Link href={secondaryButton.link}>
              <button
                type="button"
                className="relative group rounded-full w-full lg:w-fit overflow-hidden bg-white dark:bg-textInverse"
              >
                {/* decorative button fill */}
                <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                  <div className="flex items-center h-[47px]">
                    <div className="w-0 h-full bg-white dark:bg-textInverse group-hover:w-full transition-all duration-300" />
                    <div className="w-full h-full bg-primary dark:bg-primaryDark group-hover:w-0 transition-all duration-300 rounded-full" />
                  </div>
                </div>
                <div className="relative flex items-center gap-xxs px-5 py-2.5 text-base rounded-full text-black">
                  {secondaryButton.label}{' '}
                  <UpArrow className="size-[15px] rotate-45 group-hover:rotate-90 transition-all duration-300" />
                </div>
              </button>
            </Link>
            {/* <ScrollToButton
                pill
                color="primary"
                id={primaryButton.id}
                label={primaryButton.label}
              />
              <Link href={secondaryButton.link}>
                <Button pill color="clear_white">
                  {secondaryButton.label}
                </Button>
              </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
