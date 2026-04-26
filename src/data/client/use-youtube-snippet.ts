import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const useYouTubeSnippet = (videoId?: string, duration?: number) => {
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoId || !duration) return;

    const CLIP = 300; // 5 minutes
    const START_BUFFER = 2700; // 45 minutes
    const END_BUFFER = 900; // 15 minutes

    const latestAllowedStart = duration - END_BUFFER - CLIP;
    const earliestAllowedStart = START_BUFFER;

    const start = Math.max(0, Math.min(latestAllowedStart, earliestAllowedStart));

    const end = start + CLIP;

    // Load YouTube API script
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('sermon-snippet', {
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          autoplay: 1,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            playerRef.current.seekTo(start);
            playerRef.current.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              if (intervalRef.current) clearInterval(intervalRef.current);

              intervalRef.current = window.setInterval(() => {
                const current = playerRef.current.getCurrentTime();
                if (current >= end) {
                  playerRef.current.seekTo(start);
                }
              }, 250);
            }
          },
        },
      });
    };

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current) playerRef.current.destroy();
    };
  }, [videoId, duration]);

  const toggleSound = () => {
    if (!playerRef.current) return;

    if (playerRef.current.isMuted()) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return { toggleSound, isMuted };
};
