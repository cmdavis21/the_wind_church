import Image from 'next/image';
import React from 'react';

import UpArrow from '@/components/icons/upArrow';
import Link from 'next/link';

interface ImageWithTitleDescriptionCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

const ImageWithTitleDescriptionCard: React.FC<ImageWithTitleDescriptionCardProps> = ({
  src,
  alt,
  title,
  description,
  link,
}) => (
  <div className="min-w-[200px] max-w-[325px] flex flex-col gap-lg">
    <div className="relative aspect-square">
      <Image fill src={src} alt={alt} className="pointer-events-none object-cover rounded-lg" />
    </div>
    <div className="flex flex-col gap-md dark:text-textInverse h-full justify-between">
      <div className="flex flex-col gap-md">
        <h4 className="font-bold">{title}</h4>
        <p className="body-large text-charcoal dark:text-textInverse">{description}</p>
      </div>
      {link && (
        <Link href={link.href}>
          <button type="button" className="relative group rounded-full w-fit">
            {/* decorative button fill */}
            <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
              <div className="flex items-center">
                <div className="w-0 h-[40px] bg-primary dark:bg-primaryDark group-hover:w-full transition-all duration-300 rounded-full" />
                <div className="w-full h-[40px] bg-lightGray/30 dark:bg-softGray/30 group-hover:w-0 transition-all duration-300 rounded-full" />
              </div>
            </div>
            <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
              {link.label}{' '}
              <UpArrow className="size-[15px] dark:fill-softWhite rotate-45 group-hover:rotate-90 transition-all duration-300" />
            </div>
          </button>
        </Link>
      )}
    </div>
  </div>
);

export default ImageWithTitleDescriptionCard;
