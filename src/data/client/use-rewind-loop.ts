// 'use client';

// import { useEffect, useRef } from 'react';

type UseRewindLoopOptions = {
  rewindSpeed?: number;
  enabled?: boolean;
};

// export function useRewindLoop(
//   videoRef: React.RefObject<HTMLVideoElement | null>,
//   { rewindSpeed = 2.5, enabled = true }: UseRewindLoopOptions = {}
// ) {
//   const monitorRaf = useRef<number | null>(null);
//   const rewindRaf = useRef<number | null>(null);
//   const isRewinding = useRef(false);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video || !enabled) return;

//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     if (prefersReducedMotion) {
//       video.loop = true;

//       return () => {
//         video.loop = false;
//       };
//     }

//     video.loop = false;

//     const cancelMonitor = () => {
//       if (monitorRaf.current !== null) {
//         cancelAnimationFrame(monitorRaf.current);
//         monitorRaf.current = null;
//       }
//     };

//     const cancelRewind = () => {
//       if (rewindRaf.current !== null) {
//         cancelAnimationFrame(rewindRaf.current);
//         rewindRaf.current = null;
//       }

//       isRewinding.current = false;
//     };

//     const startRewind = () => {
//       if (isRewinding.current) return;

//       isRewinding.current = true;
//       video.pause();

//       let previousTimestamp: number | null = null;

//       const animate = (timestamp: number) => {
//         if (!isRewinding.current) return;

//         if (previousTimestamp === null) {
//           previousTimestamp = timestamp;
//         }

//         const deltaSeconds = (timestamp - previousTimestamp) / 1000;

//         previousTimestamp = timestamp;

//         const nextTime = video.currentTime - deltaSeconds * rewindSpeed;

//         if (nextTime <= 0) {
//           video.currentTime = 0;

//           cancelRewind();

//           // Restart on the next animation frame so the
//           // browser has time to render frame 0.
//           requestAnimationFrame(() => {
//             video.play().catch(() => {});
//           });

//           return;
//         }

//         video.currentTime = nextTime;

//         rewindRaf.current = requestAnimationFrame(animate);
//       };

//       rewindRaf.current = requestAnimationFrame(animate);
//     };

//     const monitor = () => {
//       if (
//         !isRewinding.current &&
//         !video.paused &&
//         !video.ended &&
//         Number.isFinite(video.duration)
//       ) {
//         const remaining = video.duration - video.currentTime;

//         /*
//          * Start before the actual end.
//          *
//          * 0.08 seconds gives us enough room to prevent
//          * the browser from ever entering the ended state.
//          */
//         if (remaining <= 0.08) {
//           startRewind();
//         }
//       }

//       monitorRaf.current = requestAnimationFrame(monitor);
//     };

//     monitorRaf.current = requestAnimationFrame(monitor);

//     return () => {
//       cancelMonitor();
//       cancelRewind();
//     };
//   }, [videoRef, rewindSpeed, enabled]);
// }

import { useEffect, useState } from 'react';

/**
 * Custom hook to loop a video with a slow rewind effect.
 * @param {number} rewindSpeed - Seconds to rewind per frame (smaller = slower rewind)
 */
export function useRewindLoop(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  { rewindSpeed = 2.5, enabled = true }: UseRewindLoopOptions = {}
) {
  // const videoRef = useRef(null);
  const [isRewinding, setIsRewinding] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rewindFrame;

    const handleTimeUpdate = () => {
      // When near the end, start rewinding
      if (!isRewinding && video.duration - video.currentTime <= 0.1) {
        setIsRewinding(true);
        video.pause();
        rewindFrame = requestAnimationFrame(rewindStep);
      }
    };

    const rewindStep = () => {
      if (video.currentTime > 0) {
        video.currentTime = Math.max(0, video.currentTime - rewindSpeed);
        rewindFrame = requestAnimationFrame(rewindStep);
      } else {
        setIsRewinding(false);
        video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      cancelAnimationFrame(rewindFrame);
    };
  }, [rewindSpeed, isRewinding]);

  return videoRef;
}
