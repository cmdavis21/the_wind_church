'use client';

import React, { useEffect, useRef, useState } from 'react';

import DesktopNavItem from '../desktop-nav-item/DesktopNavItem';

import UpArrow from '@/components/icons/upArrow';
import Link from 'next/link';
import { NavbarColumnItem } from '@/data/types';
import { useCartFunctions } from '@/data/services/shopify/cart-hook';
import { PageRoutes } from '@/data/page-routes';

interface DesktopNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem['submenu'];
  pathname: string;
  changeColor: boolean;
  handleChange: () => void;
  open: boolean;
}

const DesktopNavItemWithDropdown: React.FC<DesktopNavItemWithDropdownProps> = ({
  label,
  submenu,
  pathname,
  changeColor,
  handleChange,
  open,
}) => {
  const { getCart } = useCartFunctions();
  const navItem = useRef<HTMLButtonElement | null>(null);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative overflow-visible group">
      {/* NAV ITEM */}
      {/* <DesktopNavItem
        ref={navItem}
        label={label}
        active={submenu.some((i) => pathname.includes(i.link)) || open}
        changeColor={changeColor}
      /> */}

      <button className="flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer">
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
            className={`h-[2px] bg-yellow dark:bg-softYellow w-1/2 transform origin-right scale-x-0 transition-[transform, scale] duration-500 group-hover:scale-x-100 ${open ? 'scale-x-100' : ''} rounded-l-full`}
          ></div>
          <div
            className={`h-[2px] bg-yellow dark:bg-softYellow w-1/2 transform origin-left scale-x-0 transition-[transform, scale] duration-500 group-hover:scale-x-100 ${open ? 'scale-x-100' : ''} rounded-r-full`}
          ></div>
        </div>
      </button>

      {/* MENU */}
      <div
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : '0px',
        }}
        className={`absolute left-[50%] mt-3 -translate-x-[50%] ${
          open ? 'opacity-100' : 'pointer-events-none overflow-hidden opacity-0'
        } transition-all ${open ? 'delay-75 duration-300' : 'duration-300'}`}
      >
        {/* Transparent spacer */}
        {/* <div className="w-full h-[25px] pointer-events-none" /> */}

        <div ref={subMenuDropdown} className="w-full flex flex-col gap-xs">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                href={item.link}
                key={`mobile-submenu-nav-item-${item.label}-${item.link}`}
                onClick={() => {
                  handleChange();
                }}
              >
                <button type="button" className="relative group w-full max-w-[225px]">
                  {/* decorative button fill */}
                  <div
                    className={`absolute w-full h-[40px] top-0 left-0 overflow-hidden rounded-full ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-softGray' : 'bg-white dark:bg-softGray'} drop-shadow-xl shadow-2xl`}
                  >
                    <div className="h-full flex items-center">
                      <div
                        className={`w-full h-[42px] rounded-full ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-softGray' : 'bg-white dark:bg-softGray'} ${pathname === item.link ? '!w-0' : 'group-hover:w-0'} transition-all duration-500`}
                      />
                      <div
                        className={`w-0 h-[42px] rounded-full bg-yellow dark:bg-softYellow ${pathname === item.link ? 'w-full' : 'group-hover:w-full'} transition-all duration-500`}
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
                    <div className="body-large capitalize whitespace-nowrap flex items-center">
                      {item.label}
                      {item.link === PageRoutes.cart && getCart && getCart.totalQuantity > 0 && (
                        <span className="text-xs pl-[4px]">({getCart.totalQuantity} items)</span>
                      )}
                    </div>

                    <div className="overflow-hidden relative min-w-[20px] min-h-[20px]">
                      <UpArrow
                        className={`${
                          pathname === item.link ? 'hidden' : 'block'
                        } dark:fill-softWhite absolute rotate-90 right-[20px] group-hover:right-0 transition-all duration-500`}
                      />
                    </div>
                  </div>
                </button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavItemWithDropdown;
