import Minus from '@/components/icons/minus';
import Plus from '@/components/icons/plus';
import { useTheme } from '@/data/providers/theme-mode-provider';
import cn from 'classnames';
import React from 'react';

interface QuantityInputProps {
  size?: 'sm' | 'md';
  maxQuantity: number;
  quantity: number;
  decrement: (quantity: number) => void;
  increment: (quantity: number) => void;
  disabled?: boolean;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  size = 'md',
  maxQuantity,
  quantity,
  decrement,
  increment,
  disabled,
}) => {
  const { darkMode } = useTheme();
  return (
    <div className="p-xs rounded-sm flex items-center gap-md">
      <button
        disabled={disabled}
        onClick={() => {
          if (quantity === 1) {
            decrement(1);
          } else {
            decrement(quantity - 1);
          }
        }}
        className={cn(
          'rounded-sm h-full p-xs disabled:opacity-75',
          quantity === 1
            ? 'pointer-events-none opacity-75 bg-transparent'
            : 'bg-light-gray dark:bg-dark-gray hover:opacity-75'
        )}
      >
        <Minus
          fill={darkMode ? '#FFFFFFCC' : '#000000'}
          className={`${size === 'sm' ? 'size-[10px]' : 'size-[15px]'}`}
        />
      </button>

      <p
        className={cn(
          size === 'sm' ? 'body-small' : 'body-large',
          'font-normal leading-none pointer-events-none'
        )}
      >
        {quantity}
      </p>

      <button
        disabled={disabled}
        onClick={() => {
          if (quantity === maxQuantity) {
            increment(maxQuantity);
          } else {
            increment(quantity + 1);
          }
        }}
        className={cn(
          'rounded-sm h-full p-xs disabled:opacity-75',
          quantity === maxQuantity
            ? 'pointer-events-none opacity-50 bg-transparent'
            : 'bg-light-gray dark:bg-dark-gray hover:opacity-75'
        )}
      >
        <Plus
          fill={darkMode ? '#FFFFFFCC' : '#000000'}
          className={`${size === 'sm' ? 'size-[10px]' : 'size-[15px]'}`}
        />
      </button>
    </div>
  );
};

export default QuantityInput;
