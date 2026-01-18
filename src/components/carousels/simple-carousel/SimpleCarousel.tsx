'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface SimpleCarouselProps {
  slides: React.ReactElement[];
  className?: string;
  showDots?: boolean;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ slides, className, showDots = true }) => {
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
      className={`${slides.length <= 1 ? 'hidden' : ''} absolute max-md:-bottom-3 right-1.5 md:left-0 md:top-[50%] md:-translate-y-[50%]`}
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  return (
    <div className={`${className ?? ''} relative`}>
      <Carousel
        infinite
        swipeable
        arrows={false}
        renderDotsOutside
        showDots={showDots}
        responsive={responsive}
        renderButtonGroupOutside
        customDot={<CustomDot />}
        customButtonGroup={<ButtonGroup />}
        containerClass="pb-xl"
        dotListClass="flex gap-xs !justify-start items-center"
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center px-[1px]">
            {slide}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
