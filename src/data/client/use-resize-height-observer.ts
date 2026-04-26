import { RefObject, useEffect, useState } from 'react';

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
  }, [element]);

  return height;
};
