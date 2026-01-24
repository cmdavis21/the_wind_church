import '@/styles/fonts.css';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata = {
  title: 'The Wind Church Website | © Wind of The Spirit Worship Center 2025',
  description: 'A website application prepared for The Wind Church of Riverside, CA',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <Flowbite theme={{ theme }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body>{children}</body>
        </NextIntlClientProvider>
      </Flowbite>
    </html>
  );
}
