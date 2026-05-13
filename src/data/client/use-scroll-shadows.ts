import { useEffect } from 'react';

export const useScrollShadows = (selector = '.y-scrollbox') => {
  useEffect(() => {
    const boxes = document.querySelectorAll<HTMLElement>(selector);

    const update = (el: HTMLElement) => {
      const maxScroll = el.scrollHeight - el.clientHeight;

      el.classList.toggle('has-bottom-shadow', el.scrollTop < maxScroll);
      el.classList.toggle('has-top-shadow', el.scrollTop > 0);
    };

    const attach = (el: HTMLElement) => {
      const handler = () => update(el);
      handler();
      el.addEventListener('scroll', handler);
      window.addEventListener('resize', handler);

      return () => {
        el.removeEventListener('scroll', handler);
        window.removeEventListener('resize', handler);
      };
    };

    const cleanups = Array.from(boxes).map(attach);

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);
};
