import Image from 'next/image';
import React from 'react';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
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
  <div className="w-[325px] flex flex-col gap-lg">
    <div className="relative aspect-square border rounded-lg overflow-hidden">
      <Image fill src={src} alt={alt} className="pointer-events-none object-cover" />
    </div>
    <div className="flex flex-col gap-md dark:text-dark-primaryText justify-between">
      <div className="flex flex-col gap-md">
        <h4 className="font-bold">{title}</h4>
        <p className="body-large text-light-charcoal dark:text-dark-primaryText">{description}</p>
      </div>
      {link && (
        <Link href={link.href}>
          <AnimativeFillButton>{link.label}</AnimativeFillButton>
        </Link>
      )}
    </div>
  </div>
);

export default ImageWithTitleDescriptionCard;
