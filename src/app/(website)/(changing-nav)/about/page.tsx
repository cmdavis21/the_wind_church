import { getLocale, getTranslations } from 'next-intl/server';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import HiddenTextCard from '@/components/cards/hidden-text-card/HiddenTextCard';
import CenterModeMediaWithTextCarousel from '@/components/carousels/center-mode-media-with-text-carousel/CenterModeMediaWithTextCarousel';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'About' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.about}`;
  const image = '/images/about/pastor-and-congregation.webp';

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

const About = async () => {
  const t = await getTranslations('About');

  const missionVision = [
    {
      title: t('mission.title'),
      subtitle: 'mission.subtitle',
      description: t('mission.description'),
    },
    {
      title: t('vision.title'),
      subtitle: 'vision.subtitle',
      description: t('vision.description'),
      scriptureList: [
        t('vision.verse1'),
        t('vision.verse2'),
        t('vision.verse3'),
        t('vision.verse4'),
        t('vision.verse5'),
      ],
    },
  ];

  const windValues = [
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: t('alt'),
      },
      title: 'values.items.0.title',
      description: t('values.items.0.description'),
    },
    {
      image: {
        src: '/images/about/man-worshipping.webp',
        alt: t('values.items.1.alt'),
      },
      title: 'values.items.1.title',
      description: t('values.items.1.description'),
    },
    {
      image: {
        src: '/images/about/all-hands-in.webp',
        alt: t('values.items.2.alt'),
      },
      title: 'values.items.2.title',
      description: t('values.items.2.description'),
    },
    {
      image: {
        src: '/images/give/person-with-box.webp',
        alt: t('values.items.3.alt'),
      },
      title: 'values.items.3.title',
      description: t('values.items.3.description'),
    },
    {
      image: {
        src: '/images/about/women-hugging.webp',
        alt: t('values.items.4.alt'),
      },
      title: 'values.items.4.title',
      description: t('values.items.4.description'),
    },
    {
      image: {
        src: '/images/about/young-adults-praying.webp',
        alt: t('values.items.5.alt'),
      },
      title: 'values.items.5.title',
      description: t('values.items.5.description'),
    },
  ];

  const historySlides = [
    {
      media: {
        src: '/images/product-placeholder.webp',
        alt: t('history.items.0.alt'),
      },
      description: t('history.items.0.description'),
    },
    {
      media: {
        src: '/images/product-placeholder.webp',
        alt: t('history.items.1.alt'),
      },
      description: t('history.items.1.description'),
    },
    {
      media: {
        src: '/images/product-placeholder.webp',
        alt: t('history.items.2.alt'),
      },
      description: t('history.items.2.description'),
    },
  ];

  return (
    <div>
      <PageHero
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/about/pastor-and-congregation.webp', alt: t('alt') }}
        stats={[
          { value: t('stats.0.value'), label: t('stats.0.label') },
          { value: t('stats.1.value'), label: t('stats.1.label') },
          { value: t('stats.2.value'), label: t('stats.2.label') },
        ]}
      />

      {/* OVERVIEW */}
      <h4 className="lg:max-w-[75%] pt-3xl sm:pt-4xl px-padding">{t('description')}</h4>

      {/* ABOUT PASTOR */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center py-3xl sm:py-4xl px-padding">
        <div className="flex flex-col gap-lg">
          <SectionHeader title={t('pastor.title')} subtitle={t('pastor.subtitle')} />
          <h4 className="lg:max-w-[75%]">{t('pastor.description')}</h4>
          <Link href={PageRoutes.aboutPastor}>
            <AnimativeFillButton variant="secondary">{t('pastor.cta')}</AnimativeFillButton>
          </Link>
        </div>
      </div>

      {/* MISSION + VISION */}
      <MediaBackgroundAndContent
        color={ColorBackground.BLUE}
        content={
          <div id="mission-and-vision" className="flex flex-col gap-3xl">
            {missionVision.map((mv) => (
              <div key={`mission-and-vision-${mv.title}`} className="flex flex-col gap-sm">
                <h2>{mv.title}</h2>
                <h2>
                  {t.rich(mv.subtitle, {
                    bold: (chunks) => (
                      <span className="font-display text-brand-primary">{chunks}</span>
                    ),
                  })}
                </h2>
                <h5 className="lg:max-w-[75%]">{mv.description}</h5>
                {mv.scriptureList && <ScriptureList lightText scriptures={mv.scriptureList} />}
              </div>
            ))}
          </div>
        }
      />

      {/* WIND VALUES */}
      <div className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title={t('values.title')} description={t('values.subtitle')} />

        {/* Tablet/Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
          {windValues.map(({ title, image, description }) => (
            <HiddenTextCard
              key={`desktop-${title}`}
              image={image}
              description={description}
              title={t.rich(title, {
                bold: (chunks) => <span className="font-display text-brand-primary">{chunks}</span>,
              })}
            />
          ))}
        </div>

        {/* Mobile */}
        <SimpleCarousel
          className="sm:hidden"
          slides={windValues.map(({ title, image, description }) => (
            <HiddenTextCard
              key={`mobile-${title}`}
              image={image}
              description={description}
              title={t.rich(title, {
                bold: (chunks) => <span className="font-display text-brand-primary">{chunks}</span>,
              })}
            />
          ))}
        />
      </div>

      {/* FOURSQUARE */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-4xl sm:pt-6xl px-padding">
        <div className="flex flex-col gap-lg">
          <SectionHeader title={t('foursquare.title')} subtitle={t('foursquare.subtitle')} />
          <h4 className="lg:max-w-[75%]">{t('foursquare.description')}</h4>
          <Link href={PageRoutes.foursquare}>
            <AnimativeFillButton variant="secondary">{t('foursquare.cta')}</AnimativeFillButton>
          </Link>
        </div>
      </div>

      {/* HISTORY */}
      <div id="history" className="flex flex-col gap-xl md:gap-xxl pt-3xl sm:pt-4xl">
        <div className="px-padding">
          <CenterTextSection title={t('history.title')} description={t('history.description')} />
        </div>

        <CenterModeMediaWithTextCarousel slides={historySlides} />
      </div>
    </div>
  );
};

export default About;
