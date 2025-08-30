import React, { useRef, useState } from "react";

import LanguageSelector from "@/components/buttons/language-selector/LanguageSelector";
import VerticalEllipsis from "@/components/icons/verticalEllipsis";
import DarkThemeToggler from "@/components/theme-mode/dark-theme-toggler/DarkThemeToggler";
import { useWindowDimensions } from "@/data/hooks";

interface UserSettingsProps {
  changeColor: boolean;
}

const UserSettings: React.FC<UserSettingsProps> = ({ changeColor }) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const navItem = useRef<HTMLButtonElement | null>(null);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);

  return (
    <div
      onMouseOver={() => width >= 1024 && setOpen(true)}
      onMouseOut={() => width >= 1024 && setOpen(false)}
      onClick={() => {
        if (width < 1024) {
          return setOpen(!open);
        } else {
          return undefined;
        }
      }}
      className="relative overflow-visible"
    >
      <button
        type="button"
        ref={navItem}
        className="group flex flex-col items-center justify-center gap-[2px] hover:cursor-pointer"
      >
        <VerticalEllipsis
          className={`size-[25px] ${changeColor ? "fill-black dark:fill-softWhite" : "fill-white dark:fill-softWhite"}`}
        />
        <div
          className={`w-0 h-[2px] bg-yellow dark:bg-softYellow ${
            open ? "w-[60%]" : "group-hover:w-[60%]"
          } rounded-sm transition-[width] duration-300`}
        />
      </button>

      <div
        onMouseOut={() => setOpen(false)}
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : "0px",
        }}
        className={`absolute left-[50%] -translate-x-[50%] bottom-[${
          navItem.current?.getBoundingClientRect().bottom ?? 0
        }px] ${
          open ? "opacity-100" : "pointer-events-none overflow-hidden opacity-0"
        } transition-[height, opacity] duration-500`}
      >
        {/* Transparent spacer */}
        <div className="w-full h-[25px]" />

        <div className="px-xs">
          <div
            ref={subMenuDropdown}
            className="w-full flex flex-col gap-xs transition-colors duration-500"
          >
            <div
              className={`flex justify-center border border-lightGray dark:border-softGray ${
                changeColor
                  ? "bg-white dark:bg-softGray drop-shadow-xl shadow-2xl"
                  : "bg-[rgba(255,255,255,0.98)] dark:bg-softGray"
              } w-full max-w-[150px] rounded-full px-md py-xs`}
            >
              <DarkThemeToggler changeColor={changeColor} />
            </div>
            <div
              className={`flex justify-center border border-lightGray dark:border-softGray ${
                changeColor
                  ? "bg-white dark:bg-softGray drop-shadow-xl shadow-2xl"
                  : "bg-[rgba(255,255,255,0.98)] dark:bg-softGray"
              } w-full max-w-[150px] rounded-full px-md py-xs`}
            >
              <LanguageSelector changeColor={changeColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
