'use client';

import React, { useEffect, useRef, useState } from 'react';

import { PageRoutes } from '@/data/page-routes';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { NavbarColumnItem } from '@/data/types';
import cn from 'classnames';
import Link from 'next/link';
import MobileNavItem from '../mobile-nav-item/MobileNavItem';

interface MobileNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem['submenu'];
  changeColor: boolean;
  pathname: string;
  navState: boolean;
  handleChange: () => void;
}

const MobileNavItemWithDropdown: React.FC<MobileNavItemWithDropdownProps> = ({
  label,
  submenu,
  changeColor,
  pathname,
  navState,
  handleChange,
}) => {
  const { getCart } = useCartFunctions();

  const [open, setOpen] = useState(false);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (Array.isArray(submenu) && submenu.some((i) => pathname.includes(i.link))) {
      setOpen(true);
    } else {
      if (!navState) setOpen(false);
    }
  }, [navState, pathname, submenu]);

  return (
    <div
      className={cn(
        changeColor ? 'text-light-primaryText' : 'text-dark-primaryText',
        'rounded-lg p-sm transition-all duration-300 flex flex-col gap-sm',
        open
          ? changeColor
            ? 'bg-light-charcoal dark:bg-dark-gray'
            : 'bg-light-charcoal dark:bg-dark-neutral'
          : changeColor
            ? 'hover:bg-light-gray/50 hover:dark:bg-dark-gray/80'
            : 'hover:bg-light-charcoal/80 hover:dark:bg-dark-gray/80'
      )}
      // className={`${
      //   changeColor ? 'text-black' : 'text-white'
      // } ${open ? `${changeColor ? 'bg-light-gray/40 dark:bg-dark-gray/80' : 'bg-light-charcoal/80 dark:bg-dark-gray/80'}` : `${changeColor ? 'hover:bg-light-gray/50 hover:dark:bg-dark-gray/80' : 'hover:bg-light-charcoal/80 hover:dark:bg-dark-gray/80'}`} rounded-lg p-sm transition-all duration-300 flex flex-col gap-sm`}
    >
      <MobileNavItem
        label={label}
        active={(Array.isArray(submenu) && submenu.some((i) => pathname.includes(i.link))) || open}
        changeColor={changeColor}
        onClick={() => setOpen(!open)}
      />

      <div
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : '0px',
        }}
        className={`${
          !open ? 'pointer-events-none opacity-0 -mb-sm' : ''
        } transition-[height, opacity] duration-300 mx-xs overflow-hidden`}
      >
        <div ref={subMenuDropdown} className="flex flex-col gap-sm w-full">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                key={`mobile-submenu-nav-item-${item.label}-${item.link}`}
                href={item.link}
                onClick={() => {
                  handleChange();
                  setOpen(false);
                }}
              >
                <div
                  className={`w-full p-sm body-large rounded-lg capitalize flex items-center ${
                    pathname === item.link
                      ? 'font-semibold bg-light-gray/20'
                      : `${
                          changeColor
                            ? 'text-black dark:text-dark-primaryText dark:hover:text-dark-charcoal hover:bg-light-gray/80'
                            : 'text-white dark:text-dark-primaryText hover:bg-light-charcoal dark:hover:bg-dark-charcoal'
                        }`
                  }`}
                >
                  {item.label}
                  {item.link === PageRoutes.cart && getCart && getCart.total_quantity > 0 && (
                    <span className="ml-1.5 body-small font-bold">
                      ({getCart.total_quantity} items)
                    </span>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItemWithDropdown;
