'use client';

import SquarePlus from '@/components/icons/square-plus';
import { useWindowDimensions } from '@/data/hooks';
import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement, useState } from 'react';

interface ImageWithTitleAndHiddenTextCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string | ReactElement;
  description: string | ReactElement;
}

const ImageWithTitleAndHiddenTextCard: React.FC<ImageWithTitleAndHiddenTextCardProps> = ({
  image,
  title,
  description,
}) => {
  const { width } = useWindowDimensions();
  const [showText, setShowText] = useState(false);
  const handleCardClick = () => setShowText((prevState) => !prevState);
  return (
    <div
      onMouseOver={() => width >= 1024 && setShowText(true)}
      onMouseLeave={() => width >= 1024 && setShowText(false)}
      onClick={width < 1024 ? handleCardClick : undefined}
      className="relative aspect-square rounded-lg min-w-7xl max-w-[500px] w-full cursor-pointer"
    >
      <Image
        fill
        src={image.src}
        alt={image.alt}
        className="pointer-events-none object-cover rounded-lg"
      />

      {/* Color Overlay */}
      <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-brand-primary/40 from-5% via-black/30 via-30% to-black/60 to-90%" />

      {/* First Layer */}
      <div
        className={cn(
          showText ? 'opacity-0 pointer-events-none' : 'opacity-100',
          'transition-opacity duration-300 absolute top-0 left-0 w-full h-full rounded-lg flex flex-col items-center justify-center p-md'
        )}
      >
        <h2 className="text-white text-center">{title}</h2>
        <div className="pt-lg lg:pt-xl">
          <SquarePlus className="fill-white size-10" />
        </div>
      </div>

      {/* Second Layer */}
      <div
        className={cn(
          showText ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
          'transition-opacity duration-300 absolute top-0 left-0 w-full h-full rounded-lg flex flex-col items-center justify-center p-lg'
        )}
      >
        <div className="body-large overflow-scroll scrollbar-hide text-white text-center font-bold">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitleAndHiddenTextCard;
