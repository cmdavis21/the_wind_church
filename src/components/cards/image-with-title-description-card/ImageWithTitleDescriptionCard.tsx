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
  <div className="w-fit min-w-[300px] max-w-[325px] flex flex-col gap-lg">
    <Image
      width={100}
      height={100}
      src={src}
      alt={alt}
      className="pointer-events-none object-cover w-full min-w-[300px] max-w-[325px] aspect-square border rounded-lg"
    />

    <div className="flex flex-col gap-md dark:text-dark-primaryText justify-between h-full">
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
