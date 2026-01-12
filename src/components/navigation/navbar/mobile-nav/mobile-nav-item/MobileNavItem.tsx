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
        className={`rounded-lg transition-colors duration-300 ${link ? `p-sm w-full ${changeColor ? 'hover:bg-light-gray/50 hover:dark:bg-dark-gray/80' : 'hover:bg-light-charcoal/80 hover:dark:bg-dark-gray/80'}` : ''}`}
      >
        <div className="w-full flex items-center justify-between gap-md">
          <h5
            className={`${
              changeColor
                ? `${active ? 'text-brand-primary' : 'text-black dark:text-dark-primaryText'}`
                : `${active ? 'text-brand-primary' : 'text-white dark:text-dark-primaryText'}`
            } whitespace-nowrap tracking-wider capitalize`}
          >
            {label}
          </h5>
          {!link && (
            <Plus
              className={`${active ? 'rotate-45' : ''} transition-all duration-300 ${
                changeColor
                  ? `${active ? 'fill-brand-primary' : 'fill-black dark:fill-dark-primaryText'}`
                  : `${active ? 'fill-brand-primary dark:fill-brand-primary' : 'fill-dark-primaryText'}`
              }`}
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
