import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';
import { useTheme } from '@/data/providers/theme-mode-provider';
import cn from 'classnames';
import React from 'react';

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
  const { darkMode } = useTheme();
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
        className={cn(
          'rounded-md h-full p-xs',
          quantity === 1
            ? 'pointer-events-none opacity-75 bg-transparent'
            : 'bg-light-gray dark:bg-dark-gray hover:opacity-75'
        )}
      >
        <Minus
          fill={darkMode ? '#FFFFFFCC' : '#000000'}
          className={`${scaleDown ? 'size-[12px]' : 'size-[15px]'}`}
        />
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
        className={cn(
          'rounded-md h-full p-xs',
          quantity === maxQuantity
            ? 'pointer-events-none opacity-50 bg-transparent'
            : 'bg-light-gray dark:bg-dark-gray hover:opacity-75'
        )}
      >
        <Plus
          fill={darkMode ? '#FFFFFFCC' : '#000000'}
          className={`${scaleDown ? 'size-[12px]' : 'size-[15px]'}`}
        />
      </button>
    </div>
  );
};

export default QuantityInput;
