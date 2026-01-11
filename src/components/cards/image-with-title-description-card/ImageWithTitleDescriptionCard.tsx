import Image from 'next/image';
import React from 'react';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import UpArrow from '@/components/icons/up-arrow';

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
    <div className="flex flex-col gap-md dark:text-dark-primaryText h-full justify-between">
      <div className="flex flex-col gap-md">
        <h4 className="font-bold">{title}</h4>
        <p className="body-large text-light-charcoal dark:text-dark-primaryText">{description}</p>
      </div>
      {link && (
        <AnimativeFillButton link={link.href}>
          <div className="relative flex items-center gap-xxs py-xs px-md rounded-full group">
            {link.label}{' '}
            <UpArrow className="size-[15px] dark:fill-dark-primaryText rotate-45 group-hover:rotate-90 transition-all duration-300" />
          </div>
        </AnimativeFillButton>
      )}
    </div>
  </div>
);

export default ImageWithTitleDescriptionCard;
