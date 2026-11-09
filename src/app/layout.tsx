import '@/styles/fonts.css';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'The Wind Church Website | © Wind of The Spirit Worship Center 2025',
  description: 'A website application prepared for The Wind Church of Riverside, CA',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Flowbite theme={{ theme }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Flowbite>
      </body>
    </html>
  );
}
