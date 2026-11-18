import HiddenTextCard from '@/components/cards/hidden-text-card/HiddenTextCard';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL, YOUTUBE } from '@/data/server/env.server';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;

  const t = await getTranslations({ locale, namespace: 'Pastor' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.feedback}`;
  const image = '/images/sermons/pastor-preaching.webp';

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

const PastorAlaricSingletary = async () => {
  const t = await getTranslations('Pastor');

  const attributes = [
    {
      label: t('attributes.0.title'),
      descriptions: [t('attributes.0.descriptions.0'), t('attributes.0.descriptions.1')],
    },
    {
      label: t('attributes.1.title'),
      descriptions: [t('attributes.1.descriptions.0'), t('attributes.1.descriptions.1')],
    },
    {
      label: t('attributes.2.title'),
      descriptions: [t('attributes.2.description')],
    },
    {
      label: t('attributes.3.title'),
      descriptions: [t('attributes.3.description')],
    },
  ];

  const hobbies = [
    {
      image: {
        src: '/images/pastor/fish.webp',
        alt: t('alt'),
      },
      title: t('beyond.items.0.title'),
      description: t('beyond.items.0.description'),
    },
    {
      image: {
        src: '/images/pastor/plate-of-food.webp',
        alt: t('beyond.items.1.alt'),
      },
      title: t('beyond.items.1.title'),
      description: t('beyond.items.1.description'),
    },
    {
      image: {
        src: '/images/pastor/game-controller.webp',
        alt: t('beyond.items.2.alt'),
      },
      title: t('beyond.items.2.title'),
      description: t('beyond.items.2.description'),
    },
    {
      image: {
        src: '/images/pastor/movie-reel.webp',
        alt: t('beyond.items.3.alt'),
      },
      title: t('beyond.items.3.title'),
      description: t('beyond.items.3.description'),
    },
    {
      image: {
        src: '/images/pastor/house.webp',
        alt: t('beyond.items.4.alt'),
      },
      title: t('beyond.items.4.title'),
      description: t('beyond.items.4.description'),
    },
    {
      image: {
        src: '/images/pastor/notepad.webp',
        alt: t('beyond.items.5.alt'),
      },
      title: t('beyond.items.5.title'),
      description: t('beyond.items.5.description'),
    },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/sermons/pastor-preaching.webp', alt: t('alt') }}
      />

      <div className="max-width-center pt-3xl sm:pt-4xl px-padding flex flex-col gap-lg">
        <SectionHeader title={t('heart.title')} />
        <h4 className="lg:max-w-[75%]">{t('heart.description')}</h4>
      </div>

      {/* ATTRIBUTES */}
      <div
        className="grid gap-xl px-padding pt-xxl sm:pt-3xl"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))' }}
      >
        {attributes.map((item) => (
          <MultiInfoCard
            key={`attributes-${item.label}`}
            label={item.label}
            content={{ type: 'list', data: item.descriptions }}
          />
        ))}
      </div>

      {/* QUOTE */}
      <div className="max-width-center pt-xxl sm:pt-3xl px-padding">
        <PassageQuote passage={t('heart.quote.saying')} verse={t('heart.quote.author')} />
      </div>

      {/* BEYOND THE PULPIT */}
      <div className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-xxl sm:pt-3xl px-padding">
        <CenterTextSection title={t('beyond.title')} description={t('beyond.subtitle')} />

        {/* Tablet/Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
          {hobbies.map((item) => (
            <HiddenTextCard key={`desktop-${item.title}`} {...item} />
          ))}
        </div>

        {/* Mobile */}
        <SimpleCarousel
          className="sm:hidden"
          slides={hobbies.map((item) => (
            <HiddenTextCard key={`desktop-${item.title}`} {...item} />
          ))}
        />
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-xl md:gap-xxl pt-5xl sm:pt-6xl px-padding max-width-center">
        <CenterTextSection title={t('ctas.title')} description={t('ctas.subtitle')} />

        <div className="flex flex-wrap justify-center gap-xxl">
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.0.alt')}
            src="/images/salvation/olive-branch.webp"
            title={t('ctas.items.0.title')}
            description={t('ctas.items.0.description')}
            link={{
              label: t('ctas.items.0.label'),
              href: PageRoutes.foursquare,
            }}
          />
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.1.alt')}
            src="/images/rental/church-building.webp"
            title={t('ctas.items.1.title')}
            description={t('ctas.items.1.description')}
            link={{
              label: t('ctas.items.1.label'),
              href: PageRoutes.newHere,
            }}
          />
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.2.alt')}
            src="/images/pastor/man-on-computer.webp"
            title={t('ctas.items.2.title')}
            description={t('ctas.items.2.description')}
            link={{
              label: t('ctas.items.2.label'),
              href: YOUTUBE,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PastorAlaricSingletary;
