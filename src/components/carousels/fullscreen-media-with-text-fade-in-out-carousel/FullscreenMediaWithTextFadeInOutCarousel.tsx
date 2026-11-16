'use client';

import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { findMediaType, MediaType } from '@/data/utils';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface Slide {
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
}

interface FullscreenMediaWithTextFadeInOutCarouselProps {
  slides: Slide[];
}

/**
 * Background media layer.
 * - Crossfade: the incoming slide fades in on top (z-10) while the outgoing slide stays
 *   fully opaque underneath, then drops out after the fade finishes. This avoids the dip to
 *   black you get when both layers fade at the same time.
 * - Slow zoom: the active slide eases from 1.06 -> 1 over the autoplay interval.
 */
const SlideVisual = ({ slide, active }: { slide: Slide; active: boolean }) => (
  <div
    className={cn(
      'absolute inset-0 transition-opacity motion-reduce:transition-none',
      active ? 'z-10 opacity-100 duration-1200 ease-smooth' : 'z-0 opacity-0 duration-0 delay-1200'
    )}
  >
    <div
      className={cn(
        'relative w-full h-full transition-transform motion-reduce:transition-none motion-reduce:scale-100',
        active ? 'scale-100 duration-8000 ease-out' : 'scale-[1.06] duration-0 delay-1200'
      )}
    >
      {findMediaType(slide.media.src) === MediaType.IMAGE ? (
        <Image
          fill
          src={slide.media.src}
          alt={slide.media.alt ?? slide.title}
          className="object-cover object-center pointer-events-none"
        />
      ) : (
        <video
          loop
          muted
          autoPlay
          playsInline
          poster={slide.media.poster}
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={slide.media.src} type="video/mp4" />
        </video>
      )}
    </div>
  </div>
);

const FullscreenMediaWithTextFadeInOutCarousel: React.FC<
  FullscreenMediaWithTextFadeInOutCarouselProps
> = ({ slides }) => {
  const t = useTranslations('Ministries');

  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const notUsefulSlide =
    slides[0].media.poster === '/images/deep-dive/bible-study-video-poster.webp';

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
      }}
      rightArrowProps={{
        onClick: () => {
          next();
          if (mobileActiveSlide >= slides.length - 1) {
            setMobileActiveSlide(0);
          } else setMobileActiveSlide(mobileActiveSlide + 1);
        },
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
        {/* visual (isolate keeps the layers' z-index from leaking above the overlays) */}
        <div className="absolute inset-0 isolate">
          {slides.map((slide, index) => (
            <SlideVisual
              key={`carousel-visual-${slide.media.src}-${index}`}
              slide={slide}
              active={index === activeSlide}
            />
          ))}
        </div>

        {/* Color Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70" />

        {/* Content */}
        {slides.map((slide, index) => {
          const active = index === activeSlide;

          // Staggered reveal: each line fades/rises in after the previous slide's text has left.
          // Exit is quick (300ms, no delay) so old and new text never overlap.
          const reveal = (order: number, extraClass?: string) => ({
            className: cn(
              extraClass,
              'transition-[opacity,transform] motion-reduce:transition-none motion-reduce:translate-y-0',
              active
                ? 'opacity-100 translate-y-0 duration-700 ease-out-expo'
                : 'opacity-0 translate-y-4 duration-300 ease-in'
            ),
            style: { transitionDelay: active ? `${350 + order * 100}ms` : '0ms' },
          });

          return (
            <div
              key={`carousel-content-${slide.title}`}
              className={cn(
                'w-full lg:max-w-[55%] lg:pl-6xl min-[1800px]:pl-[250px] h-full absolute top-0 left-0',
                'flex items-center transition-[visibility]',
                // `invisible` (after the exit) also removes hidden slides from tab order / pointer events
                active ? 'visible' : 'invisible duration-300'
              )}
            >
              <div className="flex flex-col gap-md text-white dark:text-dark-primaryText">
                <h5 {...reveal(0)}>{slide.header}</h5>
                {slide.subtitle && (
                  <h3 {...reveal(1, 'text-brand-primary line-clamp-1')}>{slide.subtitle}</h3>
                )}
                <h1 {...reveal(2, 'leading-none')}>{slide.title}</h1>
                <div className="min-h-4xl">
                  {slide.description && (
                    <p {...reveal(3, cn('body-large', !notUsefulSlide && 'line-clamp-3'))}>
                      {slide.description}
                    </p>
                  )}
                </div>
                <Link href={slide.link} {...reveal(4)}>
                  <Button pill color="primary" className="w-7xl">
                    {t('card.label')}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}

        {/* Dots */}
        <div className="absolute bottom-5 w-full">
          <div className="justify-center flex items-center gap-xs">
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
        </div>

        {/* Arrows */}
        <CarouselArrows
          leftArrowProps={{
            onClick: () => {
              if (activeSlide <= 0) {
                setActiveSlide(slides.length - 1);
              } else setActiveSlide(activeSlide - 1);
            },
            buttonClassName: 'absolute left-xxl min-[1800px]:left-4xl top-[50%] -translate-y-[50%]',
          }}
          rightArrowProps={{
            onClick: () => {
              if (activeSlide >= slides.length - 1) {
                setActiveSlide(0);
              } else setActiveSlide(activeSlide + 1);
            },
            buttonClassName:
              'absolute right-xxl min-[1800px]:right-4xl top-[50%] -translate-y-[50%]',
          }}
        />
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full h-screen overflow-hidden">
        {/* visual */}
        <div className="absolute inset-0 isolate">
          {slides.map((slide, mobileIndex) => (
            <SlideVisual
              key={`carousel-visual-mobile-${slide.media.src}-${mobileIndex}`}
              slide={slide}
              active={mobileActiveSlide === mobileIndex}
            />
          ))}
        </div>

        {/* Color Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 via-black/80 to-black/10" />

        <Carousel
          infinite
          showDots
          swipeable
          arrows={false}
          responsive={responsive}
          transitionDuration={700}
          customTransition="transform 700ms cubic-bezier(0.22, 1, 0.36, 1)"
          customDot={<CustomDot />}
          customButtonGroup={<MobileButtonGroup />}
          dotListClass="h-xxl flex gap-xs justify-center items-center"
        >
          {slides.map((slide) => (
            <div
              key={`carousel-mobile-content-${slide.title}-${slide.description}`}
              className="relative h-screen w-full px-xxl sm:px-4xl"
            >
              <div className="relative flex flex-col h-full w-full items-center justify-center text-center text-white dark:text-dark-primaryText gap-sm">
                <h6 className="font-normal">{slide.header}</h6>
                {slide.subtitle && <h5 className="text-brand-primary">{slide.subtitle}</h5>}
                <h3 className="leading-none">{slide.title}</h3>
                {slide.description && (
                  <p className={cn(!notUsefulSlide && 'line-clamp-3')}>{slide.description}</p>
                )}
                <Link href={slide.link}>
                  <Button pill color="primary" size="sm" fullSized>
                    {t('card.label')}
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
