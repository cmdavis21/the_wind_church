import { Modal } from 'flowbite-react';
import Image from 'next/image';

import CircleX from '@/components/icons/circleX';

interface ImageModalProps {
  src: string;
  alt: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, open, setOpen }) => (
  <Modal
    size="6xl"
    dismissible
    show={open}
    position="center"
    onClose={() => setOpen(false)}
  >
    <Modal.Body className="p-0">
      <div className="relative rounded-lg">
        <button
          type="button"
          className="absolute z-10 top-2 right-2"
          onClick={() => setOpen(false)}
        >
          <CircleX className="fill-yellow size-[25px]" />
        </button>
        <div className="relative w-full aspect-video bg-black/80 rounded-lg">
          <Image
            fill
            alt={alt}
            src={src}
            className="object-contain rounded-lg pointer-events-none"
          />
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

export default ImageModal;
