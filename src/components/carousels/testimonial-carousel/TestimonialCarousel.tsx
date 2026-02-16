'use client';

import TestimonialCard, {
  TestimonialCardProps,
} from '@/components/cards/testimonial-card/TestimonialCard';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return <CarouselDot onClick={onClick} active={active} blueDot />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute left-0 sm:px-xxl lg:px-4xl min-[1800px]:px-7xl sm:top-[50%] sm:-translate-y-[50%] sm:w-full max-sm:-bottom-2.5 max-sm:right-5"
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  return (
    <div className="relative">
      <Carousel
        arrows={false}
        infinite
        showDots
        draggable
        swipeable
        centerMode
        containerClass="pb-xxl"
        responsive={responsive}
        renderButtonGroupOutside
        customDot={<CustomDot />}
        dotListClass="flex gap-xs"
        itemClass="p-md text-center"
        customButtonGroup={<ButtonGroup />}
      >
        {testimonials.map((item) => (
          <TestimonialCard
            key={`testimonials-carousel-${item.name}`}
            src={item.src}
            name={item.name}
            position={item.position}
            statement={item.statement}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
