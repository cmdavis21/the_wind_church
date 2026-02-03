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
      items: 3,
      partialVisibilityGutter: 1000,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 3,
      partialVisibilityGutter: 200,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return <CarouselDot onClick={onClick} active={active} blueDot />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute left-0 px-xxl lg:px-4xl min-[1800px]:px-7xl top-[50%] -translate-y-[50%] w-full"
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  const MobileButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      className="absolute -bottom-2.5 right-5"
      leftArrowProps={{ onClick: () => previous() }}
      rightArrowProps={{ onClick: () => next() }}
    />
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block relative">
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

      {/* Mobile */}
      <div className="md:hidden relative">
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
        >
          {testimonials.map((item) => (
            <TestimonialCard
              key={`testimonials-carousel-mobile-${item.name}`}
              src={item.src}
              name={item.name}
              position={item.position}
              statement={item.statement}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialCarousel;
