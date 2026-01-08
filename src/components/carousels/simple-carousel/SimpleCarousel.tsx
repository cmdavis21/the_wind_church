'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface SimpleCarouselProps {
  slides: React.ReactElement[];
  className?: string;
  blueDots?: boolean;
  showDots?: boolean;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
  slides,
  className,
  blueDots,
  showDots = true,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
    return <CarouselDot onClick={onClick} active={active} blueDot={blueDots} />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className={`${slides.length <= 1 ? 'hidden' : ''} absolute max-sm:bottom-3 right-3 md:left-0 md:right-0 md:top-[50%] md:-translate-y-[50%]`}
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'p-xs',
        iconClassName: 'size-[25px]',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'p-xs',
        iconClassName: 'size-[25px]',
      }}
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
        itemClass="text-center"
        customButtonGroup={<ButtonGroup />}
        dotListClass="flex gap-xs max-sm:!justify-start max-sm:!mb-5 md:!-mb-5 max-sm:ml-5"
      >
        {slides.map((slide, index) => (
          <div key={`simple-carousel-${index}`}>{slide}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
