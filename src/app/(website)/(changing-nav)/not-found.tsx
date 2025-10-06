import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'Sorry, the page you’re looking for doesn’t exist. Please check the URL or return to the homepage of The Wind Church.',
};

const NotFound = async () => {
  const t = await getTranslations('NotFound');
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute w-full h-full bg-gradient-to-t from-primary from-5% via-primary/50 via-30% to-primary/10 to-90% z-20" />
      <div className="absolute w-full h-full bg-gradient-to-b from-primary from-5% via-primary/50 via-30% to-primary/10 to-90%  z-20" />
      <div className="absolute w-full h-full bg-gradient-to-l from-primary from-5% via-primary/50 via-30% to-primary/10 to-90%  z-20" />
      <div className="absolute w-full h-full bg-gradient-to-r from-primary from-5% via-primary/50 via-30% to-primary/10 to-90%  z-20" />

      <div className="relative z-30 flex justify-center items-center w-full h-full">
        <h1>{t('404')}</h1>
        <h3>{t('title')}</h3>
        <h5>{t('description')}</h5>
      </div>
    </div>
  );
};

export default NotFound;
