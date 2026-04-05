import { HamburgerButton } from '@/components/buttons/hamburger-button/HamburgerButton';
import LanguageSelector from '@/components/buttons/language-selector/LanguageSelector';
import NavbarButton from '@/components/buttons/navbar-button/NavbarButton';
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
  const { height } = useWindowDimensions();
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = document.getElementsByTagName('body');
    if (main && main[0]) {
      if (openNav) {
        main[0].style.overflow = 'hidden'; // stop body scroll on open nav
      } else {
        main[0].style.overflow = 'auto';
      }
    }
  }, [openNav]);

  return (
    <div
      className={`relative px-lg md:px-xxl ${openNav ? 'overflow-hidden' : 'rounded-b-lg'} ${
        changeColor
          ? `${darkMode ? 'bg-dark-bg' : 'bg-light-bg'} shadow-md`
          : `${
              darkMode
                ? `${openNav ? 'bg-dark-bg' : ''}`
                : `${openNav ? 'bg-dark-bg backdrop-blur-sm' : ''}`
            }`
      } transition-colors duration-500 block lg:hidden max-w-screen-xl`}
    >
      <div className="py-3 flex items-end gap-lg justify-between">
        <Link href={PageRoutes.home} onClick={() => setOpenNav(false)}>
          <ThemeModeLogo changeColor={changeColor} />
        </Link>

        <div className="flex items-center gap-1">
          <NavbarButton
            forMobile
            label={menuOptions[menuOptions.length - 1].label}
            link={menuOptions[menuOptions.length - 1].link ?? '#'}
            onClick={() => setOpenNav(false)}
            changeColor={changeColor}
          />
          <HamburgerButton
            isOpen={openNav}
            onClick={() => setOpenNav(!openNav)}
            changeColor={changeColor}
          />
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
        <div className="pt-lg pb-5xl flex flex-col gap-lg">
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

          <div className="flex flex-wrap px-sm justify-between gap-lg">
            <DarkThemeToggler changeColor={changeColor} />
            <LanguageSelector changeColor={changeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
