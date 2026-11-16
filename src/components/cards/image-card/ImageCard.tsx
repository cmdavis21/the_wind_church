'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import ImageModal from '../../modals/image-modal/ImageModal';

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ImageModal src={src} alt={alt} open={openModal} setOpen={setOpenModal} />
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="cursor-pointer relative aspect-[1/1.2] w-full max-w-[400px] rounded-lg group overflow-hidden"
      >
        <Image
          fill
          src={src}
          alt={alt}
          className="object-cover rounded-lg pointer-events-none transition-transform duration-300 will-change-transform lg:group-hover:scale-110"
        />
      </button>
    </>
  );
};

export default ImageCard;
