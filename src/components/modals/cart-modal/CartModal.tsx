import CornerButton from '@/components/buttons/corner-button/CornerButton';
import LineItem from '@/components/cards/line-item/LineItem';
import { useScrollShadows } from '@/data/client/use-scroll-shadows';
import { Price } from '@/data/format-price';
import { PageRoutes } from '@/data/page-routes';
import { Button, Modal } from 'flowbite-react';
import { useTranslations } from 'next-intl';
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
    pickupOnly: boolean;
  }[];
}

const CartModal: React.FC<CartModalProps> = ({
  open,
  setOpen,
  hideSecondaryButton = false,
  cartQuantity,
  cartLines,
}) => {
  const t = useTranslations('Cart');

  useScrollShadows();

  return (
    <Modal
      size="lg"
      show={open}
      position="center"
      dismissible={false}
      onClose={() => setOpen(false)}
    >
      <Modal.Body className="p-0">
        <div className="relative rounded-lg">
          <CornerButton onClick={setOpen} className="absolute z-10 right-0 top-0" />
          <div className="relative w-full bg-white dark:bg-dark-bg rounded-lg p-lg flex flex-col gap-md">
            <h5>
              {t.rich('quantity', {
                bold: (chunks) => <span className="font-bold">{chunks}</span>,
                quantity: cartQuantity,
              })}
            </h5>

            {/* CART ITEMS */}
            <div className="grow y-scrollbox max-h-[350px] sm:max-h-[500px] flex flex-col gap-lg scrollbar-hide">
              {cartLines.map((line) => (
                <LineItem
                  key={`cart-page-desktop-${line.title}`}
                  title={line.title}
                  subtotal={line.subtotal}
                  quantity={line.quantity}
                  imageSrc={line.image.src}
                  pickupOnly={line.pickupOnly}
                  options={line.selectedOptions}
                />
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-md">
              <Link href={PageRoutes.cart} className="w-full">
                <Button
                  pill
                  fullSized
                  color="primary"
                  className="whitespace-nowrap"
                  onClick={() => setOpen(false)}
                >
                  {t('modal.go')}
                </Button>
              </Link>
              {!hideSecondaryButton && (
                <Link href={PageRoutes.bookstore} className="w-full">
                  <Button
                    pill
                    fullSized
                    color="info"
                    onClick={() => setOpen(false)}
                    className="max-md:!order-last whitespace-nowrap"
                  >
                    {t('modal.back')}
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
