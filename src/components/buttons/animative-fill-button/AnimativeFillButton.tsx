import cn from 'classnames';
import React from 'react';

interface AnimativeFillButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const AnimativeFillButton: React.FC<AnimativeFillButtonProps> = ({
  size = 'md',
  onClick,
  className,
  children,
}) => {
  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-lg py-2.5 text-base',
    xl: 'px-6 py-3 text-lg',
  };

  return (
    <button type="button" onClick={onClick}>
      <div
        className={cn(
          'relative group w-fit border border-light-neutral dark:border-dark-gray',
          'bg-light-bg dark:bg-dark-gray shadow rounded-full cursor-pointer',
          className
        )}
      >
        {/* sliding fill */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            className={cn(
              'h-full rounded-full bg-brand-primary dark:bg-dark-navy',
              'transition-[width] duration-500 ease-out',
              'absolute right-0 origin-right',
              'w-0 group-hover:w-full'
            )}
          />
        </div>

        {/* content */}
        <div
          className={cn('relative text-light-primaryText dark:text-dark-primaryText', sizes[size])}
        >
          {children}
        </div>
      </div>
    </button>
  );
};

export default AnimativeFillButton;
