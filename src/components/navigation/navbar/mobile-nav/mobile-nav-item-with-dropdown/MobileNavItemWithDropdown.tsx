"use client";

import React, { useEffect, useRef, useState } from "react";


import { Link } from "@/data/services/i18n/navigation";
import { NavbarColumnItem } from "@/data/types";

import MobileNavItem from "../mobile-nav-item/MobileNavItem";

interface MobileNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem["submenu"];
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
  const [open, setOpen] = useState(false);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (
      Array.isArray(submenu) &&
      submenu.some((i) => pathname.includes(i.link))
    ) {
      setOpen(true);
    } else {
      if (!navState) setOpen(false);
    }
  }, [navState, pathname, submenu]);
  return (
    <div
      className={`${
        changeColor ? "text-black" : "text-white"
      } ${open ? `${changeColor ? "bg-lightGray/40 dark:bg-softGray" : "bg-charcoal/80 dark:bg-softGray"}` : `${changeColor ? "hover:bg-lightGray/50 hover:dark:bg-softGray" : "hover:bg-charcoal/80 hover:dark:bg-softGray"}`} rounded-lg p-sm transition-all duration-300 flex flex-col gap-sm`}
    >
      <MobileNavItem
        label={label}
        active={
          (Array.isArray(submenu) &&
            submenu.some((i) => pathname.includes(i.link))) ||
          open
        }
        changeColor={changeColor}
        onClick={() => setOpen(!open)}
      />

      <div
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : "0px",
        }}
        className={`${
          !open ? "pointer-events-none overflow-hidden opacity-0 -mb-sm" : ""
        } transition-[height, opacity] duration-300 mx-xs`}
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
                  className={`w-full p-sm body-large rounded-lg capitalize ${
                    pathname === item.link
                      ? `${changeColor ? "text-softYellow" : "text-yellow dark:text-softYellow"}`
                      : `${
                          changeColor
                            ? "text-black dark:text-softWhite hover:bg-lightGray/80"
                            : "text-white dark:text-softWhite hover:bg-charcoal"
                        }`
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItemWithDropdown;
