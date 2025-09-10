import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Permanent_Marker, Manrope } from 'next/font/google';
import React from 'react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import QueryProvider from '@/data/providers/query-provider';
import ThemeModeProvider from '@/data/providers/theme-mode-provider';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';
import Footer from '@/components/navigation/footer/Footer';
import NotFound from './(changing-nav)/not-found';
import { LOCALES } from '@/data/services/i18n/utils';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!hasLocale(LOCALES, locale)) NotFound();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <ThemeModeScript />
      </head>
      <body className={manrope.className}>
        <QueryProvider>
          <ThemeModeProvider>
            <Flowbite theme={{ theme }}>
              <NextIntlClientProvider>
                <div className="bg-white dark:bg-[#1C1C1E] text-black dark:text-softWhite relative min-h-screen flex flex-col">
                  <main id="body" className="w-full relative mx-auto antialiased scroll-smooth">
                    {children}
                  </main>
                  <Footer />
                </div>
              </NextIntlClientProvider>
            </Flowbite>
          </ThemeModeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
