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
          <div className="relative group w-fit border max-lg:bg-primary max-lg:dark:bg-primaryDark border-gray dark:border-grayDark shadow rounded-full">
            {/* decorative button fill */}
            <div
              className={`hidden lg:block absolute w-full h-full top-0 left-0 overflow-hidden rounded-full bg-white dark:bg-grayDark`}
            >
              <div className="h-full flex items-center">
                <div
                  className={`w-full h-[42px] rounded-full shadow-2xl bg-white dark:bg-grayDark group-hover:w-0 transition-all duration-500`}
                />
                <div
                  className={`w-0 h-[42px] group-hover:w-full rounded-full bg-primary dark:bg-primaryDark transition-all duration-500`}
                />
              </div>
            </div>

            <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
              {link.label}{' '}
              <UpArrow className="size-[15px] dark:fill-textInverse rotate-45 group-hover:rotate-90 transition-all duration-300" />
            </div>
          </div>
        </Link>
      )}
    </div>
  </div>
);

export default ImageWithTitleDescriptionCard;
