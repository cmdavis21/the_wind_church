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
    return <CarouselDot onClick={onClick} active={active} blueDot={blueDots} />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className={`${slides.length <= 1 ? 'hidden' : ''} absolute bottom-3 right-3`}
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'bg-black/40 p-xs',
        iconClassName: 'fill-white size-[18px]',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'bg-black/40 p-xs',
        iconClassName: 'fill-white size-[18px]',
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
        customButtonGroup={<ButtonGroup />}
        className="bg-red-400"
        itemClass="max-w-fit bg-blue-400 relative grid grid-cols-1 place-items-center"
        dotListClass="flex gap-xs !justify-start !mb-5 !ml-5"
      >
        {slides.map((slide, index) => (
          <div key={`simple-carousel-${index}`} className="">
            {slide}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
