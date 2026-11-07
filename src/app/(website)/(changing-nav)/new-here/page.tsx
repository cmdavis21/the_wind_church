import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import TestimonialCarousel from '@/components/carousels/testimonial-carousel/TestimonialCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import Globe from '@/components/icons/globe';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL, YOUTUBE } from '@/data/server/env.server';
import { getAllTestimonies } from '@/data/server/sanity/queries/testimonials';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'NewHere' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.newHere}`;
  const image = '/images/feedback.webp';

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

const NewHere = async () => {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('NewHere');

  const testimonials = await getAllTestimonies(locale);

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/rental/church-building.webp', alt: t('alt') }}
      />

      {/* INTRO */}
      <div className="max-width-center pt-3xl sm:pt-4xl">
        <div className="flex flex-col gap-lg px-padding max-w-[75%]">
          <h4>{t('description')}</h4>
        </div>
      </div>

      <div
        className="grid gap-xl px-padding pt-xxl"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' }}
      >
        <MultiInfoCard
          label={t('services.label')}
          content={{
            type: 'meeting',
            data: [
              {
                day: t('services.items.0.day'),
                time: t('services.items.0.time'),
                attendance_type: t('services.items.0.attendanceType'),
              },
              {
                day: t('services.items.1.day'),
                time: t('services.items.1.time'),
                attendance_type: t('services.items.1.attendanceType'),
              },
            ],
          }}
        />

        <MultiInfoCard
          label={t('locations.label')}
          content={{
            type: 'link',
            data: [
              {
                icon: Globe,
                text: t('locations.items.0.text'),
                link: {
                  label: t('locations.items.0.label'),
                  href: 'https://www.google.com/maps/dir//The+Wind+Church,+6476+Streeter+Ave,+Riverside,+CA+92504/@33.8722816,-117.5650304,14z',
                },
              },
              {
                icon: Globe,
                text: t('locations.items.1.text'),
                link: { label: t('locations.items.1.label'), href: YOUTUBE },
              },
            ],
          }}
        />

        <MultiInfoCard
          label={t('otherInfo.label')}
          content={{
            type: 'list',
            data: [t('otherInfo.items.0'), t('otherInfo.items.1'), t('otherInfo.items.2')],
          }}
        />
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <SectionHeader subtitle="More about The Wind" title="Frequently Asked Questions" />
        <Accordion
          content={[
            { title: t('faqs.items.0.title'), description: t('faqs.items.0.description') },
            {
              title: t('faqs.items.1.title'),
              description: t.rich('faqs.items.1.description', {
                link: (chunks) => (
                  <Link href={PageRoutes.nextGen} className="text-link underline">
                    {chunks}
                  </Link>
                ),
              }) as string,
            },
            { title: t('faqs.items.2.title'), description: t('faqs.items.2.description') },
            { title: t('faqs.items.3.title'), description: t('faqs.items.3.description') },
            { title: t('faqs.items.4.title'), description: t('faqs.items.4.description') },
            { title: t('faqs.items.5.title'), description: t('faqs.items.5.description') },
          ]}
        />
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-xl md:gap-xxl px-padding pt-3xl sm:pt-4xl max-width-center">
        <CenterTextSection title={t('ctas.title')} description={t('ctas.subtitle')} />
        <div className="flex flex-wrap justify-center gap-xxl">
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.0.alt')}
            title={t('ctas.items.0.title')}
            description={t('ctas.items.0.description')}
            src="/images/give/person-with-box.webp"
            link={{ label: t('ctas.items.0.label'), href: PageRoutes.ministries }}
          />
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.1.alt')}
            title={t('ctas.items.1.title')}
            src="/images/deep-dive/study-bible-with-journal.webp"
            description={t('ctas.items.1.description')}
            link={{ label: t('ctas.items.1.label'), href: PageRoutes.deepDive }}
          />
          <ImageWithTitleDescriptionCard
            alt={t('ctas.items.2.alt')}
            title={t('ctas.items.2.title')}
            src="/images/next-gen/kids-group.webp"
            description={t('ctas.items.2.description')}
            link={{ label: t('ctas.items.2.label'), href: PageRoutes.nextGen }}
          />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex flex-col gap-xl md:gap-xxl pt-3xl sm:pt-4xl px-padding">
        <SectionHeader title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
        <TestimonialCarousel slides={testimonials} />
      </div>
    </div>
  );
};

export default NewHere;
