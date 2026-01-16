import Quote from '@/components/icons/quote';
import { useTheme } from '@/data/providers/theme-mode-provider';
import Image from 'next/image';
import React from 'react';

export interface TestimonialCardProps {
  src: string;
  name: string;
  position: string;
  statement: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ src, name, position, statement }) => {
  const { darkMode } = useTheme();
  return (
    <div className="text-left space-y-md max-w-[700px] h-full aspect-square md:aspect-auto p-lg bg-light-bg border border-light-gray dark:bg-dark-gray dark:border-dark-gray rounded-lg text-light-primaryText dark:text-dark-primaryText shadow">
      <div className="flex flex-row gap-sm items-center">
        <div className="relative">
          <Image
            width={60}
            height={60}
            src={src}
            alt={`Image of ${name}`}
            className="size-[60px] pointer-events-none object-cover rounded-full"
          />
          <div className="absolute right-0 -bottom-1 z-10">
            <Quote fill={darkMode ? '#fdd738' : '#334C91'} />
          </div>
        </div>
        <div>
          <h5 className="uppercase tracking-wide font-display text-dark-navy dark:text-brand-primary">
            {name}
          </h5>
          <h6>{position}</h6>
        </div>
      </div>
      <h5 className="italic line-clamp-4">{statement}</h5>
    </div>
  );
};

export default TestimonialCard;
