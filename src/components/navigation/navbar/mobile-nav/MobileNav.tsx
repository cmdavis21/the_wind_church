import LanguageSelector from '@/components/buttons/language-selector/LanguageSelector';
import NavbarButton from '@/components/buttons/navbar-button/NavbarButton';
import Plus from '@/components/icons/plus';
import VerticalEllipsis from '@/components/icons/verticalEllipsis';
import DarkThemeToggler from '@/components/theme-mode/dark-theme-toggler/DarkThemeToggler';
import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';
import { useWindowDimensions } from '@/data/hooks';
import { PageRoutes } from '@/data/page-routes';
import { useTheme } from '@/data/providers/theme-mode-provider';
import { NavbarItem } from '@/data/types';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import MobileNavItemWithDropdown from './mobile-nav-item-with-dropdown/MobileNavItemWithDropdown';
import MobileNavItem from './mobile-nav-item/MobileNavItem';

interface MobileNavProps {
  menuOptions: NavbarItem[];
  pathname: string;
  changeColor: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ menuOptions, pathname, changeColor }) => {
  const { darkMode } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const [openNavSettings, setOpenNavSettings] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const settingsMenuRef = useRef<HTMLDivElement | null>(null);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const main = document.getElementsByTagName('body');
    if (main && main[0]) {
      if (openNav || openNavSettings) {
        main[0].style.overflow = 'hidden'; // stop body scroll on open nav
      } else {
        main[0].style.overflow = 'auto';
      }
    }
  }, [openNav, openNavSettings]);
  return (
    <div
      className={`relative px-[20px] md:px-[50px] ${
        openNav || openNavSettings ? 'overflow-hidden' : 'rounded-b-lg'
      } ${
        changeColor
          ? `${darkMode ? 'bg-[#1C1C1E]' : 'bg-[rgba(255,255,255,0.98)]'}`
          : `${
              darkMode
                ? `${openNav || openNavSettings ? 'bg-[#1C1C1E]' : ''}`
                : `${openNav || openNavSettings ? 'bg-black/80 backdrop-blur-sm' : ''}`
            }`
      } transition-colors duration-500 shadow-sm lg:hidden max-w-screen-xl`}
    >
      <div className="py-3 flex items-end gap-lg justify-between">
        <Link
          href={PageRoutes.home}
          onClick={() => {
            setOpenNav(false);
            setOpenNavSettings(false);
          }}
        >
          <ThemeModeLogo changeColor={changeColor} className="w-full min-w-[140px] max-w-[140px]" />
        </Link>

        <div className="flex items-center gap-sm">
          <NavbarButton
            forMobile
            label={menuOptions[menuOptions.length - 1].label}
            link={menuOptions[menuOptions.length - 1].link ?? '#'}
            activeNav={openNav}
            changeColor={changeColor}
            onClick={() => setOpenNav(false)}
          />

          <button
            type="button"
            onClick={() => {
              setOpenNavSettings(false);
              setOpenNav(!openNav);
            }}
            className="p-xs hover:opacity-75 hover:bg-gray/30 rounded-md"
          >
            <Plus
              className={`size-[25px] ${openNav ? 'rotate-45' : ''} transition-all duration-300 ${
                changeColor
                  ? `${openNav ? 'fill-primaryDark' : 'fill-black dark:fill-textInverse'}`
                  : `${openNav ? 'fill-primary dark:fill-primaryDark' : 'fill-textInverse'}`
              }`}
            />
          </button>

          <button
            onClick={() => {
              setOpenNav(false);
              setOpenNavSettings(!openNavSettings);
            }}
            className="p-xs hover:opacity-75 hover:bg-gray/30 rounded-md"
          >
            <VerticalEllipsis
              className={`size-[22px] transition-all duration-300 ${
                changeColor
                  ? `${openNavSettings ? 'fill-primaryDark' : 'fill-black dark:fill-textInverse'}`
                  : `${openNavSettings ? 'fill-primary dark:fill-primaryDark' : 'fill-textInverse'}`
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div
        ref={menuRef}
        style={{ height: openNav ? `${height}px` : '0px' }}
        className={`${
          openNav ? 'overflow-y-scroll ease-in scrollbar-hide' : 'ease-out overflow-hidden'
        } transition-[height] duration-500 shadow-sm`}
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
        style={{ height: openNavSettings ? `${height}px` : '0px' }}
        className={`${
          openNavSettings ? 'overflow-y-scroll ease-in scrollbar-hide' : 'ease-out overflow-hidden'
        } ${openNav ? 'delay-500 duration-300' : 'duration-500'} transition-[height]`}
      >
        <div className="pt-lg pb-[125px] flex flex-col gap-lg">
          <div className="flex justify-between gap-sm items-center">
            <h5
              className={`${
                changeColor
                  ? 'text-black dark:text-textInverse'
                  : 'text-white dark:text-textInverse'
              } whitespace-nowrap tracking-wider capitalize`}
            >
              Light/Dark Mode:
            </h5>
            <DarkThemeToggler changeColor={changeColor} />
          </div>
          <div className="flex justify-between gap-sm items-center">
            <h5
              className={`${
                changeColor
                  ? 'text-black dark:text-textInverse'
                  : 'text-white dark:text-textInverse'
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
