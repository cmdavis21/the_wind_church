import CornerButton from '@/components/buttons/corner-button/CornerButton';
import { formatPrice, Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

interface CartModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  cartQuantity: number;
  cartLines: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    price: Price;
    quantity: number;
    subtotal: Price;
    selectedOptions: {
      name: string;
      value: string;
    }[];
  }[];
}

const CartModal: React.FC<CartModalProps> = ({ open, setOpen, cartQuantity, cartLines }) => (
  <Modal size="md" dismissible show={open} position="center" onClose={() => setOpen(false)}>
    <Modal.Body className="p-0">
      <div className="relative rounded-lg overflow-hidden">
        <CornerButton onClick={setOpen} className="absolute z-10 right-0 top-0" />
        <div className="relative w-full aspect-video bg-white dark:bg-backgroundDark rounded-lg p-lg flex flex-col gap-md overflow-hidden min-h-[80dvh] max-h-[80dvh]">
          <h5>
            You have{' '}
            <span className="font-bold">
              {cartQuantity} item{cartQuantity > 1 ? 's' : ''}
            </span>{' '}
            in the cart
          </h5>

          <hr className="text-gray dark:text-grayDark" />

          {/* CART ITEMS */}
          <div className="grow y-scrollbox divide-y divide-gray dark:divide-grayDark scrollbar-hide">
            {cartLines.map((line) => (
              <div key={`single-product-page-mobile-${line.title}`} className="flex gap-md p-sm">
                <div className="relative size-[80px]">
                  <Image
                    fill
                    src={line.image.src}
                    alt={line.image.alt}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <h6 className="font-normal">{line.title}</h6>
                  <p className="capitalize body-small">
                    <span className="font-bold">Price:</span> {formatPrice(line.price)}
                  </p>
                  <p className="capitalize body-small">
                    <span className="font-bold">Quantity:</span> {line.quantity}
                  </p>
                  <p className="capitalize body-small">
                    <span className="font-bold">Total:</span> {formatPrice(line.subtotal)}
                  </p>
                  {line.selectedOptions.map((opt) => (
                    <p className="capitalize body-small">
                      <span className="font-bold">{opt.name}:</span> {opt.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr className="text-gray dark:text-grayDark" />

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-md">
            <Link href={PageRoutes.cart} className="w-full">
              <Button
                color="primary"
                fullSized
                onClick={() => setOpen(false)}
                className="whitespace-nowrap"
              >
                Go to Cart
              </Button>
            </Link>
            <Link href={PageRoutes.bookstore} className="w-full">
              <Button
                color="ghost"
                fullSized
                onClick={() => setOpen(false)}
                className="max-md:!order-last whitespace-nowrap"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

export default CartModal;
