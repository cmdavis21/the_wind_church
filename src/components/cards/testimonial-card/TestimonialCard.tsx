import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  src: string;
  name: string;
  statement: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ src, name, statement }) => {
  return (
    <div className="min-w-[200px] max-w-[300px] flex flex-col gap-lg">
      <div className="relative aspect-square rounded-full">
        <Image
          fill
          src={src}
          alt={`Image of ${name}`}
          className="pointer-events-none object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-md dark:text-dark-primaryText px-sm">
        <p className="body-large text-light-charcoal dark:text-dark-primaryText font-light italic">
          &quot;{statement}&quot;
        </p>
        <h5 className="italic text-right"> - {name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
