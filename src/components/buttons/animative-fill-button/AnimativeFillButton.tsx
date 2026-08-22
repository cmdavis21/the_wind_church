'use client';
import cn from 'classnames';
import React, { forwardRef } from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariant = 'primary' | 'secondary' | 'teritiary';

interface AnimativeFillButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className'
> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-lg py-2.5 text-base',
  xl: 'px-6 py-3 text-lg',
};

const variantStyles: Record<
  ButtonVariant,
  {
    base: string;
    fill: string;
    text: string;
  }
> = {
  primary: {
    base: 'border border-light-neutral dark:border-dark-gray bg-light-bg dark:bg-dark-gray',
    fill: 'bg-brand-primary dark:bg-light-navy',
    text: 'text-light-primaryText dark:text-dark-primaryText',
  },
  secondary: {
    base: 'border border-[#051050] bg-gradient-to-br from-[#051050] to-[#334C91]',
    fill: 'bg-gradient-to-br from-[#334C91] to-[#4A63B8]',
    text: 'text-white',
  },
  teritiary: {
    base: 'border border-white/30 bg-white/10 backdrop-blur-sm',
    fill: 'bg-white/25',
    text: 'text-white',
  },
};

const AnimativeFillButton = forwardRef<HTMLButtonElement, AnimativeFillButtonProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      onClick,
      className,
      children,
      disabled,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const styles = variantStyles[variant];

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
        className={cn(
          'relative group w-fit rounded-full shadow',
          styles.base,
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
          className
        )}
        {...rest}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            aria-hidden="true"
            className={cn(
              'h-full rounded-full',
              styles.fill,
              'absolute right-0 origin-right w-0',
              !disabled && 'transition-[width] duration-500 ease-out group-hover:w-full',
              'motion-reduce:transition-none motion-reduce:group-hover:w-0'
            )}
          />
        </div>

        <div
          className={cn(
            'relative flex items-center justify-center gap-2 font-medium',
            sizeStyles[size],
            styles.text
          )}
        >
          {children}
        </div>
      </button>
    );
  }
);

AnimativeFillButton.displayName = 'AnimativeFillButton';

export default AnimativeFillButton;
