import Footer from '@/components/navigation/footer/Footer';
import QueryProvider from '@/data/providers/query-provider';
import ThemeModeProvider from '@/data/providers/theme-mode-provider';

export default async function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeModeProvider>
        <div className="font-sans text-base bg-light-bg dark:bg-dark-bg text-light-primaryText dark:text-dark-primaryText relative min-h-screen flex flex-col">
          <main id="body" className="w-full relative mx-auto antialiased scroll-smooth">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeModeProvider>
    </QueryProvider>
  );
}
