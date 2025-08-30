import React from 'react';

import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';

interface QuantityInputProps {
  quantity: number;
  decrement: () => void;
  increment: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  decrement,
  increment,
}) => (
  <div className="border border-lightGray dark:border-softCharcoal p-xs rounded-md flex items-center gap-sm w-fit">
    <button
      onClick={decrement}
      className="hover:bg-lightGray/30 rounded-sm h-full px-sm"
    >
      <Minus className="fill-yellow size-[15px]" />
    </button>

    <h4>{quantity}</h4>

    <button
      onClick={increment}
      className="hover:bg-lightGray/30 rounded-sm h-full px-sm"
    >
      <Plus className="fill-yellow size-[15px]" />
    </button>
  </div>
);

export default QuantityInput;
