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
        className={`rounded-lg transition-all duration-300 ${link ? `p-sm w-full ${changeColor ? 'hover:bg-lightGray/50 hover:dark:bg-softGray' : 'hover:bg-charcoal/80 hover:dark:bg-softGray'}` : ''}`}
      >
        <div className="w-full flex items-center justify-between gap-md">
          <h5
            className={`${
              changeColor
                ? `${active ? 'text-softYellow' : 'text-black dark:text-textInverse'}`
                : `${active ? 'text-primary dark:text-primaryDark' : 'text-white dark:text-textInverse'}`
            } whitespace-nowrap tracking-wider capitalize`}
          >
            {label}
          </h5>
          {!link && (
            <Plus
              className={`size-[15px] ${active ? 'rotate-45' : ''} transition-all duration-300 ${
                changeColor
                  ? `${active ? 'fill-softYellow' : 'fill-black dark:fill-softWhite'}`
                  : `${active ? 'fill-yellow dark:fill-softYellow' : 'fill-softWhite'}`
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
