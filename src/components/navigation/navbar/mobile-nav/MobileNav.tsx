import { Button } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";


import MobileNavMenuButton from "@/components/buttons/mobile-nav-menu-button/MobileNavMenuButton";
import ThemeModeLogo from "@/components/theme-mode/theme-mode-logo/ThemeModeLogo";
import { useWindowDimensions } from "@/data/hooks";
import { PageRoutes } from "@/data/page-routes";
import { useTheme } from "@/data/providers/theme-mode-provider";
import { NavbarItem } from "@/data/types";
import LanguageSelector from "@/components/buttons/language-selector/LanguageSelector";
import DarkThemeToggler from "@/components/theme-mode/dark-theme-toggler/DarkThemeToggler";
import VerticalEllipsis from "@/components/icons/verticalEllipsis";
import { Link } from "@/data/services/i18n/navigation";

import MobileNavItem from "./mobile-nav-item/MobileNavItem";
import MobileNavItemWithDropdown from "./mobile-nav-item-with-dropdown/MobileNavItemWithDropdown";

interface MobileNavProps {
  menuOptions: NavbarItem[];
  pathname: string;
  changeColor: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  menuOptions,
  pathname,
  changeColor,
}) => {
  const { darkMode } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const [openNavSettings, setOpenNavSettings] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const main = document.getElementsByTagName("body");
    if (main && main[0]) {
      if (openNav || openNavSettings) {
        main[0].style.overflow = "hidden"; // stop body scroll on open nav
      } else {
        main[0].style.overflow = "auto";
      }
    }
  }, [openNav, openNavSettings]);
  return (
    <div
      className={`relative px-[20px] md:px-[50px] ${
        openNav || openNavSettings ? "h-screen overflow-hidden" : ""
      } ${
        changeColor
          ? `${darkMode ? "bg-[#1C1C1E]" : "bg-[rgba(255,255,255,0.98)]"}`
          : `${
              darkMode
                ? `${openNav || openNavSettings ? "bg-[#1C1C1E]" : ""}`
                : `${openNav || openNavSettings ? "bg-black/80 backdrop-blur-sm" : ""}`
            }`
      } transition-colors duration-700 lg:hidden max-w-screen-xl`}
    >
      <div className="py-3 flex items-end gap-lg justify-between">
        <Link href={PageRoutes.home}>
          <ThemeModeLogo
            changeColor={changeColor}
            className="w-full min-w-[140px] max-w-[140px]"
          />
        </Link>

        <div className="flex items-center gap-sm">
          <Button
            pill
            size="sm"
            className="px-xs"
            href={menuOptions[menuOptions.length - 1].link}
            onClick={() => {
              setOpenNav(false);
              setOpenNavSettings(false);
            }}
            color={changeColor ? "yellow" : "clear_white"}
          >
            <h5 className="uppercase">
              {menuOptions[menuOptions.length - 1].label}
            </h5>
          </Button>

          <MobileNavMenuButton
            navState={openNav}
            handleChange={() => {
              setOpenNavSettings(false);
              setOpenNav(!openNav);
            }}
            changeColor={changeColor}
          />

          <button
            onClick={() => {
              setOpenNav(false);
              setOpenNavSettings(!openNavSettings);
            }}
          >
            <VerticalEllipsis
              className={`size-[20px] ${changeColor ? "fill-black dark:fill-softWhite" : "fill-white dark:fill-softWhite"}`}
            />
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div
        ref={menuRef}
        style={{ height: openNav ? `${height}px` : "0px" }}
        className={`${
          openNav ? "overflow-y-scroll scrollbar-hide" : "overflow-hidden"
        } transition-all duration-700`}
      >
        <div className="pt-lg pb-[125px] flex flex-col gap-lg">
          {menuOptions.slice(0, menuOptions.length - 1).map((item) => (
            <React.Fragment key={`mobile-nav-item-${item.label}`}>
              {item.submenu && (
                <MobileNavItemWithDropdown
                  label={item.label}
                  submenu={item.submenu}
                  changeColor={changeColor}
                  pathname={pathname}
                  navState={openNav}
                  handleChange={() => setOpenNav(!openNav)}
                />
              )}

              {item.link && (
                <MobileNavItem
                  link={item.link}
                  label={item.label}
                  changeColor={changeColor}
                  onClick={() => setOpenNav(!openNav)}
                  active={pathname.includes(item.link)}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Settings Dropdown */}
      <div
        ref={settingsMenuRef}
        style={{ height: openNavSettings ? `${height}px` : "0px" }}
        className={`${
          openNavSettings
            ? "overflow-y-scroll scrollbar-hide"
            : "overflow-hidden"
        } transition-all duration-700`}
      >
        <div className="pt-lg pb-[125px] flex flex-col gap-lg">
          <div className="flex justify-between gap-sm">
            <h5
              className={`${
                changeColor
                  ? "text-black dark:text-softWhite"
                  : "text-white dark:text-softWhite"
              } whitespace-nowrap tracking-wider capitalize`}
            >
              Mode:
            </h5>
            <DarkThemeToggler changeColor={changeColor} />
          </div>
          <div className="flex justify-between gap-sm">
            <h5
              className={`${
                changeColor
                  ? "text-black dark:text-softWhite"
                  : "text-white dark:text-softWhite"
              } whitespace-nowrap tracking-wider capitalize`}
            >
              Language:
            </h5>
            <LanguageSelector changeColor={changeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
