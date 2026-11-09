import Accordion from '@/components/accordion/Accordion';
import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import EventCard from '@/components/cards/event-card/EventCard';
import { default as ImageCard } from '@/components/cards/image-card/ImageCard';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import ResourceCard from '@/components/cards/resource-card/ResourceCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { DEFAULT_LOCALE, Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { getMinistryGallery } from '@/data/server/aws/s3/gallery';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getMinistryEvents } from '@/data/server/sanity/queries/events';
import { getAllMinistries, getMinistryBySlug } from '@/data/server/sanity/queries/ministries';
import { Event } from '@/data/types';
import { isAfter } from 'date-fns';
import { Button } from 'flowbite-react';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateStaticParams() {
  const ministries = await getAllMinistries(DEFAULT_LOCALE);
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'Ministries' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.ministries}/${slug}`;
  const image = '/images/people-serving.webp';

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

const SingleMinistryPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('Ministries');

  const ministry = await getMinistryBySlug(slug, locale);
  const gallery = await getMinistryGallery(ministry?.name);
  const events = await getMinistryEvents(locale, ministry?._id);

  if (!ministry) {
    return (
      <MediaBackgroundAndContent
        centerContent
        content={<ErrorAlert />}
        background={{ src: '/images/wind_church_building.webp', alt: t('errorAlt') }}
      />
    );
  }

  return (
    <div>
      <PageHero size="short" title={ministry.name} media={{ src: ministry.image.src }} />

      <div className="flex flex-col gap-4xl pt-3xl sm:pt-4xl">
        {/* DESCRIPTION */}
        <h4 className="px-padding max-width-center">{ministry.description}</h4>

        {/* VERSE */}
        <PassageQuote passage={ministry.scripture.passage} verse={ministry.scripture.verse} />

        {/* MINISTRY LEADER */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('leader.title')} subtitle={t('leader.subtitle')} />

          {/* DESKTOP */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
            {[ministry.coach, ...ministry.coordinators].map((leader) => (
              <LeaderCard
                key={`ministry-leader-desktop-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          </div>

          {/* MOBILE */}
          <SimpleCarousel
            className="sm:hidden"
            slides={[ministry.coach, ...ministry.coordinators].map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* EVENTS */}
        {events.length > 0 && (
          <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
            <CenterTextSection title={t('events.title')} description={t('events.subtitle')} />

            <div className="w-full flex flex-wrap justify-center gap-xxl">
              {events.slice(0, 3).map((event: Event) => (
                <EventCard
                  key={`event-card-${event.name}`}
                  event={event}
                  scale={isAfter(event.start_date_time, new Date())}
                />
              ))}
            </div>

            <Link href={PageRoutes.events} className="mx-auto">
              <Button pill color="primary" size="lg">
                {t('events.cta')}
              </Button>
            </Link>
          </div>
        )}

        {/* GALLERY */}
        {gallery.urls.length > 0 && (
          <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
            {events.length > 0 ? (
              <SectionHeader title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
            ) : (
              <CenterTextSection title={t('gallery.title')} description={t('gallery.subtitle')} />
            )}

            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
              {gallery.urls.slice(0, 4).map((src) => (
                <ImageCard key={`wind-gallery-${src}`} src={src} alt={t('gallery.imageAlt')} />
              ))}
            </div>

            {/* Mobile */}
            <SimpleCarousel
              showDots={false}
              className="sm:hidden"
              slides={gallery.urls.slice(0, 4).map((src) => (
                <ImageCard
                  key={`wind-gallery-mobile-${src}`}
                  src={src}
                  alt={t('gallery.imageAlt')}
                />
              ))}
            />

            <Link href={PageRoutes.gallery} className="max-sm:mx-auto">
              <Button pill color="primary" size="lg">
                {t('gallery.cta')}
              </Button>
            </Link>
          </div>
        )}

        {/* RESOURCES */}
        {ministry.resources && ministry.resources.length > 0 && (
          <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
            {events.length > 0 && gallery.urls.length > 0 ? (
              <CenterTextSection
                title={t('resources.title')}
                description={t('resources.subtitle')}
              />
            ) : (
              <SectionHeader title={t('resources.title')} subtitle={t('resources.subtitle')} />
            )}

            <div className="flex flex-wrap gap-xl">
              {ministry.resources.map((resource) => (
                <ResourceCard key={`resource-${resource.title}`} {...resource} />
              ))}
            </div>
          </div>
        )}

        {/* WHY JOIN A MINISTRY */}
        <MediaBackgroundAndContent
          background={{ src: '/images/give/group-hands.webp', alt: t('whyJoin.alt') }}
          content={
            <div className="flex flex-col gap-md">
              <h2 className="font-bold">{t('whyJoin.title')}</h2>
              <h4 className="lg:max-w-[75%]">{t('whyJoin.description')}</h4>
            </div>
          }
        />

        {/* FAQS */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('faqs.title')} subtitle={t('faqs.subtitle')} />

          <Accordion
            content={[
              {
                title: t('faqs.items.0.question'),
                description: t('faqs.items.0.answer'),
              },
              {
                title: t('faqs.items.1.question'),
                description: t('faqs.items.1.answer'),
              },
              {
                title: t('faqs.items.2.question'),
                description: t('faqs.items.2.answer'),
              },
              {
                title: t('faqs.items.3.question'),
                description: t('faqs.items.3.answer'),
              },
              {
                title: t('faqs.items.4.question'),
                description: t('faqs.items.4.answer'),
              },
              {
                title: t('faqs.items.5.question'),
                description: t('faqs.items.5.answer'),
              },
              {
                title: t('faqs.items.6.question'),
                description: t('faqs.items.6.answer'),
              },
            ]}
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <CenterTextSection title={t('ctas.title')} description={t('ctas.subtitle')} />

          <div className="flex flex-wrap justify-center gap-xxl">
            <ImageWithTitleDescriptionCard
              alt={t('ctas.items.0.alt')}
              src="/images/salvation/cross-on-mount.webp"
              title={t('ctas.items.0.title')}
              description={t('ctas.items.0.description')}
              link={{
                label: t('ctas.items.0.label'),
                href: PageRoutes.deepDive,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt={t('ctas.items.1.alt')}
              src="/images/deep-dive/pastor-with-first-lady.webp"
              title={t('ctas.items.1.title')}
              description={t('ctas.items.1.description')}
              link={{
                label: t('ctas.items.1.label'),
                href: PageRoutes.about,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt={t('ctas.items.2.alt')}
              src="/images/salvation/olive-branch.webp"
              title={t('ctas.items.2.title')}
              description={t('ctas.items.2.description')}
              link={{
                label: t('ctas.items.2.label'),
                href: PageRoutes.wePathway,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMinistryPage;
