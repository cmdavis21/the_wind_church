'use client';

import { ToggleSwitch, useThemeMode } from 'flowbite-react';
import React from 'react';

import Moon from '@/components/icons/moon';
import Sun from '@/components/icons/sun';
import { useTheme } from '@/data/providers/theme-mode-provider';

interface DarkThemeTogglerProps {
  changeColor: boolean;
}

const DarkThemeToggler: React.FC<DarkThemeTogglerProps> = ({ changeColor }) => {
  const { darkMode } = useTheme();
  const { toggleMode } = useThemeMode();
  return (
    <div className="flex items-center gap-xs">
      <Sun
        className={`size-[18px] ${darkMode ? `${changeColor ? 'fill-dark-primaryText' : 'fill-light-primaryText'}` : `${changeColor ? 'fill-black' : 'fill-light-primaryText lg:fill-black'}`}`}
      />
      <ToggleSwitch color="primary" onChange={toggleMode} checked={darkMode} />
      <Moon
        className={`size-[18px] ${darkMode ? `${changeColor ? 'fill-dark-primaryText' : 'fill-light-primaryText'}` : `${changeColor ? 'fill-black' : 'fill-light-primaryText lg:fill-black'}`}`}
      />
    </div>
  );
};

export default DarkThemeToggler;
