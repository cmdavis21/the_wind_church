import CornerButton from '@/components/buttons/corner-button/CornerButton';
import LineItem from '@/components/cards/line-item/LineItem';
import { useScrollShadows } from '@/data/client/use-scroll-shadows';
import { Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';

interface CartModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  hideSecondaryButton?: boolean;
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

const CartModal: React.FC<CartModalProps> = ({
  open,
  setOpen,
  hideSecondaryButton = false,
  cartQuantity,
  cartLines,
}) => {
  useScrollShadows();

  return (
    <Modal
      size="lg"
      dismissible={false}
      show={open}
      position="center"
      onClose={() => setOpen(false)}
    >
      <Modal.Body className="p-0">
        <div className="relative rounded-lg">
          <CornerButton onClick={setOpen} className="absolute z-10 right-0 top-0" />
          <div className="relative w-full bg-white dark:bg-dark-bg rounded-lg p-lg flex flex-col gap-md">
            <h5>
              You have{' '}
              <span className="font-bold">
                {cartQuantity} item{cartQuantity > 1 ? 's' : ''}
              </span>{' '}
              in the cart
            </h5>

            {/* CART ITEMS */}
            <div className="grow y-scrollbox max-h-[350px] sm:max-h-[500px] flex flex-col gap-lg scrollbar-hide">
              {cartLines.map((line) => (
                <LineItem
                  key={`cart-page-desktop-${line.title}`}
                  imageSrc={line.image.src}
                  title={line.title}
                  options={line.selectedOptions}
                  quantity={line.quantity}
                  subtotal={line.subtotal}
                />
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-md">
              <Link href={PageRoutes.cart} className="w-full">
                <Button
                  pill
                  color="primary"
                  fullSized
                  onClick={() => setOpen(false)}
                  className="whitespace-nowrap"
                >
                  Go to Cart
                </Button>
              </Link>
              {!hideSecondaryButton && (
                <Link href={PageRoutes.bookstore} className="w-full">
                  <Button
                    pill
                    color="info"
                    fullSized
                    onClick={() => setOpen(false)}
                    className="max-md:!order-last whitespace-nowrap"
                  >
                    Back to Bookstore
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
