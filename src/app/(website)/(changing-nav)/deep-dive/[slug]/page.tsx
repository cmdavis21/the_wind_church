import Accordion from '@/components/accordion/Accordion';
import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { DEFAULT_LOCALE, Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getAllDeepDives, getDeepDiveBySlug } from '@/data/server/sanity/queries/deep-dives';

import { getLocale, getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const deepDives = await getAllDeepDives(DEFAULT_LOCALE);
  return deepDives.map((deepDive) => ({ slug: deepDive.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'DeepDive' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.deepDive}/${slug}`;
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
      title,
      description,
      images: [image],
    },
  };
}

const SingleDeepDivePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;

  const t = await getTranslations('DeepDive');

  const deepDive = await getDeepDiveBySlug(slug, locale);

  if (!deepDive) {
    return (
      <MediaBackgroundAndContent
        centerContent
        content={<ErrorAlert />}
        background={{ src: '/images/wind_church_building.webp', alt: t('alt') }}
      />
    );
  }

  const {
    name,
    description,
    instructors,
    image,
    meeting_details,
    start_date,
    end_date,
    required_materials,
    accepting_new_students,
  } = deepDive;

  return (
    <div>
      <PageHero size="short" title={name} media={{ src: image.src, alt: image.alt }} />

      <div className="flex flex-col gap-3xl sm:gap-4xl pt-3xl sm:pt-4xl">
        {/* DESCRIPTION */}
        <h4 className="px-padding max-width-center">{description}</h4>

        {/* INSTRUCTORS */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('instructors.title')} subtitle={t('instructors.subtitle')} />

          {/* DESKTOP */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-items-center">
            {instructors.map((leader) => (
              <LeaderCard
                key={`ministry-leader-desktop-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          </div>

          {/* MOBILE */}
          <SimpleCarousel
            className="sm:hidden"
            slides={instructors.map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* MISC DETAILS */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title={t('details.title')} subtitle={t('details.subtitle')} />

          {/* ACCEPTING NEW STUDENTS */}
          {accepting_new_students ? (
            <AlertMessage
              type="success"
              title={t('accepting.title')}
              description={t('accepting.description')}
            />
          ) : (
            <AlertMessage
              type="failure"
              title={t('notAccepting.title')}
              description={t('notAccepting.description')}
            />
          )}

          <div
            className="grid gap-xl"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' }}
          >
            {/* SCHEDULE */}
            <MultiInfoCard
              label={t('schedule')}
              content={{
                type: 'timeline',
                data: {
                  start_date: new Date(start_date),
                  end_date: new Date(end_date),
                },
              }}
            />

            {/* MEETING TIMES */}
            {meeting_details && meeting_details.length > 0 && (
              <MultiInfoCard
                label={t('meets')}
                content={{
                  type: 'meeting',
                  data: meeting_details,
                }}
              />
            )}

            {/* REQUIRED MATERIALS */}
            {required_materials && required_materials.length > 0 && (
              <MultiInfoCard
                label={t('bring')}
                content={{
                  type: 'list',
                  data: required_materials,
                }}
              />
            )}
          </div>
        </div>

        {/* WHAT IS A DEEP DIVE */}
        <MediaBackgroundAndContent
          background={{
            src: '/images/deep-dive/study-bible-with-journal.webp',
            alt: t('describe.alt'),
          }}
          content={
            <div className="flex flex-col gap-md">
              <h2 className="font-bold">{t('describe.title')}</h2>
              <h4 className="lg:max-w-[75%]">{t('describe.description')}</h4>
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
                href: PageRoutes.salvation,
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
                href: PageRoutes.foursquare,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDeepDivePage;
