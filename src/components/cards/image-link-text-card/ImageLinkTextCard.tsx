'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import UpArrow from '@/components/icons/upArrow';
import { findMediaType, MediaType } from '@/data/utils';

interface ImageLinkTextCardProps {
  media: {
    src: string;
    alt?: string;
    poster?: string;
  };
  title: string;
  subtitle?: string;
  link: string;
  className?: string;
}

const ImageLinkTextCard: React.FC<ImageLinkTextCardProps> = ({
  media,
  title,
  subtitle,
  link,
  className,
}) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(link)}
      className={`relative group ${className ?? ''} w-full h-full rounded-xl hover:cursor-pointer`}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {findMediaType(media.src) === MediaType.IMAGE ? (
          <div className="relative w-full h-full">
            <Image
              fill
              src={media.src}
              alt={media.alt ?? 'decorative background'}
              className={'object-cover pointer-events-none rounded-xl'}
            />
          </div>
        ) : (
          <video
            loop
            muted
            autoPlay
            playsInline
            src={media.src}
            poster={media.poster}
            className={'rounded-xl w-full h-full object-cover pointer-events-none'}
          />
        )}
      </div>

      {/* color overlay */}
      <div
        className={'absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl'}
      />
      <div
        className={'absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl'}
      />

      <div className="relative text-white p-xl flex items-end justify-between gap-xl">
        <div className="pt-[100px] 2xl:pt-[200px] flex flex-col items-start text-left">
          <h3>{title}</h3>
          {subtitle && <p className="body-small italic">{subtitle}</p>}
        </div>
        <div className="bg-white rounded-full min-w-[50px] min-h-[50px] size-[50px] flex justify-center items-center group-hover:bg-primary">
          <UpArrow className="rotate-45 group-hover:rotate-90 transition-all duration-300" />
        </div>
      </div>
    </button>
  );
};

export default ImageLinkTextCard;
