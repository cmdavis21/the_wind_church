'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImageAndTextLinkCardProps {
  image: {
    src: string;
    alt: string;
  };
  text: string;
  link: string;
}

const ImageAndTextLinkCard: React.FC<ImageAndTextLinkCardProps> = ({ image, text, link }) => {
  return (
    <Link href={link} className="min-w-[200px] max-w-[400px] w-full">
      <div className="group relative aspect-square rounded-lg min-w-[200px] max-w-[400px] w-full cursor-pointer">
        <Image
          fill
          src={image.src}
          alt={image.alt}
          className="pointer-events-none object-cover rounded-lg"
        />

        {/* Color Overlay */}
        <div className="absolute w-full h-full rounded-lg grayscale group-hover:grayscale-0 group-hover:bg-gradient-to-t from-primary/40 from-5% via-black/30 via-30% to-black/60 to-90%" />

        <div
          className={`absolute top-0 left-0 w-full h-full rounded-lg flex flex-col items-center justify-center p-md`}
        >
          <div className="flex items-center justify-center gap-sm text-white">
            <h2>{text}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageAndTextLinkCard;
