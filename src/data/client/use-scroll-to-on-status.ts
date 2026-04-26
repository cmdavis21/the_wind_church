import { useEffect } from 'react';

export const useScrollToOnStatus = (ref: React.RefObject<HTMLElement>, ...statuses: boolean[]) => {
  useEffect(() => {
    if (!ref.current) return;

    const shouldScroll = statuses.some(Boolean);
    if (!shouldScroll) return;

    window.scrollTo({ top: ref.current.offsetTop - 100, left: 0, behavior: 'smooth' });
  }, [...statuses, ref]);
};
