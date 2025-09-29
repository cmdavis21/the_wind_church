'use client';

import React, { useRef, useState } from 'react';

import DesktopNavItem from '../desktop-nav-item/DesktopNavItem';

import UpArrow from '@/components/icons/upArrow';

import { NavbarColumnItem } from '@/data/types';
import Link from 'next/link';

interface DesktopNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem['submenu'];
  pathname: string;
  changeColor: boolean;
  handleChange: () => void;
}

const DesktopNavItemWithDropdown: React.FC<DesktopNavItemWithDropdownProps> = ({
  label,
  submenu,
  pathname,
  changeColor,
  handleChange,
}) => {
  const [open, setOpen] = useState(false);
  const navItem = useRef<HTMLButtonElement | null>(null);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);

  return (
    <div
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      className="relative overflow-visible"
    >
      {/* NAV ITEM */}
      <DesktopNavItem
        ref={navItem}
        label={label}
        active={(Array.isArray(submenu) && submenu.some((i) => pathname.includes(i.link))) || open}
        changeColor={changeColor}
      />

      {/* MENU */}
      <div
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : '0px',
        }}
        className={`absolute left-[50%] -translate-x-[50%] bottom-[${
          navItem.current?.getBoundingClientRect().bottom ?? 0
        }px] ${
          open ? 'opacity-100' : 'pointer-events-none overflow-hidden opacity-0'
        } transition-all ${open ? 'delay-75 duration-300' : 'duration-300'}`}
      >
        {/* Transparent spacer */}
        <div className="w-full h-[25px] pointer-events-none" />

        <div ref={subMenuDropdown} className="w-full flex flex-col gap-xs">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                href={item.link}
                key={`mobile-submenu-nav-item-${item.label}-${item.link}`}
                onClick={() => {
                  handleChange();
                  setOpen(false);
                }}
              >
                <button type="button" className="relative group w-full max-w-[225px]">
                  {/* decorative button fill */}
                  <div
                    className={`absolute w-full h-full top-0 left-0 overflow-hidden rounded-full ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-gray' : 'bg-white dark:bg-gray'} drop-shadow-xl shadow-2xl`}
                  >
                    <div className="h-full flex items-center">
                      <div
                        className={`w-full h-[42px] rounded-full ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-gray' : 'bg-white dark:bg-gray'} ${pathname === item.link ? '!w-0' : 'group-hover:w-0'} transition-all duration-500`}
                      />
                      <div
                        className={`w-0 h-[42px] rounded-full bg-primary dark:bg-primaryDark ${pathname === item.link ? 'w-full' : 'group-hover:w-full'} transition-all duration-500`}
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
                    <div className="body-large capitalize whitespace-nowrap">{item.label}</div>

                    <div className="overflow-hidden relative min-w-[20px] min-h-[20px]">
                      <UpArrow
                        className={`${
                          pathname === item.link ? 'hidden' : 'block'
                        } dark:fill-textInverse absolute rotate-90 right-[20px] group-hover:right-0 transition-all duration-500`}
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
