'use client';

import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { findMediaType, MediaType } from '@/data/utils';
import Link from 'next/link';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface FullscreenMediaWithTextFadeInOutCarouselProps {
  slides: {
    media: {
      src: string;
      alt?: string;
      poster?: string;
    };
    header: string;
    title: string;
    subtitle?: string;
    description?: string;
    link: string;
  }[];
}

const FullscreenMediaWithTextFadeInOutCarousel: React.FC<
  FullscreenMediaWithTextFadeInOutCarouselProps
> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle automatic slide transition
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loops to the first image
      setMobileActiveSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loops to the first image
    }, 8000);
    // Cleanup the timeout on unmount or when the slide changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSlide, mobileActiveSlide, slides.length]);

  // Mobile Configurations
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

  const MobileButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute left-2 right-2 top-[50%] -translate-y-[50%]"
      leftArrowProps={{
        onClick: () => {
          previous();
          if (mobileActiveSlide <= 0) {
            setMobileActiveSlide(slides.length - 1);
          } else setMobileActiveSlide(mobileActiveSlide - 1);
        },
        buttonClassName: 'bg-charcoal p-xs',
        iconClassName: 'fill-white size-[18px]',
      }}
      rightArrowProps={{
        onClick: () => {
          next();
          if (mobileActiveSlide >= slides.length - 1) {
            setMobileActiveSlide(0);
          } else setMobileActiveSlide(mobileActiveSlide + 1);
        },
        buttonClassName: 'bg-charcoal p-xs',
        iconClassName: 'fill-white size-[18px]',
      }}
    />
  );

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { index, active } = rest;
    return (
      <CarouselDot
        active={active}
        onClick={() => {
          onClick();
          setActiveSlide(index);
          setMobileActiveSlide(index);
        }}
      />
    );
  };

  return (
    <>
      {/* Desktop */}
      <div className="relative w-full h-screen overflow-hidden hidden lg:block">
        {/* visual */}
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
                  fill
                  src={slide.media.src}
                  alt={slide.media.alt ?? slide.title}
                  className="object-cover object-center pointer-events-none"
                />
              </div>
            ) : (
              <video
                loop
                muted
                autoPlay
                playsInline
                poster={slide.media.poster}
                className="object-cover object-center pointer-events-none"
              >
                <source src={slide.media.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70" />

        {/* content */}
        {slides.map((slide, index) => (
          <div
            key={`carousel-content-${slide.title}`}
            className={`w-full lg:max-w-[45%] lg:pl-[150px] min-[1800px]:pl-[250px] h-full absolute top-0 left-0 ${
              index === activeSlide ? 'fade-in' : 'opacity-0'
            } transition-opacity duration-300 flex items-center`}
          >
            <div className="flex flex-col gap-md text-white dark:text-textInverse">
              <h5>{slide.header}</h5>
              {slide.subtitle && <h3 className="text-primary line-clamp-1">{slide.subtitle}</h3>}
              <h1 className="leading-none">{slide.title}</h1>
              <div className="min-h-[100px]">
                {slide.description && (
                  <p className="body-large line-clamp-3">{slide.description}</p>
                )}
              </div>
              <Link href={slide.link}>
                <Button pill color="primary" className="w-[200px]">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-[50%] -translate-y-[50%] flex items-center gap-xs">
          {Array(slides.length)
            .fill(slides.length)
            .map((_, dotIndex) => (
              <CarouselDot
                key={`carousel-dot-${dotIndex}`}
                onClick={() => setActiveSlide(dotIndex)}
                active={activeSlide === dotIndex}
              />
            ))}
        </div>

        {/* Arrows */}
        <CarouselArrows
          className=""
          leftArrowProps={{
            onClick: () => {
              if (activeSlide <= 0) {
                setActiveSlide(slides.length - 1);
              } else setActiveSlide(activeSlide - 1);
            },
            buttonClassName:
              'bg-charcoal p-sm absolute left-[50px] min-[1800px]:left-[100px] top-[50%] -translate-y-[50%]',
            iconClassName: 'fill-white size-[25px]',
          }}
          rightArrowProps={{
            onClick: () => {
              if (activeSlide >= slides.length - 1) {
                setActiveSlide(0);
              } else setActiveSlide(activeSlide + 1);
            },
            buttonClassName:
              'bg-charcoal p-sm absolute right-[50px] min-[1800px]:right-[100px] top-[50%] -translate-y-[50%]',
            iconClassName: 'fill-white size-[25px]',
          }}
        />
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full h-screen overflow-hidden">
        {/* visual */}
        {slides.map((slide, mobileIndex) => (
          <div
            key={`carousel-visual-mobile-${slide.media.src}-${mobileIndex}`}
            className={`absolute top-0 left-0 w-full h-full ${
              mobileActiveSlide === mobileIndex ? 'fade-in' : 'fade-out opacity-0'
            }`}
          >
            {findMediaType(slide.media.src) === MediaType.IMAGE ? (
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={slide.media.src}
                  alt={slide.media.alt ?? slide.title}
                  className="object-cover object-center pointer-events-none"
                />
              </div>
            ) : (
              <video
                loop
                muted
                autoPlay
                playsInline
                poster={slide.media.poster}
                className="object-cover object-center pointer-events-none"
              >
                <source src={slide.media.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 via-black/80 to-black/10" />

        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          responsive={responsive}
          customDot={<CustomDot />}
          customButtonGroup={<MobileButtonGroup />}
          dotListClass="h-[50px] flex gap-xs justify-center items-center"
        >
          {slides.map((slide) => (
            <div
              key={`carousel-mobile-content-${slide.title}-${slide.description}`}
              className="relative h-screen w-full px-[50px]"
            >
              <div className="relative flex flex-col h-full w-full items-center justify-center text-center text-white dark:text-textInverse gap-sm">
                <h6 className="font-normal">{slide.header}</h6>
                {slide.subtitle && <h5 className="text-primary">{slide.subtitle}</h5>}
                <h3 className="leading-none">{slide.title}</h3>
                {slide.description && <p className="line-clamp-3">{slide.description}</p>}
                <Link href={slide.link}>
                  <Button pill color="primary" size="sm" fullSized>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default FullscreenMediaWithTextFadeInOutCarousel;
