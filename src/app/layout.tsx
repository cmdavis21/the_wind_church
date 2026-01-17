import '@/styles/fonts.css';
import '@/styles/globals.css';
import { ThemeModeScript } from 'flowbite-react';

export const metadata = {
  title: 'The Wind Church Website | © Wind of The Spirit Worship Center 2025',
  description: 'A website application prepared for The Wind Church of Riverside, CA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
