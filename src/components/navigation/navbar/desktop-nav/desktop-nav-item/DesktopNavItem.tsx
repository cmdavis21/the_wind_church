import React, { forwardRef } from 'react';

import Link from 'next/link';

interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  link?: string;
  active: boolean;
  changeColor: boolean;
}

const DesktopNavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  ({ label, link, active, changeColor }, ref) => {
    const Button: React.FC = () => (
      <button
        ref={ref}
        className="group flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer"
      >
        <h5
          className={`${
            changeColor ? 'text-black dark:text-softWhite' : 'text-white dark:text-softWhite'
          } whitespace-nowrap tracking-wider uppercase`}
        >
          {label}
        </h5>

        {/* Decorative underline */}
        <div className="flex justify-center items-center h-fit w-full px-sm">
          <div
            className={`h-[2px] bg-yellow dark:bg-softYellow w-1/2 transform origin-right scale-x-0 transition-[transform, scale] duration-500 group-hover:scale-x-100 group-focus:scale-x-100 ${active ? 'scale-x-100' : ''} rounded-l-full`}
          ></div>
          <div
            className={`h-[2px] bg-yellow dark:bg-softYellow w-1/2 transform origin-left scale-x-0 transition-[transform, scale] duration-500 group-hover:scale-x-100 group-focus:scale-x-100 ${active ? 'scale-x-100' : ''} rounded-r-full`}
          ></div>
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

DesktopNavItem.displayName = 'DesktopNavItem';

export default DesktopNavItem;
