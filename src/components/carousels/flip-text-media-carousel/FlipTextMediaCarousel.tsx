'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { Button } from 'flowbite-react';
import { findMediaType, MediaType } from '@/data/utils';
import Link from 'next/link';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface FlipTextMediaCarouselProps {
  slides: {
    header: string;
    description: string;
    button?: {
      label: string;
      link: string;
    };
    media: {
      src: string;
      alt?: string;
      poster?: string;
    };
  }[];
}

const FlipTextMediaCarousel: React.FC<FlipTextMediaCarouselProps> = ({ slides }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return <CarouselDot onClick={onClick} active={active} />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute left-0 px-[50px] min-[1800px]:px-[150px] top-[50%] -translate-y-[50%] w-full"
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'bg-black/40 p-sm',
        iconClassName: 'fill-white size-[25px]',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'bg-black/40 p-sm',
        iconClassName: 'fill-white size-[25px]',
      }}
    />
  );

  const MobileButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className=""
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'absolute bottom-5 left-5 z-10',
        iconClassName: 'fill-yellow',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'absolute bottom-5 right-5 z-10',
        iconClassName: 'fill-yellow',
      }}
    />
  );

  return (
    <div className="relative">
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <Carousel
          infinite
          showDots
          arrows={false}
          renderDotsOutside
          responsive={responsive}
          renderButtonGroupOutside
          renderArrowsWhenDisabled
          customDot={<CustomDot />}
          customButtonGroup={<ButtonGroup />}
          dotListClass="flex gap-xs justify-center items-center"
        >
          {slides.map((slide, index) => (
            <div
              key={`flip-text-media-carousel-${slide.header}`}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex flex-col justify-center gap-lg px-padding">
                <h2>{slide.header}</h2>
                <h4>{slide.description}</h4>
                {slide.button && (
                  <Link href={slide.button.link}>
                    <Button color="yellow" size="lg" pill>
                      {slide.button.label}
                    </Button>
                  </Link>
                )}
              </div>

              {findMediaType(slide.media.src) === MediaType.IMAGE ? (
                <div className="relative w-full min-w-1/2 max-w-1/2 aspect-square">
                  <Image
                    fill
                    src={slide.media.src}
                    alt={slide.media.alt ?? 'decorative background'}
                    className={`object-cover pointer-events-none ${index % 2 === 0 ? 'rounded-r-xl' : 'rounded-l-xl'}`}
                  />
                </div>
              ) : (
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  src={slide.media.src}
                  poster={slide.media.poster}
                  className={
                    'rounded-xl w-full min-w-1/2 max-w-1/2 object-cover pointer-events-none aspect-square'
                  }
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          responsive={responsive}
          customDot={<CustomDot />}
          customButtonGroup={<MobileButtonGroup />}
          dotListClass="h-[60px] flex gap-xs justify-center items-center"
        >
          {slides.map((slide) => (
            <div
              key={`mobile-flip-text-media-carousel-${slide.header}`}
              className="flex flex-col gap-md"
            >
              {findMediaType(slide.media.src) === MediaType.IMAGE ? (
                <div className="relative w-full h-full aspect-square">
                  <Image
                    fill
                    src={slide.media.src}
                    alt={slide.media.alt ?? 'decorative background'}
                    className={'object-cover pointer-events-none rounded-xl'}
                  />
                </div>
              ) : (
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  src={slide.media.src}
                  poster={slide.media.poster}
                  className={
                    'rounded-xl w-full h-full object-cover pointer-events-none aspect-square'
                  }
                />
              )}
              <h3>{slide.header}</h3>
              <p className="body-large">{slide.description}</p>
              {slide.button && (
                <Link href={slide.button.link}>
                  <Button color="yellow" size="lg" pill>
                    {slide.button.label}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FlipTextMediaCarousel;
