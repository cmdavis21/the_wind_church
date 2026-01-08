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
      className={`relative px-5 md:px-[50px] ${
        openNav || openNavSettings ? 'overflow-hidden' : 'rounded-b-lg'
      } ${
        changeColor
          ? `${darkMode ? 'bg-dark-bg' : 'bg-light-bg'} shadow-md`
          : `${
              darkMode
                ? `${openNav || openNavSettings ? 'bg-dark-bg' : ''}`
                : `${openNav || openNavSettings ? 'bg-dark-bg backdrop-blur-sm' : ''}`
            }`
      } transition-colors duration-500 block lg:hidden max-w-screen-xl`}
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

        <div className="flex items-center gap-xs">
          <NavbarButton
            forMobile
            label={menuOptions[menuOptions.length - 1].label}
            link={menuOptions[menuOptions.length - 1].link ?? '#'}
            onClick={() => setOpenNav(false)}
            changeColor={changeColor}
          />

          <button
            type="button"
            onClick={() => {
              setOpenNavSettings(false);
              setOpenNav(!openNav);
            }}
            className="ml-1 p-xs rounded-md"
          >
            <Plus
              className={`size-[25px] ${openNav ? 'rotate-45' : ''} transition-[rotate,fill] duration-300 ${
                changeColor
                  ? `${openNav ? 'fill-brand-primary' : 'fill-black dark:fill-dark-neutral'}`
                  : `${openNav ? 'fill-brand-primary dark:fill-brand-primary' : 'fill-dark-neutral'}`
              }`}
            />
          </button>

          <button
            onClick={() => {
              setOpenNav(false);
              setOpenNavSettings(!openNavSettings);
            }}
            className="p-xs rounded-md"
          >
            <VerticalEllipsis
              className={`size-[22px] transition-[fill] duration-300 ${
                changeColor
                  ? `${openNavSettings ? 'fill-brand-primary' : 'fill-black dark:fill-dark-neutral'}`
                  : `${openNavSettings ? 'fill-brand-primary dark:fill-brand-primary' : 'fill-dark-neutral'}`
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
        <div className="pt-lg pb-[125px] flex flex-col gap-lg y-scrollbox">
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
          openNavSettings ? 'overflow-y-scroll scrollbar-hide' : 'overflow-hidden'
        } ${openNav ? 'delay-300 duration-500 ease-out' : 'easie-in duration-500'} transition-[height]`}
      >
        <div className="pt-lg pb-[125px] flex flex-col gap-lg">
          <div className="flex justify-between gap-sm items-center">
            <h5
              className={`${
                changeColor
                  ? 'text-black dark:text-dark-primaryText'
                  : 'text-white dark:text-dark-primaryText'
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
                  ? 'text-black dark:text-dark-primaryText'
                  : 'text-white dark:text-dark-primaryText'
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
