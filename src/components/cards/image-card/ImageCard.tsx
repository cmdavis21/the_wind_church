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
      <button type="button" onClick={() => setOpenModal(true)} className="cursor-pointer">
        <div
          className={`relative aspect-square max-w-[350px] rounded-lg md:hover:scale-105 transition-scale duration-300`}
        >
          <Image fill src={src} alt={alt} className="object-cover rounded-lg pointer-events-none" />
        </div>
      </button>
    </>
  );
};

export default ImageCard;
