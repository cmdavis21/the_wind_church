'use client';

import { RefObject, useEffect, useState } from 'react';

export const useHoneyPot = () => {
  const [inputValue, setInputValue] = useState('');
  const isBot = inputValue.trim().length > 0;
  return { isBot, setInputValue };
};

export interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

// Window Dimensions
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return windowDimensions;
};

// Resize Observer Hook
export const useResizeHeightObserver = (element: RefObject<HTMLDivElement | null>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (element.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setHeight(entry.contentRect.height));
      });

      resizeObserver.observe(element.current);

      return () => resizeObserver.disconnect();
    }
  }, [element]); // Re-run effect if the element changes

  return height;
};

// Open Window with searh query
export const openWindowWithQuery = (query: string) => {
  const newWindow = window.open('about:blank', '_blank');
  if (newWindow) {
    newWindow.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
};
