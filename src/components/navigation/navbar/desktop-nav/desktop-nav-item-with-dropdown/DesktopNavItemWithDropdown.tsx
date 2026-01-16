'use client';

import BagIcon from '@/components/icons/bag';
import { PageRoutes } from '@/data/page-routes';
import { useTheme } from '@/data/providers/theme-mode-provider';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { NavbarColumnItem } from '@/data/types';
import cn from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface DesktopNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem['submenu'];
  pathname: string;
  changeColor: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DesktopNavItemWithDropdown: React.FC<DesktopNavItemWithDropdownProps> = ({
  label,
  submenu,
  pathname,
  changeColor,
  open,
  setOpen,
}) => {
  const { darkMode } = useTheme();
  const { getCart } = useCartFunctions();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (submenu.find((s) => pathname.includes(s.link))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <div className="relative inline-block group">
      {/* CART QTY COUNT */}
      {submenu.find((s) => s.link === PageRoutes.cart) && getCart && getCart.total_quantity > 0 && (
        <div className="absolute z-10 top-1 -right-4 group-hover:opacity-0 pointer-events-none transition-opacity duration-150">
          <BagIcon
            width={15}
            height={15}
            count={getCart.total_quantity > 5 ? '5+' : getCart.total_quantity}
            fill={
              changeColor
                ? `${darkMode ? '#FFFFFFCC' : '#000000'}`
                : `${darkMode ? '#FFFFFFCC' : '#FFF'}`
            }
          />
        </div>
      )}

      {/* BUTTON LABEL */}
      <button className="flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer">
        <h5
          className={`${
            changeColor
              ? 'text-black dark:text-dark-primaryText'
              : 'text-white text-dark-primaryText'
          } whitespace-nowrap tracking-wider uppercase font-normal`}
        >
          {label}
        </h5>

        {/* Decorative underline */}
        <div className="flex justify-center items-center h-fit w-full px-sm">
          <div
            className={cn(
              isActive || open ? 'scale-x-100' : 'group-hover:scale-x-100',
              'h-[2px] bg-brand-primary w-1/2 transform origin-right scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 rounded-l-full'
            )}
          ></div>
          <div
            className={cn(
              isActive || open ? 'scale-x-100' : 'group-hover:scale-x-100',
              'h-[2px] bg-brand-primary w-1/2 transform origin-left scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 rounded-r-full'
            )}
          ></div>
        </div>
      </button>

      {/* SUBMENU */}
      <div className="h-0 pointer-events-none opacity-0 overflow-hidden group-hover:h-fit group-hover:pointer-events-auto group-hover:opacity-100 z-[9000] absolute pt-[15px] pb-2 w-fit left-1/2 -translate-x-1/2 transition-[opacity,height] duration-300">
        <div className="flex flex-col gap-xs">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                href={item.link}
                key={`desktop-submenu-nav-item-${item.label}-${item.link}`}
                onClick={() => setOpen(false)}
              >
                <div className="relative group/sub w-full border border-light-neutral dark:border-dark-gray bg-light-bg dark:bg-dark-bg shadow rounded-full">
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div
                      className={cn(
                        'h-full rounded-full bg-brand-primary dark:bg-brand-primary',
                        'transition-[width] duration-500 ease-out',
                        'absolute right-0 origin-right',
                        pathname === item.link ? 'w-full' : 'w-0 group-hover/sub:w-full'
                      )}
                    />
                  </div>

                  <div className="relative py-xs px-lg body-large capitalize whitespace-nowrap flex items-center">
                    {item.label}
                    {item.link === PageRoutes.cart && getCart && getCart.total_quantity > 0 && (
                      <span className="ml-1.5 body-small font-bold">
                        ({getCart.total_quantity} items)
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavItemWithDropdown;
