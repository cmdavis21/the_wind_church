import React from 'react';

interface CarouselDotProps {
  onClick: () => void;
  active: boolean;
  blueDot?: boolean;
}

const CarouselDot: React.FC<CarouselDotProps> = ({ onClick, active, blueDot }) => (
  <button
    type="button"
    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 ${active ? `${blueDot ? 'bg-navyLight/20 border-navyLight' : 'bg-primary/20 border-primary'}` : 'bg-gray/20 border-gray'}`}
    onClick={() => onClick()}
  />
);

export default CarouselDot;
