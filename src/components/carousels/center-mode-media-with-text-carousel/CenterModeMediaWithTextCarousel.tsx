'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { findMediaType, MediaType } from '@/data/utils';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface CenterModeMediaWithTextCarouselProps {
  slides: {
    media: {
      src: string;
      alt: string;
      poster?: string;
    };
    title?: string;
    description?: string;
  }[];
}

const CenterModeMediaWithTextCarousel: React.FC<CenterModeMediaWithTextCarouselProps> = ({
  slides,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 1,
      partialVisibilityGutter: 1000,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 1,
      partialVisibilityGutter: 300,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 50,
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
      className="absolute left-0 px-xxl lg:px-4xl min-[1800px]:px-7xl top-[50%] -translate-y-[50%] w-full"
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  const MobileButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute -bottom-3 right-0 mr-lg sm:mr-xxl"
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  const Card: React.FC<{ slide: (typeof slides)[0] }> = ({ slide }) => {
    return (
      <div
        key={`mobile-media-with-side-text-carousel-${slide.media.src}`}
        className="flex flex-col gap-lg"
      >
        <div className="relative aspect-[17/9] w-full min-w-7xl max-w-[900px] pointer-events-none overflow-hidden">
          {findMediaType(slide.media.src) === MediaType.IMAGE ? (
            <Image
              fill
              src={slide.media.src}
              alt={slide.media.alt}
              className="rounded-xl object-cover"
            />
          ) : (
            <video
              loop
              muted
              playsInline
              poster={slide.media.poster}
              className="rounded-xl object-cover pointer-events-none"
            >
              <source src={slide.media.src} />
            </video>
          )}
        </div>
        <div className="flex flex-col gap-md">
          {slide.title && <h2>{slide.title}</h2>}
          {slide.description && <h5>{slide.description}</h5>}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block relative">
        <Carousel
          arrows={false}
          infinite
          showDots
          draggable
          swipeable
          centerMode
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside
          containerClass="pb-xxl"
          responsive={responsive}
          customDot={<CustomDot />}
          dotListClass="flex gap-xs"
          itemClass="px-xl"
        >
          {slides.map((slide) => (
            <Card key={`media-with-side-text-carousel-${slide.media.src}`} slide={slide} />
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative px-[21px] sm:px-[46px]">
        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          itemClass="px-1"
          containerClass="pb-xl"
          responsive={responsive}
          renderButtonGroupOutside
          customDot={<CustomDot />}
          customButtonGroup={<MobileButtonGroup />}
          dotListClass="flex gap-xs !justify-start"
        >
          {slides.map((slide) => (
            <Card key={`media-with-side-text-carousel-mobile-${slide.media.src}`} slide={slide} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CenterModeMediaWithTextCarousel;
