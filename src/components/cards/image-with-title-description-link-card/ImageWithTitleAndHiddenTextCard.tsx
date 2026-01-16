'use client';

import UpArrow from '@/components/icons/up-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface ImageWithTitleDescriptionLinkCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string | ReactElement;
  description: string | ReactElement;
  link: string;
}

const ImageWithTitleDescriptionLinkCard: React.FC<ImageWithTitleDescriptionLinkCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <button
        type="button"
        className="relative aspect-[1/1.2] rounded-lg min-w-7xl max-w-[500px] w-full h-full cursor-pointer group overflow-hidden"
      >
        <Image
          fill
          src={image.src}
          alt={image.alt}
          className="pointer-events-none object-cover rounded-lg group-hover:scale-110 transition-all duration-300"
        />

        {/* Color Overlay */}
        <div className="absolute w-full h-full rounded-lg bg-gradient-to-b from-black/60 via-30% to-black/20 to-90%" />

        <div className="relative w-full h-full rounded-lg flex flex-col justify-between px-lg py-xl text-white dark:text-dark-primaryText">
          <div className="flex justify-between gap-5">
            <div className="flex flex-col items-start gap-xs">
              <h3 className="font-bold group-hover:text-brand-light transition-colors duration-300">
                {title}
              </h3>
              <h5 className="text-left">{description}</h5>
            </div>
            <div className="group-hover:bg-brand-primary/50 rounded-full size-12 min-w-12 flex items-center justify-center transition-colors duration-200">
              <UpArrow className="size-[30px] fill-white rotate-45 group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
          <div className="w-fit">
            <h5 className="font-bold text-left">Learn More</h5>
            <div className="w-0 group-hover:w-[99%] h-[2px] transition-[width] duration-300 bg-brand-primary rounded-full" />
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ImageWithTitleDescriptionLinkCard;
