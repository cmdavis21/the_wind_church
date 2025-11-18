'use client';

import React, { useEffect, useState } from 'react';

import UpArrow from '@/components/icons/upArrow';

import { PageRoutes } from '@/data/page-routes';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { NavbarColumnItem } from '@/data/types';
import Link from 'next/link';

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
      <button className="flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer">
        <h5
          className={`${
            changeColor ? 'text-black dark:text-textInverse' : 'text-white dark:text-textInverse'
          } whitespace-nowrap tracking-wider uppercase font-normal`}
        >
          {label}
        </h5>

        {/* Decorative underline */}
        <div className="flex justify-center items-center h-fit w-full px-sm">
          <div
            className={`h-[2px] bg-primary dark:bg-primaryDark w-1/2 transform origin-right scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 ${isActive || open ? 'scale-x-100' : 'group-hover:scale-x-100'} rounded-l-full`}
          ></div>
          <div
            className={`h-[2px] bg-primary dark:bg-primaryDark w-1/2 transform origin-left scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 ${isActive || open ? 'scale-x-100' : 'group-hover:scale-x-100'} rounded-r-full`}
          ></div>
        </div>
      </button>
      <div className="h-0 pointer-events-none opacity-0 overflow-hidden group-hover:h-fit group-hover:pointer-events-auto group-hover:opacity-100 z-[9000] absolute pt-[15px] w-fit left-1/2 -translate-x-1/2 transition-[opacity] duration-300">
        <div className="flex flex-col gap-xs">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                href={item.link}
                key={`desktop-submenu-nav-item-${item.label}-${item.link}`}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <div className="relative group/sub w-full border border-gray dark:border-grayDark shadow rounded-full max-w-[225px]">
                  {/* decorative button fill */}
                  <div
                    className={`absolute w-full h-full top-0 left-0 overflow-hidden rounded-full ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-backgroundDark' : 'bg-white dark:bg-gray'}`}
                  >
                    <div className="h-full flex items-center">
                      <div
                        className={`w-full h-[42px] rounded-full shadow-2xl  ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-backgroundDark' : 'bg-white dark:bg-gray'} ${pathname === item.link ? '!w-0' : 'group-hover/sub:w-0'} transition-all duration-500`}
                      />
                      <div
                        className={`w-0 h-[42px] rounded-full bg-primary dark:bg-primaryDark ${pathname === item.link ? 'w-full' : 'group-hover/sub:w-full'} transition-all duration-500`}
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
                    <div className="body-large capitalize whitespace-nowrap flex items-center">
                      {item.label}
                      {item.link === PageRoutes.cart && (
                        <span className="ml-1.5 body-small font-bold">
                          ({getCart?.totalQuantity} items)
                        </span>
                      )}
                    </div>

                    <div className="overflow-hidden relative min-w-[20px] min-h-[20px]">
                      <UpArrow
                        className={`${
                          pathname === item.link ? 'hidden' : 'block'
                        } dark:fill-textInverse absolute rotate-90 right-[20px] group-hover/sub:right-0 transition-all duration-500`}
                      />
                    </div>
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
