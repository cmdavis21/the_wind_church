import UpArrow from '@/components/icons/upArrow';
import React from 'react';

interface AnimativeFillButtonProps {
  label: string;
  onClick: () => void;
}

const AnimativeFillButton: React.FC<AnimativeFillButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="relative group rounded-full w-fit">
      {/* decorative button fill */}
      <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
        <div className="flex items-center">
          <div className="w-0 h-[40px] bg-brand-primary group-hover:w-full transition-all duration-300 rounded-full" />
          <div className="w-full h-[40px] bg-light-gray/30 dark:bg-softGray/30 group-hover:w-0 transition-all duration-300 rounded-full" />
        </div>
      </div>
      <div className="relative flex items-center gap-xxs py-xs px-md rounded-full">
        {label}{' '}
        <UpArrow className="size-[15px] dark:fill-dark-primaryText rotate-45 group-hover:rotate-90 transition-all duration-300" />
      </div>
    </button>
  );
};

export default AnimativeFillButton;
