import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import HiddenTextCard from '@/components/cards/hidden-text-card/HiddenTextCard';
import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import ResourceCard from '@/components/cards/resource-card/ResourceCard';
import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getResourcesByCategory } from '@/data/server/sanity/queries/resources';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
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
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('Salvation');

  const bibleResources = await getResourcesByCategory('bible-resource', locale);

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
      label: t('congrats.items.0.title'),
      descriptions: [t('congrats.items.0.verses.0'), t('congrats.items.0.verses.1')],
    },
    {
      label: t('congrats.items.1.title'),
      descriptions: [t('congrats.items.1.verses.0'), t('congrats.items.1.verses.1')],
    },
    {
      label: t('congrats.items.2.title'),
      descriptions: [t('congrats.items.2.verses.0'), t('congrats.items.2.verses.1')],
    },
    {
      label: t('congrats.items.3.title'),
      descriptions: [t('congrats.items.3.verses.0'), t('congrats.items.3.verses.1')],
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
            <HiddenTextCard
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
        <div
          className="grid gap-xl"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}
        >
          {results.map((item) => (
            <MultiInfoCard
              key={`results-${item.label}`}
              label={item.label}
              content={{ type: 'list', data: item.descriptions }}
            />
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

      {/* BIBLE RESOURCES */}
      {bibleResources && bibleResources.length > 0 && (
        <div className="flex flex-col gap-xl md:gap-xxl py-3xl sm:py-4xl px-padding max-width-center">
          <SectionHeader title={t('resources.title')} subtitle={t('resources.subtitle')} />
          <div className="flex flex-wrap gap-xl">
            {bibleResources.reverse().map((resource) => (
              <ResourceCard key={`resource-${resource.title}`} {...resource} />
            ))}
          </div>
        </div>
      )}

      {/* FOURSQUARE */}
      <div className="px-padding max-width-center">
        <MediaBackgroundAndContent
          centerContent
          background={{ src: '/images/people-serving.webp', alt: t('section.alt') }}
          content={
            <div className="flex flex-col gap-xs">
              <h2>{t('foursquare.title')}</h2>
              <h2 className="pb-lg lg:max-w-[75%]">{t('foursquare.description')}</h2>
              <Link href={PageRoutes.foursquare}>
                <AnimativeFillButton variant="secondary">{t('foursquare.cta')}</AnimativeFillButton>
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Salvation;
