import React from 'react';

import Chevron from '@/components/icons/chevron';

interface CarouselArrowsProps {
  className?: string;
  leftArrowProps: {
    onClick: () => void;
    disable?: boolean;
    buttonClassName?: string;
    iconClassName?: string;
  };
  rightArrowProps: {
    onClick: () => void;
    disable?: boolean;
    buttonClassName?: string;
    iconClassName?: string;
  };
}

const CarouselArrows: React.FC<CarouselArrowsProps> = ({
  className,
  leftArrowProps,
  rightArrowProps,
}) => (
  <div className={`flex items-center justify-between gap-md ${className ?? ''}`}>
    <button
      onClick={leftArrowProps.onClick}
      className={`${leftArrowProps.buttonClassName ?? 'bg-black/40 p-sm'} rounded-full shadow-lg ${
        leftArrowProps.disable ? 'opacity-50 pointer-events-none cursor-default' : 'opacity-80'
      } transition-opacity duration-300`}
    >
      <Chevron
        className={`${leftArrowProps.iconClassName ?? 'fill-white size-[22px]'} -rotate-90`}
      />
    </button>

    <button
      onClick={rightArrowProps.onClick}
      className={`${rightArrowProps.buttonClassName ?? 'bg-black/40 p-sm'} rounded-full shadow-lg ${
        rightArrowProps.disable ? 'opacity-50 pointer-events-none cursor-default' : 'opacity-80'
      } transition-opacity duration-300`}
    >
      <Chevron
        className={`${rightArrowProps.iconClassName ?? 'fill-white size-[22px]'} rotate-90`}
      />
    </button>
  </div>
);

export default CarouselArrows;
