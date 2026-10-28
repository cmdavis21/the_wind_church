import { PageRoutes } from '@/data/page-routes';
import cn from 'classnames';
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

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
  const t = useTranslations('Ministries');

  return (
    <div className="relative sm:aspect-[3/1] rounded-xl p-lg sm:p-xxl">
      <Image
        fill
        src={image.src}
        className="object-cover rounded-xl"
        alt={image.alt?.trim() || t('card.alt', { ministryName: name })}
      />

      {/* Color Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

      <div
        className={cn(
          flip ? 'sm:items-start' : 'sm:items-end',
          'relative w-full h-full z-20 pt-7xl sm:pt-4xl',
          'flex flex-col justify-end gap-md text-white'
        )}
      >
        <h2>{name}</h2>
        <p className="body-large line-clamp-2 text-justify md:max-w-[50%]">{description}</p>
        <Button
          pill
          color="primary"
          className="w-full sm:max-w-[300px]"
          href={`${PageRoutes.ministries}/${slug}`}
        >
          {t('card.label')}
        </Button>
      </div>
    </div>
  );
};

export default MinistryCard;
