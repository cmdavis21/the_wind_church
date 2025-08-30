'use client';

import React, { useEffect, useState } from 'react';

interface MobileNavMenuButtonProps {
  navState: boolean;
  handleChange: (open: boolean) => void;
  changeColor: boolean;
}

const MobileNavMenuButton: React.FC<MobileNavMenuButtonProps> = ({
  navState,
  handleChange,
  changeColor,
}) => {
  useEffect(() => {
    if (!navState) setOpen(false);
  }, [navState]);

  const [open, setOpen] = useState(false);
  const toggleHandler = () => {
    const newOpen = !open;
    if (navState) {
    }
    setOpen(newOpen);
    handleChange(newOpen);
  };

  const Line = ({ className }: { className?: string }) => (
    <div
      className={`${className} w-[25px] h-[2.5px] rounded-full ${
        changeColor ? 'bg-black dark:bg-softWhite' : 'bg-white dark:bg-softWhite'
      } transition-all delay-75 ease-in duration-300`}
    />
  );

  return (
    <button
      type="button"
      onClick={() => toggleHandler()}
      className="min-w-[35px] min-h-[35px] flex items-center justify-center hover:opacity-75"
    >
      <div className={`${open ? 'rotate-90' : 'space-y-[5px]'} p-sm`}>
        <Line className={`${open ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-0'}`} />
        <Line className={`${open ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        <Line className={`${open ? 'rotate-45 -translate-y-1' : 'rotate-0 translate-y-0'}`} />
      </div>
    </button>
  );
};

export default MobileNavMenuButton;
