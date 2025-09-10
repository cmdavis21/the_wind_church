import React from 'react';

import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';

interface QuantityInputProps {
  minQuantity: number;
  maxQuantity: number;
  quantity: number;
  decrement: () => void;
  increment: () => void;
  scaleDown?: boolean;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  minQuantity,
  maxQuantity,
  quantity,
  decrement,
  increment,
  scaleDown,
}) => (
  <div className="border border-lightGray dark:border-softCharcoal p-xs rounded-md flex items-center gap-sm w-fit">
    <button
      onClick={decrement}
      className={`${quantity === minQuantity ? 'pointer-events-none opacity-50 curs' : ''} hover:bg-lightGray/30 rounded-sm h-full p-xs`}
    >
      <Minus className={`fill-yellow ${scaleDown ? 'size-[12px]' : 'size-[15px]'}`} />
    </button>

    {scaleDown ? <h6 className="font-normal leading-none">{quantity}</h6> : <h4>{quantity}</h4>}

    <button
      onClick={increment}
      className={`${quantity === maxQuantity ? 'pointer-events-none opacity-50 curs' : ''} hover:bg-lightGray/30 rounded-sm h-full p-xs`}
    >
      <Plus className={`fill-yellow ${scaleDown ? 'size-[12px]' : 'size-[15px]'}`} />
    </button>
  </div>
);

export default QuantityInput;
