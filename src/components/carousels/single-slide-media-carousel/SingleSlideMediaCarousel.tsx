'use client';

import Carousel from 'react-multi-carousel';

import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

import { findMediaType, MediaType } from '@/data/utils';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface SingleSlideMediaCarouselProps {
  media: {
    src: string;
    alt: string;
    poster?: string;
  }[];
}

const SingleSlideMediaCarousel: React.FC<SingleSlideMediaCarouselProps> = ({ media }) => {
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
      className={`${media.length === 1 ? 'hidden' : ''}`}
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'absolute top-[50%] -translate-y-[50%] left-3',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'absolute top-[50%] -translate-y-[50%] right-3',
      }}
    />
  );

  return (
    <div className="relative">
      <Carousel
        showDots
        infinite
        arrows={false}
        responsive={responsive}
        renderButtonGroupOutside
        renderArrowsWhenDisabled
        customDot={<CustomDot />}
        dotListClass="flex gap-xs justify-center !mb-2"
        customButtonGroup={<ButtonGroup />}
      >
        {media.map((slide) => (
          <div
            key={`single-slide-media-carousel-${slide.src}`}
            className="pointer-events-none aspect-square border-2 rounded-xl border-light-gray dark:border-dark-gray relative bg-white"
          >
            {findMediaType(slide.src) === MediaType.IMAGE ? (
              <Image
                fill
                src={slide.src}
                alt={slide.alt}
                className="object-contain object-center rounded-xl"
              />
            ) : (
              <video
                loop
                muted
                autoPlay
                playsInline
                poster={slide.poster}
                className="w-full rounded-xl"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SingleSlideMediaCarousel;
