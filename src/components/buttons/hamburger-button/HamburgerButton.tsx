import React from 'react';

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  changeColor: boolean;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  changeColor,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className={`relative flex h-10 w-10 items-center justify-center ${
        changeColor
          ? `${isOpen ? 'text-brand-primary' : 'text-black dark:text-dark-neutral'}`
          : `${isOpen ? 'text-brand-primary dark:text-brand-primary' : 'text-dark-neutral'}`
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Top line */}
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          style={{
            transformOrigin: '12px 12px',
            transition: 'transform 200ms ease',
            transform: isOpen ? 'rotate(45deg)' : 'translateY(-5px) rotate(0deg)',
            borderRadius: 6,
          }}
        />

        {/* Bottom line */}
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          style={{
            transformOrigin: '12px 12px',
            transition: 'transform 200ms ease',
            transform: isOpen ? 'rotate(-45deg)' : 'translateY(5px) rotate(0deg)',
            borderRadius: 6,
          }}
        />

        {/* Middle line */}
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          style={{
            transition: 'opacity 150ms ease',
            opacity: isOpen ? 0 : 1,
            borderRadius: 6,
          }}
        />
      </svg>
    </button>
  );
};
