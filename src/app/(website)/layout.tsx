import Footer from '@/components/navigation/footer/Footer';
import QueryProvider from '@/data/providers/query-provider';
import ThemeModeProvider from '@/data/providers/theme-mode-provider';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { Flowbite } from 'flowbite-react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export default async function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <QueryProvider>
      <ThemeModeProvider>
        <Flowbite theme={{ theme }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="font-sans text-base bg-light-bg dark:bg-dark-bg text-light-primaryText dark:text-dark-primaryText relative min-h-screen flex flex-col">
              <main id="body" className="w-full relative mx-auto antialiased scroll-smooth">
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Flowbite>
      </ThemeModeProvider>
    </QueryProvider>
  );
}
