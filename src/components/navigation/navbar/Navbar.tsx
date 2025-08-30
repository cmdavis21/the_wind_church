"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { usePathname } from "@/data/services/i18n/navigation";
import { NavbarColumnItem, NavbarItem } from "@/data/types";

import DesktopNav from "./desktop-nav/DesktopNav";
import MobileNav from "./mobile-nav/MobileNav";


const Navbar: React.FC<{ solidNav?: boolean }> = ({ solidNav = false }) => {
  const t = useTranslations("Navbar");
  const about: NavbarColumnItem = t.raw("about");
  const media: NavbarColumnItem = t.raw("media");
  const ministries: NavbarColumnItem = t.raw("ministries");
  const jesus: NavbarColumnItem = t.raw("jesus");
  const deepDive: NavbarColumnItem["submenu"][0] = t.raw("deepDive");
  const events: NavbarColumnItem["submenu"][0] = t.raw("events");
  const bookstore: NavbarColumnItem = t.raw("bookstore");
  const rental: NavbarColumnItem["submenu"][0] = t.raw("rental");
  const give: NavbarColumnItem["submenu"][0] = t.raw("give");
  const NavbarMenu: NavbarItem[] = [
    about,
    media,
    ministries,
    jesus,
    deepDive,
    events,
    bookstore,
    rental,
    give,
  ];

  const pathname = usePathname();
  const [windowScroll, setWindowScroll] = useState(0);
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);
  const [changeNavColor, setChangeNavColor] = useState(false);

  useEffect(() => {
    setShowNavOnScroll(true);
    if (window) {
      if (window.scrollY > 100) setChangeNavColor(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined) {
        const currentScroll = window.scrollY;

        if (currentScroll >= 50) {
          setChangeNavColor(true);
          setShowNavOnScroll(currentScroll < windowScroll);
        } else {
          setChangeNavColor(false);
          setShowNavOnScroll(true);
        }
        setWindowScroll(currentScroll);
      }
    };

    if (window !== undefined) {
      // window.addEventListener("load", handleScroll);
      window.addEventListener("scroll", handleScroll);

      return () => {
        // window.removeEventListener("load", handleScroll);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname, windowScroll]);

  return (
    <nav
      className={`fixed !z-50 left-0 ${
        showNavOnScroll ? "top-0 opacity-100" : "-top-[110px] opacity-0"
      } ${
        !solidNav && !changeNavColor ? "bg-gradient-to-b from-black/20" : ""
      } w-full transition-[colors, top, opacity] duration-500`}
    >
      <DesktopNav
        menuOptions={NavbarMenu}
        pathname={pathname}
        changeColor={solidNav ? true : changeNavColor}
      />

      <MobileNav
        menuOptions={NavbarMenu}
        pathname={pathname}
        changeColor={solidNav ? true : changeNavColor}
      />
    </nav>
  );
};

export default Navbar;
