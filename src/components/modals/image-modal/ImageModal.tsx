import { Modal } from 'flowbite-react';
import Image from 'next/image';
import X from '@/components/icons/x';

interface ImageModalProps {
  src: string;
  alt: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, open, setOpen }) => (
  <Modal size="6xl" dismissible show={open} position="center" onClose={() => setOpen(false)}>
    <Modal.Body className="p-0">
      <div className="relative rounded-lg">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute z-10 right-0 top-0 p-xs hover:cursor-pointer bg-lightGray hover:bg-lightGray/80 rounded-bl-lg rounded-tr-lg"
        >
          <X />
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
