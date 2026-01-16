import Image from 'next/image';
import React from 'react';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import UpArrow from '@/components/icons/up-arrow';
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
  <div className="min-w-7xl max-w-[325px] flex flex-col gap-lg">
    <div className="relative aspect-square">
      <Image fill src={src} alt={alt} className="pointer-events-none object-cover rounded-lg" />
    </div>
    <div className="flex flex-col gap-md dark:text-dark-primaryText h-full justify-between">
      <div className="flex flex-col gap-md">
        <h4 className="font-bold">{title}</h4>
        <p className="body-large text-light-charcoal dark:text-dark-primaryText">{description}</p>
      </div>
      {link && (
        <Link href={link.href}>
          <AnimativeFillButton>
            <div className="flex items-center gap-xxs group">
              {link.label}{' '}
              <UpArrow className="size-[18px] dark:fill-dark-primaryText rotate-45 group-hover:rotate-90 transition-all duration-300" />
            </div>
          </AnimativeFillButton>
        </Link>
      )}
    </div>
  </div>
);

export default ImageWithTitleDescriptionCard;
