import React from 'react';

import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';

interface QuantityInputProps {
  maxQuantity: number;
  quantity: number;
  decrement: (quantity: number) => void;
  increment: (quantity: number) => void;
  scaleDown?: boolean;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  maxQuantity,
  quantity,
  decrement,
  increment,
  scaleDown,
}) => {
  return (
    <div className="p-xs rounded-md flex items-center gap-sm">
      <button
        onClick={() => {
          if (quantity === 1) {
            decrement(1);
          } else {
            decrement(quantity - 1);
          }
        }}
        className={`${quantity === 1 ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''} bg-skeletonGray dark:bg-skeletonDarkGray hover:opacity-75 rounded-sm h-full p-xs`}
      >
        <Minus className={`${scaleDown ? 'size-[12px]' : 'size-[15px]'}`} />
      </button>

      <p className="font-normal leading-none body-large pointer-events-none">{quantity}</p>

      <button
        onClick={() => {
          if (quantity === maxQuantity) {
            increment(maxQuantity);
          } else {
            increment(quantity + 1);
          }
        }}
        className={`${quantity === maxQuantity ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''} bg-skeletonGray dark:bg-skeletonDarkGray  hover:opacity-75 rounded-sm h-full p-xs`}
      >
        <Plus className={`${scaleDown ? 'size-[12px]' : 'size-[15px]'}`} />
      </button>
    </div>
  );
};

export default QuantityInput;
