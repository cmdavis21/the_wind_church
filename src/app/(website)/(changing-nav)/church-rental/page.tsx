import CenterModeMediaWithTextCarousel from '@/components/carousels/center-mode-media-with-text-carousel/CenterModeMediaWithTextCarousel';
import EventRentalForm from '@/components/forms/event-rental-form/EventRentalForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ChurchRental' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.churchRental}`;
  const image = '/images/rental/church-building.webp';
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

const ChurchRental = async () => {
  const t = await getTranslations('ChurchRental');

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        media={{ src: '/images/rental/church-building.webp', alt: t('alt') }}
      />

      <div className="max-width-center py-3xl sm:py-4xl px-padding">
        <CenterTextSection title={t('header.title')} description={t('header.description')} />
      </div>

      <CenterModeMediaWithTextCarousel
        slides={[
          {
            media: {
              src: '/images/rental/lobby.webp',
              alt: t('lobby.alt'),
            },
            title: t('lobby.title'),
            description: t('lobby.description'),
          },
          {
            media: {
              src: '/images/rental/sanctuary.webp',
              alt: t('sanctuary.alt'),
            },
            title: t('sanctuary.title'),
            description: t('sanctuary.description'),
          },
          {
            media: {
              src: '/images/rental/fellowship-hall.webp',
              alt: t('fellowshipHall.alt'),
            },
            title: t('fellowshipHall.title'),
            description: t('fellowshipHall.description'),
          },
          {
            media: {
              src: '/images/rental/kitchen.webp',
              alt: t('kitchen.alt'),
            },
            title: t('kitchen.title'),
            description: t('kitchen.description'),
          },
          {
            media: {
              src: '/images/rental/parking-lot.webp',
              alt: t('parkingLot.alt'),
            },
            title: t('parkingLot.title'),
            description: t('parkingLot.description'),
          },
        ]}
      />

      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection
          title={t('form.header.title')}
          description={t('form.header.description')}
        />
        <EventRentalForm />
      </div>
    </div>
  );
};

export default ChurchRental;
