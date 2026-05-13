import QuantityInput from '@/components/forms/inputs/quantity-input/QuantityInput';
import Trash from '@/components/icons/trash';
import { useCart } from '@/data/client/shopify/use-cart';
import { formatPrice, Price } from '@/data/format-price';
import Image from 'next/image';

interface LineItemProps {
  id?: string;
  imageSrc: string;
  title: string;
  options: { name: string; value: string }[];
  quantity: number;
  subtotal: Price;
}

const LineItem: React.FC<LineItemProps> = ({
  id,
  imageSrc,
  title,
  options,
  quantity,
  subtotal,
}) => {
  const { cartLoading, updateCart, removeCartItems } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-lg justify-between p-md rounded-lg border border-light-gray dark:bg-dark-gray dark:border-dark-gray">
      <div className="relative flex gap-lg">
        <div className="relative">
          {!id && quantity > 1 && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 flex flex-row items-center justify-center rounded-lg">
              <h4 className="text-white font-bold">+{quantity}</h4>
            </div>
          )}
          <Image
            width={65}
            height={65}
            src={imageSrc}
            alt={`${title} Product Image`}
            className="object-cover size-[80px] aspect-square rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <h6 className="max-w-xs">{title}</h6>
          {options.length > 0 &&
            options.map((opt) => (
              <p
                key={opt.name}
                className="capitalize body-small text-light-secondaryText dark:text-dark-primaryText"
              >
                {opt.name}: {opt.value}
              </p>
            ))}
        </div>
      </div>

      {id && (
        <div className="flex flex-col justify-between gap-sm">
          <h4 className="text-right font-bold">{formatPrice(subtotal)}</h4>
          <div className="flex flex-row items-center gap-sm">
            <QuantityInput
              size="sm"
              maxQuantity={10}
              quantity={quantity}
              disabled={cartLoading}
              decrement={() => updateCart([{ quantity: quantity - 1, id: id as any }])}
              increment={() => updateCart([{ quantity: quantity + 1, id: id as any }])}
            />
            <button disabled={cartLoading} onClick={() => removeCartItems([id as any])}>
              <Trash fill="#D32F2F" className="size-[20px] hover:opacity-75" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LineItem;
