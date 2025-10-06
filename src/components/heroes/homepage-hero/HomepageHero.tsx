import Image from 'next/image';
import React from 'react';

import UpArrow from '@/components/icons/upArrow';
import { findMediaType, MediaType, styleSelectedWords } from '@/data/utils';
import Link from 'next/link';

interface HomepageHeroProps {
  title: string;
  highlightTitle?: number[][];
  subtitle: string;
  primaryButton: {
    label: string;
    id: string;
  };
  secondaryButton: {
    label: string;
    link: string;
  };
  facts: {
    label: string;
    subLabel: string;
  }[];
  media: {
    src: string;
    poster?: string;
  };
}

const HomepageHero: React.FC<HomepageHeroProps> = ({
  title,
  highlightTitle,
  subtitle,
  primaryButton,
  secondaryButton,
  facts,
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
      <div className="absolute w-full h-full p-[20px] md:p-[50px] 2xl:p-[100px] z-30">
        <div className="relative w-full h-full flex flex-col lg:flex-row gap-xl justify-end lg:justify-between items-end text-white">
          {/* MAIN CONTENT */}
          <div className="space-y-md w-full max-w-1/2">
            {highlightTitle ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: styleSelectedWords({
                    text: title,
                    array: highlightTitle,
                    htmlTag: 'h1',
                    className: 'leading-none 2xl:text-[55px]',
                  }),
                }}
              />
            ) : (
              <h1 className="leading-none 2xl:text-[55px]">{title}</h1>
            )}
            <h4 className="font-thin">{subtitle}</h4>
            <div className="flex gap-md">
              <Link href={primaryButton.id}>
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
                    {primaryButton.label}{' '}
                    <UpArrow className="size-[15px] rotate-90 group-hover:rotate-180 transition-all duration-300" />
                  </div>
                </button>
              </Link>
              <Link href={secondaryButton.link}>
                <button
                  type="button"
                  className="relative group rounded-full w-full lg:w-fit overflow-hidden bg-transparent border border-white"
                >
                  {/* decorative button fill */}
                  <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                    <div className="flex items-center h-[47px]">
                      <div className="w-0 h-full bg-white dark:bg-textInverse group-hover:w-full transition-all duration-300" />
                      <div className="w-full h-full bg-transparent group-hover:w-0 transition-all duration-300 rounded-full" />
                    </div>
                  </div>
                  <div className="relative flex items-center gap-xxs px-5 py-2.5 text-base rounded-full text-black">
                    {secondaryButton.label}{' '}
                    <UpArrow className="size-[15px] rotate-90 group-hover:rotate-180 transition-all duration-300" />
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

          {/* FACTS & ICONS */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-xl">
              {facts.slice(0, 3).map((fact) => (
                <div key={fact.label} className="flex flex-col gap-sm items-center justify-center">
                  <h2 className="italic text-center">{fact.label}</h2>
                  <h6 className="whitespace-nowrap">{fact.subLabel}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
