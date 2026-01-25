'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
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
  const mobileCarouselRef = useRef<Carousel | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  const MobileButtonGroup = ({ ...rest }: any) => {
    const {
      carouselState: { currentSlide, totalItems },
    } = rest;
    return (
      <CarouselArrows
        className="absolute -bottom-2 right-0 mr-5"
        leftArrowProps={{
          onClick: () => {
            if (currentSlide <= 0) {
              mobileCarouselRef.current?.goToSlide(totalItems.length - 1);
            } else {
              mobileCarouselRef.current?.goToSlide(currentSlide - 1);
            }
          },
        }}
        rightArrowProps={{
          onClick: () => {
            if (currentSlide >= totalItems.length - 1) {
              mobileCarouselRef.current?.goToSlide(0);
            } else {
              mobileCarouselRef.current?.goToSlide(currentSlide + 1);
            }
          },
        }}
      />
    );
  };

  const handleAfterChange = (currentSlide: number) => {
    // Stop all videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reset video to the start
        }
      }
    });

    // Stop all mobile videos
    mobileVideoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block relative">
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
          itemClass="px-md lg:px-xl"
          afterChange={handleAfterChange}
        >
          {slides.map((slide, index) => (
            <div
              key={`media-with-side-text-carousel-${slide.media.src}`}
              className="flex flex-col gap-lg"
            >
              {findMediaType(slide.media.src) === MediaType.IMAGE ? (
                <div className="relative aspect-[17/9] w-full min-w-7xl max-w-[1000px]">
                  <Image
                    src={slide.media.src}
                    alt={slide.media.alt}
                    fill
                    className="rounded-xl object-cover pointer-events-none"
                  />
                </div>
              ) : (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  muted
                  loop
                  playsInline
                  poster={slide.media.poster}
                  className="aspect-[17/9] w-full min-w-7xl max-w-[900px] rounded-xl object-cover pointer-events-none"
                >
                  <source src={slide.media.src} />
                </video>
              )}

              <div className="space-y-md">
                {slide.title && <h2>{slide.title}</h2>}
                {slide.description && <h5>{slide.description}</h5>}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="sm:hidden relative">
        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          itemClass="px-lg"
          containerClass="pb-xl"
          responsive={responsive}
          renderButtonGroupOutside
          customDot={<CustomDot />}
          customButtonGroup={<MobileButtonGroup />}
          dotListClass="flex gap-xs !justify-start !ml-5"
          ref={(el: any) => (mobileCarouselRef.current = el)}
          afterChange={handleAfterChange}
        >
          {slides.map((slide, index) => (
            <div
              key={`mobile-media-with-side-text-carousel-${slide.media.src}`}
              className="flex flex-col gap-lg"
            >
              {findMediaType(slide.media.src) === MediaType.IMAGE ? (
                <div className="relative aspect-[17/9] w-full min-w-7xl max-w-[900px]">
                  <Image
                    src={slide.media.src}
                    alt={slide.media.alt}
                    fill
                    className="rounded-xl object-cover pointer-events-none"
                  />
                </div>
              ) : (
                <video
                  ref={(el) => {
                    if (el) mobileVideoRefs.current[index] = el;
                  }}
                  muted
                  loop
                  playsInline
                  poster={slide.media.poster}
                  className="aspect-[17/9] w-full min-w-7xl max-w-[900px] rounded-xl object-cover pointer-events-none"
                >
                  <source src={slide.media.src} />
                </video>
              )}

              <div className="space-y-md">
                {slide.title && <h2>{slide.title}</h2>}
                {slide.description && <h5>{slide.description}</h5>}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CenterModeMediaWithTextCarousel;
