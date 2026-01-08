import { Manrope, Permanent_Marker as PermanentMarker } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-manrope',
});

export const permanentMarker = PermanentMarker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
});
