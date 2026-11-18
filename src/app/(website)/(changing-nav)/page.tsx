import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import PageHero from '@/components/heroes/page-hero/PageHero';
import PreviewSermon from '@/components/preview-sermon/PreviewSermon';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MasonryGrid from '@/components/sections/masonry-grid/MasonryGrid';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { AWS_ASSET_URL, WEBSITE_URL } from '@/data/server/env.server';
import { getLatestSermon } from '@/data/server/youtube/playlists';

import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'Home' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}/`;
  const image = '/images/wind_church_building.webp';

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
      description,
      images: [image],
    },
  };
}

const Home = async () => {
  const t = await getTranslations('Home');

  const result = await getLatestSermon();

  const attributes = [
    { label: t('header.items.0.label'), descriptions: [t('header.items.0.description')] },
    { label: t('header.items.1.label'), descriptions: [t('header.items.1.description')] },
    { label: t('header.items.2.label'), descriptions: [t('header.items.2.description')] },
    { label: t('header.items.3.label'), descriptions: [t('header.items.3.description')] },
  ];

  const ctaOptions = [
    {
      image: {
        src: '/images/sermons/pastor-preaching.webp',
        alt: t('ctas.items.0.alt'),
      },
      title: t('ctas.items.0.title'),
      description: t('ctas.items.0.description'),
      href: PageRoutes.wePathway,
      span: 2 as any,
    },
    {
      image: {
        src: '/images/give/person-with-box.webp',
        alt: t('ctas.items.1.alt'),
      },
      title: t('ctas.items.1.title'),
      description: t('ctas.items.1.description'),
      href: PageRoutes.ministries,
    },
    {
      image: {
        src: '/images/home/group-study.webp',
        alt: t('ctas.items.2.alt'),
      },
      title: t('ctas.items.2.title'),
      description: t('ctas.items.2.description'),
      href: PageRoutes.deepDive,
    },
    {
      image: {
        src: '/images/home/girl-with-box.webp',
        alt: t('ctas.items.3.alt'),
      },
      title: t('ctas.items.3.title'),
      description: t('ctas.items.3.description'),
      href: PageRoutes.giftAssessment,
    },
    {
      image: {
        src: '/images/home/planning.webp',
        alt: t('ctas.items.4.alt'),
      },
      title: t('ctas.items.4.title'),
      description: t('ctas.items.4.description'),
      href: PageRoutes.churchRental,
    },
  ];

  return (
    <div>
      <PageHero
        size="full"
        title={t('title')}
        highlightTitle={[
          [0, 0],
          [2, 2],
          [4, 4],
        ]}
        italicSubtitle={t('subtitle')}
        description={t('description')}
        media={{
          src: `${AWS_ASSET_URL}/friend-group.mp4`,
          poster: '/images/friend-group.webp',
        }}
        primaryCta={{ label: t('btns.0'), href: PageRoutes.newHere }}
        secondaryCta={{ label: t('btns.1'), href: PageRoutes.about }}
        scrollToCta={{ label: t('btns.2'), href: 'overview' }}
        stats={[
          { value: t('stats.0.value'), label: t('stats.0.label') },
          { value: t('stats.1.value'), label: t('stats.1.label') },
          { value: t('stats.2.value'), label: t('stats.2.label') },
        ]}
      />

      {/* OVERVIEW */}
      <div
        id="overview"
        className="max-width-center pt-3xl sm:pt-4xl px-padding flex flex-col gap-lg"
      >
        <h2>
          {t.rich('header.title', {
            bold: (chunks) => <span className="font-display text-brand-primary">{chunks}</span>,
          })}
        </h2>
        <h4 className="lg:max-w-[75%]">{t('header.description')}</h4>
      </div>

      {/* ATTRIBUTES */}
      <div
        className="grid gap-xl px-padding pt-xxl pb-3xl sm:pb-4xl"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}
      >
        {attributes.map((item) => (
          <MultiInfoCard
            key={`attributes-${item.label}`}
            label={item.label}
            content={{ type: 'list', data: item.descriptions }}
          />
        ))}
      </div>

      {/* SERMON */}
      <PreviewSermon data={result.data} />

      {/* CTAs */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title={t('ctas.title')} description={t('ctas.subtitle')} />
        <MasonryGrid items={ctaOptions} />
      </div>
    </div>
  );
};

export default Home;
