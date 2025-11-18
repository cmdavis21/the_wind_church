import ErrorPage from '@/components/error-page/ErrorPage';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'Sorry, the page you’re looking for doesn’t exist. Please check the URL or return to the homepage of The Wind Church.',
};

const NotFound = async () => {
  const t = await getTranslations('NotFound');
  return <ErrorPage title={t('title')} description={t('description')} />;
};

export default NotFound;
