'use client';

import React, { useEffect, useState } from 'react';

import UpArrow from '@/components/icons/up-arrow';

interface PageScrollUpButtonProps {
  className?: string;
}

const PageScrollUpButton: React.FC<PageScrollUpButtonProps> = ({ className }) => {
  const [windowScroll, setWindowScroll] = useState(0);
  const [showPageScrollButton, setShowPageScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll >= 50) {
        setShowPageScrollButton(true);
      } else {
        setShowPageScrollButton(false);
      }
      setWindowScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowScroll]);

  return (
    <div
      className={`${className ?? ''} z-40 fixed bottom-2 md:bottom-5 right-2 md:right-5 ${
        showPageScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <button
        type="button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
        className="group size-12 rounded-full border hover:bg-light-gray dark:hover:bg-dark-gray flex justify-center items-center"
      >
        <UpArrow className="fill-light-charcoal group-hover:fill-black size-[25px]" />
      </button>
    </div>
  );
};

export default PageScrollUpButton;
