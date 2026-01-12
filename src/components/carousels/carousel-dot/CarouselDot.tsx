import cn from 'classnames';
import React from 'react';

interface CarouselDotProps {
  onClick: () => void;
  active: boolean;
  blueDot?: boolean;
}

const CarouselDot: React.FC<CarouselDotProps> = ({ onClick, active, blueDot }) => (
  <button
    type="button"
    className={cn(
      'size-3.5 md:size-4 rounded-full border-2',
      active
        ? blueDot
          ? 'bg-light-navy/20 border-light-navy dark:bg-dark-navy/20 dark:border-dark-navy'
          : 'bg-brand-primary/20 border-brand-primary'
        : 'bg-light-gray/50 dark:bg-dark-gray/50 border-light-charcoal/50 dark:border-dark-charcoal/50'
    )}
    onClick={() => onClick()}
  />
);

export default CarouselDot;
