import { Button } from 'flowbite-react';
import React, { useState } from 'react';

import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';
import { PageRoutes } from '@/data/page-routes';
import { useTheme } from '@/data/providers/theme-mode-provider';
import { NavbarItem } from '@/data/types';
import Link from 'next/link';

import UserSettings from './user-settings/UserSettings';
import DesktopNavItem from './desktop-nav-item/DesktopNavItem';
import DesktopNavItemWithDropdown from './desktop-nav-item-with-dropdown/DesktopNavItemWithDropdown';

interface DesktopNavProps {
  menuOptions: NavbarItem[];
  pathname: string;
  changeColor: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ menuOptions, pathname, changeColor }) => {
  const { darkMode } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const [hoveredDropdownIndex, setHoveredDropdownIndex] = useState<number | null>(null);
  return (
    <div
      className={`w-full hidden lg:block ${
        changeColor
          ? `${darkMode ? 'bg-[#1C1C1E]' : 'bg-[rgba(255,255,255,0.98)]'} shadow-sm`
          : 'bg-gradient-to-b from-black/40'
      } transition-[height, opacity] duration-500 rounded-b-lg`}
    >
      <div className="flex justify-between items-end gap-sm pt-3 pb-5 px-[20px] 2xl:px-[75px] min-[1800px]:px-[200px]">
        <Link href={PageRoutes.home}>
          <ThemeModeLogo changeColor={changeColor} className="w-full min-w-[150px] max-w-[150px]" />
        </Link>

        {menuOptions.slice(0, menuOptions.length - 1).map((item, index) => (
          <React.Fragment key={`desktop-nav-item-${item.label}`}>
            {item.submenu ? (
              <div
                onMouseEnter={() => setHoveredDropdownIndex(index)}
                onMouseOut={() => setHoveredDropdownIndex(null)}
              >
                <DesktopNavItemWithDropdown
                  label={item.label}
                  submenu={item.submenu}
                  pathname={pathname}
                  changeColor={changeColor}
                  open={hoveredDropdownIndex === index}
                  handleChange={() => setOpenNav(!openNav)}
                />
              </div>
            ) : (
              <DesktopNavItem
                link={item.link}
                label={item.label}
                changeColor={changeColor}
                active={pathname.includes(item.link!)}
              />
            )}
          </React.Fragment>
        ))}

        <div className="flex items-center justify-center gap-lg -mb-2">
          <Button
            pill
            className="px-sm"
            href={menuOptions[menuOptions.length - 1].link}
            color={changeColor ? 'yellow' : 'clear_white'}
          >
            <h5 className="uppercase">{menuOptions[menuOptions.length - 1].label}</h5>
          </Button>

          <UserSettings changeColor={changeColor} />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
