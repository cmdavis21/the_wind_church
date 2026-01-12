import CornerButton from '@/components/buttons/corner-button/CornerButton';
import { formatPrice, Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
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
}) => (
  <Modal size="lg" dismissible={false} show={open} position="center" onClose={() => setOpen(false)}>
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
          <div className="grow y-scrollbox max-h-[300px] lg:max-h-[500px] divide-y divide-light-gray dark:divide-dark-gray scrollbar-hide">
            {cartLines.map((line) => (
              <div key={`single-product-page-mobile-${line.title}`} className="flex gap-md p-sm">
                <Image
                  width={60}
                  height={60}
                  src={line.image.src}
                  alt={line.image.alt}
                  className="object-cover min-w-[60px] size-[60px] object-top rounded-md"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">{line.title}</h6>
                  <p className="capitalize body-small">
                    <span className="text-light-charcoal dark:text-dark-charcoal">Price:</span>{' '}
                    {formatPrice(line.price)}
                  </p>
                  <p className="capitalize body-small">
                    <span className="text-light-charcoal dark:text-dark-charcoal">oty:</span>{' '}
                    {line.quantity}
                  </p>
                  {line.selectedOptions.map((opt) => (
                    <p className="capitalize body-small">
                      <span className="text-light-charcoal dark:text-dark-charcoal">
                        {opt.name}:
                      </span>{' '}
                      {opt.value}
                    </p>
                  ))}
                  <p className="capitalize body-small font-bold">
                    Total: {formatPrice(line.subtotal)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-md">
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

export default CartModal;
