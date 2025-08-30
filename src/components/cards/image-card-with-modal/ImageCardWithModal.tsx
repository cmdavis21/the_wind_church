'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import ImageModal from '../../modals/image-modal/ImageModal';

interface ImageCardWithModalProps {
  src: string;
  alt: string;
  className: string;
}

const ImageCardWithModal: React.FC<ImageCardWithModalProps> = ({
  src,
  alt,
  className,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ImageModal src={src} alt={alt} open={openModal} setOpen={setOpenModal} />
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className={`${className} hover:cursor-pointer`}
      >
        <div
          className={`relative ${className} rounded-lg md:hover:scale-105 transition-scale duration-300`}
        >
          <Image
            fill
            src={src}
            alt={alt}
            className="object-cover rounded-lg pointer-events-none"
          />
        </div>
      </button>
    </>
  );
};

export default ImageCardWithModal;
