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
    <div className="text-left space-y-md max-w-[400px] h-full aspect-[1/1.1] p-lg md:p-md bg-light-bg border border-light-gray dark:bg-dark-gray dark:border-dark-gray rounded-lg text-light-primaryText dark:text-dark-primaryText shadow hover:shadow-lg transition-shadow duration-100 overflow-hidden">
      <Image
        width={65}
        height={65}
        src={src}
        alt={`Image of ${name}`}
        className="size-[65px] pointer-events-none object-cover rounded-full"
      />
      <div>
        <h5 className="uppercase tracking-wide font-display text-dark-navy pointer-events-none">
          {name}
        </h5>
        <h6 className="pointer-events-none">{position}</h6>
      </div>
      <h5 className="line-clamp-6 pointer-events-none">{statement}</h5>
    </div>
  );
};

export default TestimonialCard;
