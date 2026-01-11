import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

interface AnimativeFillButtonProps {
  link?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const AnimativeFillButton: React.FC<AnimativeFillButtonProps> = ({
  link,
  onClick,
  className,
  children,
}) => {
  const Button = () => (
    <div
      className={cn(
        'relative group w-fit border border-light-neutral dark:border-dark-gray',
        'bg-light-bg dark:bg-dark-bg shadow rounded-full cursor-pointer',
        className
      )}
    >
      {/* sliding fill */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className={cn(
            'h-full rounded-full bg-brand-primary dark:bg-brand-dark',
            'transition-[width] duration-500 ease-out',
            'absolute right-0 origin-right',
            'w-0 group-hover:w-full'
          )}
        />
      </div>

      {/* content */}
      <div className="relative">{children}</div>
    </div>
  );

  return link ? (
    <Link href={link}>
      <Button />
    </Link>
  ) : onClick ? (
    <button type="button" onClick={onClick}>
      <Button />
    </button>
  ) : (
    <Button />
  );
};

export default AnimativeFillButton;
