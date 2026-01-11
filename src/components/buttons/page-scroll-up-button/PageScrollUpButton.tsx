'use client';

import { Button } from 'flowbite-react';
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
      if (window !== undefined) {
        const currentScroll = window.scrollY;

        if (currentScroll >= 50) {
          setShowPageScrollButton(true);
        } else {
          setShowPageScrollButton(false);
        }
        setWindowScroll(currentScroll);
      }
    };

    if (window !== undefined) {
      // window.addEventListener("load", handleScroll);
      window.addEventListener('scroll', handleScroll);

      return () => {
        // window.removeEventListener("load", handleScroll);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [windowScroll]);
  return (
    <div
      className={`${className ?? ''} z-40 fixed bottom-2 md:bottom-5 right-2 md:right-5 ${
        showPageScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      <Button
        color="info"
        pill
        onClick={() => {
          if (window !== undefined) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }
        }}
        className="group py-[10px] max-md:scale-75"
      >
        <UpArrow className="fill-light-charcoal group-hover:fill-black size-[22px]" />
      </Button>
    </div>
  );
};

export default PageScrollUpButton;
