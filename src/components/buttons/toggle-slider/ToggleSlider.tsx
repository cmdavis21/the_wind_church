import React, { ReactElement, SVGAttributes, useEffect, useRef, useState } from 'react';

interface ToggleSliderProps {
  defaultSelect?: number;
  options: {
    label: string;
    icon?: React.FC<SVGAttributes<unknown>> | ReactElement;
    onSelect: () => void;
  }[];
}

const ToggleSlider: React.FC<ToggleSliderProps> = ({ defaultSelect, options }) => {
  const [active, setActive] = useState(defaultSelect ?? 0);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0, top: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update slider position and size
  useEffect(() => {
    if (buttonRefs.current[active] && containerRef.current) {
      const activeButton = buttonRefs.current[active]!;
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setSliderStyle({
        width: buttonRect.width,
        left: buttonRect.left - containerRect.left,
        top: buttonRect.top - containerRect.top,
      });
    }
  }, [active]);
  return (
    <div
      ref={containerRef}
      className="relative flex gap-md w-fit justify-center bg-lightGray/20 dark:bg-softGray rounded-full p-xs"
    >
      {/* Sliding background */}
      <div
        style={sliderStyle}
        className="absolute h-[calc(100%-16px)] bg-primary dark:bg-primaryDark shadow-md rounded-full transition-all duration-300"
      />

      {/* Options */}
      {options.map((opt, index) => (
        <button
          type="button"
          key={`toggle-slider-opt-${opt.label}`}
          ref={(el) => {
            if (el) {
              buttonRefs.current[index] = el;
            }
          }}
          onClick={() => {
            opt.onSelect();
            setActive(index);
          }}
          className={`min-w-[170px] 2xl:min-w-[180px] relative z-10 flex items-center justify-center gap-[10px] p-xs ${active === index ? 'text-black' : 'text-charcoal/80 dark:text-textInverse/50'} line-clamp-1 text-ellipsis rounded-full transition-all duration-300`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleSlider;
