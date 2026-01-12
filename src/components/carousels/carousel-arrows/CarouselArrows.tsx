import ChevronLeft from '@/components/icons/chevron-left';
import cn from 'classnames';
import React from 'react';

interface CarouselArrowsProps {
  className?: string;
  leftArrowProps: {
    onClick: () => void;
    disable?: boolean;
    buttonClassName?: string;
  };
  rightArrowProps: {
    onClick: () => void;
    disable?: boolean;
    buttonClassName?: string;
  };
}

const CarouselArrows: React.FC<CarouselArrowsProps> = ({
  className,
  leftArrowProps,
  rightArrowProps,
}) => (
  <div className={cn('flex items-center justify-between gap-md', className)}>
    <button
      type="button"
      onClick={leftArrowProps.onClick}
      className={cn(
        'rounded-full shadow-lg transition-opacity duration-300 bg-black/50 p-xs hover:opacity-50',
        leftArrowProps.disable ? 'opacity-50 pointer-events-none cursor-default' : 'opacity-80',
        leftArrowProps.buttonClassName
      )}
    >
      <ChevronLeft className="fill-white size-6 md:size-7" />
    </button>

    <button
      type="button"
      onClick={rightArrowProps.onClick}
      className={cn(
        'rounded-full shadow-lg transition-opacity duration-300 bg-black/50 p-xs hover:opacity-50',
        rightArrowProps.disable ? 'opacity-50 pointer-events-none cursor-default' : 'opacity-80',
        rightArrowProps.buttonClassName
      )}
    >
      <ChevronLeft className="rotate-180 fill-white size-6 md:size-7" />
    </button>
  </div>
);

export default CarouselArrows;
