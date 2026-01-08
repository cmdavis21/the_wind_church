import ErrorPage from '@/components/error-page/ErrorPage';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "Sorry, the page you're looking for does not exist. Please check the URL or return to the homepage of The Wind Church.",
};

const NotFound = async () => {
  const t = await getTranslations('NotFound');
  return (
    <div className="font-sans text-base bg-light-bg dark:bg-dark-bg text-light-primaryText dark:text-dark-primaryText relative min-h-screen flex flex-col">
      <main className="w-full relative mx-auto antialiased scroll-smooth">
        <ErrorPage title={t('title')} description={t('description')} />
      </main>
    </div>
  );
};

export default NotFound;
