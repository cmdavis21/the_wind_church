import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Salvation' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.salvation}`;
  const image = '/images/salvation/cross-on-mount.webp';
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

const Salvation = async () => {
  const t = await getTranslations('Salvation');

  const questions = [
    {
      image: {
        src: '/images/salvation/forest.webp',
        alt: t('how.questions.0.alt'),
      },
      count: t('how.questions.0.count'),
      question: t('how.questions.0.question'),
      verse: t('how.questions.0.verses'),
    },
    {
      image: {
        src: '/images/salvation/dove.webp',
        alt: t('how.questions.1.alt'),
      },
      count: t('how.questions.1.count'),
      question: t('how.questions.1.question'),
      verse: t('how.questions.1.verses'),
    },
    {
      image: {
        src: '/images/salvation/olive-branch.webp',
        alt: t('how.questions.2.alt'),
      },
      count: t('how.questions.2.count'),
      question: t('how.questions.2.question'),
      verse: t('how.questions.2.verses'),
    },
    {
      image: {
        src: '/images/salvation/hand-and-water.webp',
        alt: t('how.questions.3.alt'),
      },
      count: t('how.questions.3.count'),
      question: t('how.questions.3.question'),
      verse: t('how.questions.3.verses'),
    },
  ];

  const results = [
    {
      count: t('congrats.items.0.count'),
      text: t('congrats.items.0.title'),
      verse: t('congrats.items.0.verses'),
    },
    {
      count: t('congrats.items.1.count'),
      text: t('congrats.items.1.title'),
      verse: t('congrats.items.1.verses'),
    },
    {
      count: t('congrats.items.2.count'),
      text: t('congrats.items.2.title'),
      verse: t('congrats.items.2.verses'),
    },
    {
      count: t('congrats.items.3.count'),
      text: t('congrats.items.3.title'),
      verse: t('congrats.items.3.verses'),
    },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/salvation/cross-on-mount.webp', alt: t('alt') }}
      />

      {/* WHAT IS SALVATION */}
      <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <SectionHeader title={t('what.title')} />
        <h4>{t('what.description')}</h4>
      </div>

      {/* HOW DO YOU RECIEVE SALVATION */}
      <div className="flex flex-col gap-xxl max-width-center py-3xl sm:py-4xl px-padding">
        <SectionHeader title={t('how.title')} />
        <h4>{t('how.descriptions.0')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-lg">
          {questions.map((item, index) => (
            <ImageWithTitleAndHiddenTextCard
              key={`salvation-question-${item.question}`}
              image={item.image}
              title={
                <span className="font-display text-brand-primary text-[55px] lg:text-[65px]">
                  {item.count}
                </span>
              }
              description={
                <div>
                  <h5 className="font-semibold">{item.question}</h5>
                  <p className="body-large">{item.verse}</p>
                </div>
              }
            />
          ))}
        </div>
        <h4>
          {t.rich('how.descriptions.1', {
            bold: (chunks) => (
              <span className="font-bold italic text-black dark:text-dark-primaryText">
                {chunks}
              </span>
            ),
          })}
        </h4>
      </div>

      {/* PRAYER OF SALVATION */}
      <MediaBackgroundAndContent
        color={ColorBackground.BLUE}
        content={
          <div className="flex flex-col gap-xxl">
            <SectionHeader title={t('prayer.title')} />
            <div className="flex flex-col gap-xl">
              <h4>{t('prayer.descriptions.0')}</h4>
              <h4>{t('prayer.descriptions.1')}</h4>
              <h4>{t('prayer.descriptions.2')}</h4>
              <h4>{t('prayer.descriptions.3')}</h4>
            </div>
          </div>
        }
      />

      {/* RESULT */}
      <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <SectionHeader title={t('congrats.title')} />
        <div className="py-md grid grid-cols-1 sm:grid-cols-2 gap-xl">
          {results.map((item, index) => (
            <div key={`salvation-${item.text}`} className="flex gap-xs">
              <h4>{index + 1}.</h4>
              <div className="flex flex-col">
                <h4>{item.text}</h4>
                <h6>{item.verse}</h6>
              </div>
            </div>
          ))}
        </div>
        <h4>
          {t.rich('congrats.description', {
            bold: (chunks) => (
              <span className="font-bold italic text-black dark:text-dark-primaryText">
                {chunks}
              </span>
            ),
          })}
        </h4>
      </div>

      {/* PRAYER REQUEST */}
      <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title={t('form.header.title')} description={t('form.header.subtitle')} />
        <PrayerRequestForm />
      </div>
    </div>
  );
};

export default Salvation;
