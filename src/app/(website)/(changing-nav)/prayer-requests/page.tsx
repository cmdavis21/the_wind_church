import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrayerRequests' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.prayerRequests}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`;
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

const PrayerRequests = () => (
  <div>
    <PageHero
      size="short"
      title="Prayer Requests"
      media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg` }}
    />
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <CenterTextSection
        highlight={[[2, 2]]}
        title="We're a family going through life together"
        description="We love to celebrate the Lord's blessings and support each other through difficult times. We're here for one another and for you."
      />
      <PrayerRequestForm />
    </div>
  </div>
);

export default PrayerRequests;
