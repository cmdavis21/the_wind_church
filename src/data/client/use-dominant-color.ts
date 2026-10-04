'use client';
import { useEffect, useState } from 'react';

interface DominantColorResult {
  color: string; // "rgb(r, g, b)"
  isDark: boolean;
  loading: boolean;
}

const FALLBACK_COLOR = 'rgb(15, 65, 75)'; // used if extraction fails (e.g. no CORS)

export function useDominantColor(
  src: string,
  sampleRegion: 'bottom' | 'full' = 'bottom'
): DominantColorResult {
  const [color, setColor] = useState(FALLBACK_COLOR);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      if (cancelled) return;
      try {
        const canvas = document.createElement('canvas');
        const sampleSize = 20;
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const sy = sampleRegion === 'bottom' ? img.height * 0.7 : 0;
        const sh = sampleRegion === 'bottom' ? img.height * 0.3 : img.height;

        ctx.drawImage(img, 0, sy, img.width, sh, 0, 0, sampleSize, sampleSize);
        const { data } = ctx.getImageData(0, 0, sampleSize, sampleSize);

        let r = 0,
          g = 0,
          b = 0,
          count = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);

        if (!cancelled) {
          setColor(`rgb(${r}, ${g}, ${b})`);
          setLoading(false);
        }
      } catch (err) {
        // canvas is "tainted" — image host didn't send CORS headers, can't read pixels
        console.warn('useDominantColor: falling back to default color', err);
        if (!cancelled) setLoading(false);
      }
    };

    img.onerror = () => {
      if (!cancelled) setLoading(false);
    };

    return () => {
      cancelled = true;
    };
  }, [src, sampleRegion]);

  const isDark = (() => {
    const match = color.match(/\d+/g);
    if (!match) return true;
    const [r, g, b] = match.map(Number);
    return (r * 299 + g * 587 + b * 114) / 1000 < 140; // perceived brightness
  })();

  return { color, isDark, loading };
}
