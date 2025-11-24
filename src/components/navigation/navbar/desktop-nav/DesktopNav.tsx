import React, { useState } from 'react';

import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';
import { PageRoutes } from '@/data/page-routes';
import { useTheme } from '@/data/providers/theme-mode-provider';
import { NavbarItem } from '@/data/types';

import NavbarButton from '@/components/buttons/navbar-button/NavbarButton';
import Link from 'next/link';
import DesktopNavItemWithDropdown from './desktop-nav-item-with-dropdown/DesktopNavItemWithDropdown';
import DesktopNavItem from './desktop-nav-item/DesktopNavItem';
import UserSettings from './user-settings/UserSettings';

interface DesktopNavProps {
  menuOptions: NavbarItem[];
  pathname: string;
  changeColor: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ menuOptions, pathname, changeColor }) => {
  const { darkMode } = useTheme();
  const [openNav, setOpenNav] = useState<number | null>(null);
  return (
    <div
      className={`w-full hidden lg:block ${
        changeColor
          ? `${darkMode ? 'bg-backgroundDark shadow-xl' : 'bg-[rgba(255,255,255,0.98)] shadow-sm'}`
          : 'bg-gradient-to-b from-black/40'
      } transition-[height, opacity] duration-500 rounded-b-lg`}
    >
      <div className="flex justify-between items-end gap-sm pt-3 pb-5 px-[20px] 2xl:px-[75px]">
        <Link href={PageRoutes.home}>
          <ThemeModeLogo changeColor={changeColor} className="w-full min-w-[150px] max-w-[150px]" />
        </Link>

        {menuOptions.slice(0, menuOptions.length - 1).map((item, index) => (
          <React.Fragment key={`mobile-nav-item-${item.label}`}>
            {item.submenu ? (
              <DesktopNavItemWithDropdown
                label={item.label}
                submenu={item.submenu}
                changeColor={changeColor}
                pathname={pathname}
                open={openNav === index}
                setOpen={(open) => {
                  if (open) {
                    setOpenNav(index);
                  } else setOpenNav(null);
                }}
              />
            ) : item.link ? (
              <DesktopNavItem
                link={item.link}
                label={item.label}
                changeColor={changeColor}
                active={pathname.includes(item.link)}
              />
            ) : (
              <div />
            )}
          </React.Fragment>
        ))}

        <div className="flex items-center justify-center gap-lg -mb-2">
          <NavbarButton
            label={menuOptions[menuOptions.length - 1].label}
            link={menuOptions[menuOptions.length - 1].link ?? '#'}
            activeNav={openNav !== null}
            changeColor={changeColor}
            onClick={() => setOpenNav(null)}
          />
          <UserSettings
            changeColor={changeColor}
            open={openNav === menuOptions.length + 1}
            setOpen={(open) => {
              if (open) {
                setOpenNav(menuOptions.length + 1);
              } else setOpenNav(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
