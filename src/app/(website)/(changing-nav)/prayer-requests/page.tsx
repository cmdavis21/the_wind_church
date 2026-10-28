import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrayerRequests' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.prayerRequests}`;
  const image = '/images/praying-group.webp';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

const PrayerRequests = async () => {
  const t = await getTranslations('PrayerRequests');

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        media={{ src: '/images/praying-group.webp', alt: t('alt') }}
      />

      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title={t('form.header.title')} description={t('form.header.subtitle')} />
        <PrayerRequestForm />
      </div>
    </div>
  );
};

export default PrayerRequests;
