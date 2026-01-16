import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

import { PageRoutes } from '@/data/page-routes';

interface MinistryCardProps {
  name: string;
  description: string;
  slug: string;
  image: {
    src: string;
    alt: string;
  };
  flip?: boolean;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ name, description, slug, image, flip }) => {
  return (
    <div className={'relative md:aspect-[3/1] rounded-xl p-lg md:p-xxl'}>
      <Image
        fill
        src={image.src}
        alt={image.alt ?? `Image of ${name}`}
        className="object-cover rounded-xl"
      />

      {/* color overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

      <div
        className={`relative w-full h-full z-20 pt-7xl md:pt-4xl flex flex-col justify-end ${flip ? 'md:items-start' : 'md:items-end md:text-right'} gap-md text-white`}
      >
        <h2>{name}</h2>
        <div className="body-large line-clamp-2 md:max-w-[40%]">{description}</div>
        <Button
          pill
          color="primary"
          size="md"
          href={`${PageRoutes.ministries}/${slug}`}
          className="w-full md:max-w-[300px]"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default MinistryCard;
