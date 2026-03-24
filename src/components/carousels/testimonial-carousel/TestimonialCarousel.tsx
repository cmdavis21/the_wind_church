'use client';

import { Testimonial } from '@/data/types';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import CarouselArrows from '../carousel-arrows/CarouselArrows';

interface TestimonialCarouselProps {
  slides: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle automatic slide transition
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loops to the first image
    }, 8000);
    // Cleanup the timeout on unmount or when the slide changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSlide, slides.length]);

  return (
    <div className="relative w-full md:h-[500px] overflow-hidden max-md:flex max-md:flex-col md:grid border rounded-2xl md:grid-cols-3">
      {/* visual */}
      <div className="relative w-full h-full md:col-span-1 max-md:aspect-square">
        {slides.map((slide, index) => (
          <div
            key={`carousel-visual-${slide.image.src}-${index}`}
            className={`absolute top-0 left-0 w-full h-full ${
              index === activeSlide ? 'fade-in' : 'fade-out opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                fill
                src={slide.image.src}
                alt={slide.image.alt ?? slide.first_name}
                className="object-cover object-center pointer-events-none"
              />
            </div>
          </div>
        ))}

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50" />

        {slides[activeSlide] && (
          <div className="absolute flex flex-col p-sm rounded-2xl border-[1.5px] border-brand-primary w-[calc(100%-32px)] h-[calc(100%-32px)] inset-4 justify-end">
            <h5 className="text-brand-primary font-bold">
              {slides[activeSlide].first_name} {slides[activeSlide].last_name}
            </h5>
            <h6 className="text-white">{slides[activeSlide].position}</h6>
          </div>
        )}
      </div>

      {/* content */}
      <div className="flex flex-col justify-between p-md md:px-xxl xl:px-4xl md:py-3xl gap-5 md:col-span-2">
        <div className="hidden lg:flex flex-wrap items-end gap-2">
          {slides.map((s, idx) => (
            <div
              key={`mini-profile-${s.first_name}`}
              className={`rounded-full ${activeSlide === idx ? 'size-11' : 'size-9'} border relative transition-[size] duration-200`}
            >
              <Image
                fill
                src={s.image.src}
                alt={`mini-profile-image-${s.first_name}`}
                className="object-cover object-center pointer-events-none rounded-full"
              />
            </div>
          ))}
        </div>

        {slides[activeSlide] && (
          <div className="flex flex-col gap-lg">
            <h3 className="font-bold max-lg:text-lg line-clamp-4">
              {slides[activeSlide].main_point}
            </h3>
            <h5 className="line-clamp-5">{slides[activeSlide].statement}</h5>
          </div>
        )}

        <div className="flex gap-5 justify-between items-center">
          <h6>
            {activeSlide + 1}/{slides.length}
          </h6>

          <CarouselArrows
            className="w-fit"
            leftArrowProps={{
              onClick: () => {
                if (activeSlide <= 0) {
                  setActiveSlide(slides.length - 1);
                } else setActiveSlide(activeSlide - 1);
              },
            }}
            rightArrowProps={{
              onClick: () => {
                if (activeSlide >= slides.length - 1) {
                  setActiveSlide(0);
                } else setActiveSlide(activeSlide + 1);
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
