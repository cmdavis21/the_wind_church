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
      className="absolute left-0 lg:px-5 top-[50%] -translate-y-[50%] w-full"
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: `p-xs lg:p-sm ${media.length === 1 ? 'hidden' : ''}`,
        iconClassName: 'md:size-[22px]',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: `p-xs lg:p-sm ${media.length === 1 ? 'hidden' : ''}`,
        iconClassName: 'md:size-[22px]',
      }}
    />
  );

  return (
    <div className="relative">
      <Carousel
        showDots
        infinite
        arrows={false}
        renderDotsOutside
        responsive={responsive}
        renderButtonGroupOutside
        renderArrowsWhenDisabled
        customDot={<CustomDot />}
        itemClass="w-full lg:h-full aspect-square border rounded-xl border-light-gray dark:border-dark-gray relative bg-white"
        dotListClass="h-[60px] flex gap-xs justify-center items-center"
        customButtonGroup={<ButtonGroup />}
      >
        {media.map((slide) => (
          <div key={`single-slide-media-carousel-${slide.src}`}>
            {findMediaType(slide.src) === MediaType.IMAGE ? (
              <Image
                fill
                src={slide.src}
                alt={slide.alt}
                className="object-contain object-center pointer-events-none w-full aspect-square rounded-xl"
              />
            ) : (
              <video
                loop
                muted
                autoPlay
                playsInline
                poster={slide.poster}
                className="w-full aspect-square rounded-xl"
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
