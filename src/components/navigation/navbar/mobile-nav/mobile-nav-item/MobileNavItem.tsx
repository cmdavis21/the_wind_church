import cn from 'classnames';
import Link from 'next/link';
import React, { forwardRef } from 'react';

import Plus from '@/components/icons/plus';

interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  link?: string;
  active: boolean;
  changeColor: boolean;
}

const MobileNavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  ({ label, link, active, changeColor, ...rest }, ref) => {
    const Button: React.FC = () => (
      <button
        ref={ref}
        type="button"
        {...rest}
        className={cn('rounded-lg transition-colors duration-300', link && 'p-sm w-full')}
      >
        <div className="w-full flex items-center justify-between gap-md">
          <h5
            className={cn(
              'whitespace-nowrap tracking-wider capitalize',
              active ? 'text-brand-primary' : !changeColor && 'text-dark-primaryText'
            )}
          >
            {label}
          </h5>
          {!link && (
            <Plus
              className={cn(
                active ? 'rotate-45' : 'rotate-0',
                'transition-[rotate] duration-300',
                active
                  ? 'fill-brand-primary'
                  : `${changeColor ? 'fill-black dark:fill-dark-primaryText' : 'fill-dark-primaryText'}`
              )}
            />
          )}
        </div>
      </button>
    );

    return link ? (
      <Link href={link}>
        <Button />
      </Link>
    ) : (
      <Button />
    );
  }
);

MobileNavItem.displayName = 'MobileNavItem';

export default MobileNavItem;
