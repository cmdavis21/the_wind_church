import Accordion from '@/components/accordion/Accordion';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import EventCard from '@/components/cards/event-card/EventCard';
import ImageCard from '@/components/cards/image-card/ImageCard';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import NextGenGuardianInquiryForm from '@/components/forms/next-gen-guardian-inquiry-form/NextGenGuardianInquiryForm';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import Baby from '@/components/icons/baby';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { PageRoutes } from '@/data/page-routes';
import { getNextGenGallery } from '@/data/server/aws/s3/gallery';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getMinistryEvents } from '@/data/server/sanity/queries/events';
import { getNextGenPage } from '@/data/server/sanity/queries/next-gen-page';
import { Event } from '@/data/types';
import { isAfter } from 'date-fns';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NextGen' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.nextGen}`;
  const image = '/images/next-gen/kids-group.webp';
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

const NextGen = async () => {
  const t = await getTranslations('NextGen');

  const pageInfo = await getNextGenPage();
  const gallery = await getNextGenGallery();
  const events = await getMinistryEvents('Next Gen');

  return (
    <div className="flex flex-col gap-3xl sm:gap-4xl">
      <div className="px-padding max-width-center">
        <PageHeaderWithBackground
          title={t('title')}
          subtitle={t('subtitle')}
          media={{ src: '/images/next-gen/kids-group.webp', alt: t('alt') }}
        />
      </div>

      {/* CORE PRINCIPLES */}
      <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
        <CenterTextSection title={t('principles.title')} description={t('principles.subtitle')} />

        <div className="flex flex-wrap justify-center gap-xxl">
          <ImageWithTitleDescriptionCard
            src="/images/next-gen/kids-learning.webp"
            alt={t('principles.items.0.alt')}
            title={t('principles.items.0.title')}
            description={t('principles.items.0.subtitle')}
          />
          <ImageWithTitleDescriptionCard
            src="/images/next-gen/kids-hugging.webp"
            alt={t('principles.items.1.alt')}
            title={t('principles.items.1.title')}
            description={t('principles.items.1.subtitle')}
          />
          <ImageWithTitleDescriptionCard
            src="/images/next-gen/kids-drawing.webp"
            alt={t('principles.items.2.alt')}
            title={t('principles.items.2.title')}
            description={t('principles.items.2.subtitle')}
          />
        </div>

        {pageInfo && pageInfo.cirriculum_file && (
          <a
            className="mx-auto"
            href={pageInfo.cirriculum_file}
            download="the_wind_church_youth_service_cirriculum.pdf"
          >
            <Button pill color="primary" size="lg">
              {t('download')}
            </Button>
          </a>
        )}
      </div>

      <div className="px-padding max-width-center">
        <PassageQuote passage={t('scripture.passage')} verse={t('scripture.verse')} />
      </div>

      {/* EDUCATORS */}
      {pageInfo && pageInfo.educators && (
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('educators.title')} subtitle={t('educators.subtitle')} />

          <div>
            {/* Desktop */}
            <div className="hidden sm:flex flex-wrap gap-xl">
              {pageInfo.educators.map((educator) => (
                <LeaderCard
                  key={`youth-service-educator-${educator.first_name}-${educator.last_name}`}
                  {...educator}
                />
              ))}
            </div>

            {/* Mobile */}
            <SimpleCarousel
              className="sm:hidden"
              slides={pageInfo.educators.map((educator) => (
                <LeaderCard
                  key={`mobile-youth-service-educator-${educator.first_name}-${educator.last_name}`}
                  {...educator}
                />
              ))}
            />
          </div>
        </div>
      )}

      {/* EVENTS */}
      <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
        <CenterTextSection title={t('events.title')} description={t('events.subtitle')} />

        {events && events.length > 0 ? (
          <div className="w-full flex flex-wrap justify-center gap-xxl">
            {events.slice(0, 3).map((event: Event) => (
              <EventCard
                key={`event-card-${event.name}`}
                event={event}
                scale={isAfter(event.date, new Date())}
              />
            ))}
          </div>
        ) : (
          <h4 className="text-center">{t('events.empty')}</h4>
        )}

        <Link href={PageRoutes.events} className="mx-auto">
          <Button pill color="primary" size="lg">
            {t('events.cta')}
          </Button>
        </Link>
      </div>

      {/* GALLERY */}
      {gallery && gallery.urls.length > 0 && (
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

          {/* Desktop */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
            {gallery.urls.slice(0, 4).map((src) => (
              <ImageCard key={`wind-gallery-${src}`} src={src} alt={t('gallery.photoAlt')} />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            showDots={false}
            className="sm:hidden"
            slides={gallery.urls.slice(0, 4).map((src) => (
              <ImageCard key={`wind-gallery-mobile-${src}`} src={src} alt={t('gallery.photoAlt')} />
            ))}
          />

          <Link href={PageRoutes.gallery}>
            <Button pill color="primary" size="lg">
              {t('gallery.cta')}
            </Button>
          </Link>
        </div>
      )}

      {/* NURSERY CTA */}
      <MediaBackgroundAndContent
        background={{ src: '/images/next-gen/baby-with-blocks.webp', alt: t('nursery.alt') }}
        content={
          <div className="flex flex-col">
            <Baby className="size-[60px] fill-white" />
            <h3 className="pt-sm">{t('nursery.title')}</h3>
            <h3>{t('nursery.subtitle')}</h3>
          </div>
        }
      />

      {/* FAQs */}
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

      {/* GUARDIAN INQUIRY */}
      <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
        <CenterTextSection title={t('form.header.title')} description={t('form.header.subtitle')} />
        <NextGenGuardianInquiryForm />
      </div>

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default NextGen;
