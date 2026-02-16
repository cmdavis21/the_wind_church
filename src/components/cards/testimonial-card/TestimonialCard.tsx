import Image from 'next/image';
import React from 'react';

export interface TestimonialCardProps {
  src: string;
  name: string;
  position: string;
  statement: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ src, name, position, statement }) => {
  return (
    <div className="rounded-md border-2 border-x-0 border-t-0 border-dark-navy bg-white dark:bg-dark-gray p-xl h-full flex flex-col gap-lg hover:scale-105 hover:shadow-md transition=[scale,shadow] duration-300 max-w-[750px]">
      <div className="relative flex flex-col sm:flex-row items-center gap-md">
        <Image
          src={src}
          width={50}
          height={50}
          alt={`Image of ${name}`}
          className="size-xxl sm:size-3xl object-cover rounded-full"
        />
        <div className="flex flex-col items-start">
          <h4 className="font-display text-light-navy">{name}</h4>
          <h5>{position}</h5>
        </div>
      </div>
      <h4 className="line-clamp-4 text-center sm:text-left">{statement}</h4>
    </div>
  );
};

export default TestimonialCard;
