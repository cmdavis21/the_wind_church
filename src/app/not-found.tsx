import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import '@/styles/fonts.css';
import '@/styles/globals.css';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NotFound' });
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const NotFound = async () => {
  const t = await getTranslations('NotFound');
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-primaryText dark:text-dark-primaryText relative h-screen flex flex-col items-end justify-center">
      <ErrorAlert
        reloadPage={false}
        header={t('header')}
        title={t('title')}
        subtitle={t('subtitle')}
        homeBtnLabel={t('btnLabel')}
      />
    </div>
  );
};

export default NotFound;
