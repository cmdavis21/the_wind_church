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
          ? 'bg-brand-navy/20 border-brand-navy'
          : 'bg-brand-primary/20 border-brand-primary'
        : 'bg-light-charcoal/50 dark:bg-dark-charcoal/50 border-light-charcoal dark:border-dark-charcoal'
    )}
    onClick={() => onClick()}
  />
);

export default CarouselDot;
