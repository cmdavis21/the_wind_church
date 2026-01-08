import LanguageSelector from '@/components/buttons/language-selector/LanguageSelector';
import VerticalEllipsis from '@/components/icons/verticalEllipsis';
import DarkThemeToggler from '@/components/theme-mode/dark-theme-toggler/DarkThemeToggler';
import cn from 'classnames';
import React from 'react';

interface UserSettingsProps {
  changeColor: boolean;
}

const UserSettings: React.FC<UserSettingsProps> = ({ changeColor }) => {
  return (
    <div className="relative inline-block group">
      <button className="flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer">
        <VerticalEllipsis
          className={cn(changeColor ? 'fill-black dark:fill-white' : 'fill-white', 'size-[25px]')}
        />

        {/* Decorative underline */}
        <div className="flex justify-center items-center h-fit w-full px-xxs">
          <div
            className={`h-[2px] bg-brand-primary w-1/2 transform origin-right scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 group-hover:scale-x-100 rounded-l-full`}
          ></div>
          <div
            className={`h-[2px] bg-brand-primary w-1/2 transform origin-left scale-x-0 transition-[transform, scale] duration-500 group-focus:scale-x-100 group-hover:scale-x-100 rounded-r-full`}
          ></div>
        </div>
      </button>

      {/* SUBMENU */}
      <div className="h-0 pointer-events-none opacity-0 overflow-hidden group-hover:h-fit group-hover:pointer-events-auto group-hover:opacity-100 z-[9000] absolute pt-[15px] pb-2 w-fit left-1/2 -translate-x-1/2 transition-[opacity] duration-300">
        <div className="flex flex-col gap-xs">
          <div
            className={`relative group/sub border border-light-neutral dark:border-dark-gray shadow rounded-full py-xs px-md ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-dark-bg' : 'bg-light-bg dark:bg-dark-bg'}`}
          >
            <DarkThemeToggler changeColor={changeColor} />
          </div>
          <div
            className={`relative group/sub border border-light-neutral dark:border-dark-gray shadow rounded-full py-xs px-md ${changeColor ? 'bg-[rgba(255,255,255,0.98)] dark:bg-dark-bg' : 'bg-light-bg dark:bg-dark-bg'}`}
          >
            <LanguageSelector changeColor={changeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
