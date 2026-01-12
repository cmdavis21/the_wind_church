'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { findMediaType, MediaType } from '@/data/utils';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface FullscreenMediaWithSideTextCarouselProps {
  slides: {
    media: {
      src: string;
      alt: string;
      poster?: string;
    };
    title: string;
    description: string;
  }[];
}

const FullscreenMediaWithSideTextCarousel: React.FC<FullscreenMediaWithSideTextCarouselProps> = ({
  slides,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0);
  const carouselRef = useRef<Carousel | null>(null);
  const mobileCarouselRef = useRef<Carousel | null>(null);

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
      }}
      rightArrowProps={{
        onClick: () => next(),
      }}
    />
  );

  const MobileButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'absolute bottom-5 left-5 z-10',
        iconClassName: 'fill-brand-primary',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'absolute bottom-5 right-5 z-10',
        iconClassName: 'fill-brand-primary',
      }}
    />
  );

  const handleSlideChange = (...rest: any) => {
    const totalItems = slides.length;
    const carouselIndex = rest[1]?.currentSlide;
    // carouselState currentSlide is always 2 ahead of actual slide index b/c of carousel infinite attribute
    const logicalIndex = (carouselIndex - 2 + totalItems) % totalItems;
    setActiveSlide(logicalIndex);
    setMobileActiveSlide(logicalIndex);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block relative w-full h-screen">
        {/* images */}
        {slides.map((slide, index) => (
          <div
            key={`carousel-visual-${slide.media.src}-${index}`}
            className={`absolute top-0 left-0 w-full h-full ${
              index === activeSlide ? 'fade-in' : 'fade-out opacity-0'
            }`}
          >
            {findMediaType(slide.media.src) === MediaType.IMAGE ? (
              <div className="relative w-full h-full">
                <Image
                  src={slide.media.src}
                  alt={slide.media.alt}
                  fill
                  className="object-cover object-center pointer-events-none"
                />
              </div>
            ) : (
              <video loop autoPlay muted playsInline poster={slide.media.poster}>
                <source src={slide.media.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80" />

        <Carousel
          showDots
          infinite
          arrows={false}
          renderDotsOutside
          responsive={responsive}
          renderButtonGroupOutside
          renderArrowsWhenDisabled
          customDot={<CustomDot />}
          dotListClass="h-[60px] flex gap-xs justify-center items-center"
          afterChange={handleSlideChange}
          customButtonGroup={<ButtonGroup />}
          ref={(el: any) => (carouselRef.current = el)}
        >
          {slides.map((slide) => (
            <div
              key={`media-with-side-text-${slide.title}`}
              className="w-full 2xl:max-w-[70%] h-screen px-[150px] pb-[150px] flex flex-col gap-md justify-end text-white dark:text-dark-primaryText"
            >
              <h4>{slide.description}</h4>
              <div className="w-[100px] h-px bg-brand-primary rounded-sm" />
              <h1>{slide.title}</h1>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative w-full h-screen overflow-hidden">
        {/* images */}
        {slides.map((slide, mobileIndex) => (
          <div
            key={`carousel-mobile-visual-${slide.media.src}`}
            className={`absolute top-0 left-0 w-full h-full ${
              mobileActiveSlide === mobileIndex ? 'fade-in' : 'fade-out opacity-0'
            }`}
          >
            {findMediaType(slide.media.src) === MediaType.IMAGE ? (
              <div className="relative w-full h-full">
                <Image
                  src={slide.media.src}
                  alt={slide.media.alt}
                  fill
                  className="object-cover object-center pointer-events-none"
                />
              </div>
            ) : (
              <video loop autoPlay muted playsInline poster={slide.media.poster}>
                <source src={slide.media.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70" />

        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          responsive={responsive}
          customDot={<CustomDot />}
          afterChange={handleSlideChange}
          customButtonGroup={<MobileButtonGroup />}
          ref={(el: any) => (mobileCarouselRef.current = el)}
          dotListClass="h-[60px] flex gap-xs justify-center items-center"
        >
          {slides.map((slide) => (
            <div
              key={`mobile-media-with-side-text-${slide.title}`}
              className="relative h-screen w-full px-5 pb-[70px] flex flex-col items-center justify-end text-justify text-white dark:text-dark-primaryText gap-sm"
            >
              <p className="body-large">{slide.description}</p>
              <div className="w-[75px] h-px bg-brand-primary rounded-sm" />
              <h3>{slide.title}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default FullscreenMediaWithSideTextCarousel;
