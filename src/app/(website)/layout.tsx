import Footer from '@/components/navigation/footer/Footer';
import QueryProvider from '@/data/providers/query-provider';
import ThemeModeProvider from '@/data/providers/theme-mode-provider';
import { LOCALES } from '@/data/services/i18n/utils';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Manrope, Permanent_Marker } from 'next/font/google';
import React from 'react';
import NotFound from './(changing-nav)/not-found';

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
                <div className="bg-backgroundLight dark:bg-backgroundDark text-textPrimary dark:text-textInverse relative min-h-screen flex flex-col">
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
