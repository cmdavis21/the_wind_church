import { HamburgerButton } from '@/components/buttons/hamburger-button/HamburgerButton';
import LanguageSelector from '@/components/buttons/language-selector/LanguageSelector';
import NavbarButton from '@/components/buttons/navbar-button/NavbarButton';
import DarkThemeToggler from '@/components/theme-mode/dark-theme-toggler/DarkThemeToggler';
import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';
import { useWindowDimensions } from '@/data/client/use-window-dimensions';
import { PageRoutes } from '@/data/page-routes';
import { useTheme } from '@/data/providers/theme-mode-provider';
import { NavbarItem } from '@/data/types';
import cn from 'classnames';
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

  const [openNavMenu, setOpenNavMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = document.getElementsByTagName('body');
    if (main && main[0]) {
      if (openNavMenu) {
        main[0].style.overflow = 'hidden'; // stop body scroll on open nav
      } else {
        main[0].style.overflow = 'auto';
      }
    }
  }, [openNavMenu]);

  return (
    <div
      className={cn(
        openNavMenu ? 'overflow-hidden' : 'rounded-b-lg',
        changeColor
          ? `${darkMode ? 'bg-dark-bg/90' : 'bg-light-bg/90'} backdrop-blur-sm shadow-md`
          : openNavMenu && 'bg-dark-bg/90 backdrop-blur-sm',
        'relative px-lg md:px-xxl transition-colors duration-500 block lg:hidden max-w-screen-xl'
      )}
    >
      <div className="py-3 flex items-end gap-lg justify-between">
        <Link href={PageRoutes.home} onClick={() => setOpenNavMenu(false)}>
          <ThemeModeLogo changeColor={changeColor} />
        </Link>

        <div className="flex items-center gap-3">
          <NavbarButton
            forMobile
            label={menuOptions[menuOptions.length - 1].label}
            link={menuOptions[menuOptions.length - 1].link ?? '#'}
            onClick={() => setOpenNavMenu(false)}
            changeColor={changeColor}
          />
          <HamburgerButton
            isOpen={openNavMenu}
            onClick={() => setOpenNavMenu(!openNavMenu)}
            changeColor={changeColor}
          />
        </div>
      </div>

      {/* Menu Dropdown */}
      <div
        ref={menuRef}
        style={{ height: openNavMenu ? `${height}px` : '0px' }}
        className={cn(
          'transition-[height] duration-500 shadow-sm',
          openNavMenu ? 'y-scrollbox ease-in scrollbar-hide' : 'ease-out overflow-hidden'
        )}
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
                  isNavMenuOpen={openNavMenu}
                  onToggle={() => setOpenNavMenu(!openNavMenu)}
                />
              )}

              {item.link && (
                <MobileNavItem
                  link={item.link}
                  label={item.label}
                  changeColor={changeColor}
                  onClick={() => setOpenNavMenu(!openNavMenu)}
                  active={pathname.includes(item.link)}
                />
              )}
            </React.Fragment>
          ))}

          <div className="flex flex-wrap px-sm justify-between gap-lg pt-4xl">
            <DarkThemeToggler changeColor={changeColor} />
            <LanguageSelector changeColor={changeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
