'use client';

import TestimonialCard, {
  TestimonialCardProps,
} from '@/components/cards/testimonial-card/TestimonialCard';
import { useTheme } from '@/data/providers/theme-mode-provider';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselDot from '../carousel-dot/CarouselDot';

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const { darkMode } = useTheme();
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
    return <CarouselDot blueDot={!darkMode} onClick={onClick} active={active} />;
  };

  const chunk = (arr: TestimonialCardProps[], size: number): TestimonialCardProps[][] =>
    arr.reduce<TestimonialCardProps[][]>((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const testimonialSlides = chunk(testimonials, 4);

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block relative">
        <Carousel
          infinite
          swipeable
          arrows={false}
          renderDotsOutside
          containerClass="pb-12"
          showDots={true}
          responsive={responsive}
          customDot={<CustomDot />}
          itemClass="text-center"
          autoPlay={true}
          autoPlaySpeed={3000}
          dotListClass="flex gap-xs"
        >
          {testimonialSlides.map((group, index) => (
            <div
              key={`desktop-slide-${index}`}
              className="grid grid-cols-2 gap-lg place-items-center"
            >
              {group.map((item) => (
                <TestimonialCard key={`testimonials-${item.name}`} {...item} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative">
        <Carousel
          infinite
          swipeable
          arrows={false}
          renderDotsOutside
          showDots={true}
          responsive={responsive}
          customDot={<CustomDot />}
          itemClass="text-center px-1"
          autoPlay={true}
          autoPlaySpeed={3000}
          dotListClass="flex gap-xs"
        >
          {testimonials.map((item) => (
            <div key={`mobile-slide-${item.name}`}>
              <TestimonialCard {...item} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialCarousel;
