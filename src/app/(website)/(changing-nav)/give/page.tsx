import Accordion from '@/components/accordion/Accordion';
import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import HiddenTextCard from '@/components/cards/hidden-text-card/HiddenTextCard';
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
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'Give' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.give}`;
  const image = '/images/give/person-praising.webp';

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

const Give = async () => {
  const t = await getTranslations('Give');

  const reasonsToGive = [
    {
      title: 'reasons.0.title',
      description: t('reasons.0.description'),
      scriptureList: [t('reasons.0.scripture1'), t('reasons.0.scripture2')],
    },
    {
      title: 'reasons.1.title',
      description: t('reasons.1.description'),
      scriptureList: [
        t('reasons.1.scripture1'),
        t('reasons.1.scripture2'),
        t('reasons.1.scripture3'),
        t('reasons.1.scripture4'),
      ],
    },
    {
      title: 'reasons.2.title',
      description: t('reasons.2.description'),
      scriptureList: [
        t('reasons.2.scripture1'),
        t('reasons.2.scripture2'),
        t('reasons.2.scripture3'),
      ],
    },
  ];

  const otherWaysToGiveArr = [
    {
      image: {
        src: '/images/give/group-hands.webp',
        alt: t('waysToGive.items.0.alt'),
      },
      title: t('waysToGive.items.0.title'),
      description: t('waysToGive.items.0.description'),
    },
    {
      image: {
        src: '/images/give/person-on-phone.webp',
        alt: t('waysToGive.items.1.alt'),
      },
      title: t('waysToGive.items.1.title'),
      description: t('waysToGive.items.1.description'),
    },
    {
      image: {
        src: '/images/give/offering-box.webp',
        alt: t('waysToGive.items.2.alt'),
      },
      title: t('waysToGive.items.2.title'),
      description: t('waysToGive.items.2.description'),
    },
    {
      image: {
        src: '/images/give/mailbox.webp',
        alt: t('waysToGive.items.3.alt'),
      },
      title: t('waysToGive.items.3.title'),
      description: t('waysToGive.items.3.description'),
    },
    {
      image: {
        src: '/images/give/garage.webp',
        alt: t('waysToGive.items.4.alt'),
      },
      title: t('waysToGive.items.4.title'),
      description: t('waysToGive.items.4.description'),
    },
    {
      image: {
        src: '/images/give/person-with-box.webp',
        alt: t('waysToGive.items.5.alt'),
      },
      title: t('waysToGive.items.5.title'),
      description: t('waysToGive.items.5.description'),
    },
  ];

  const faqContent = [
    {
      title: t('faq.items.0.title'),
      description: t('faq.items.0.description'),
    },
    {
      title: t('faq.items.1.title'),
      description: t('faq.items.1.description'),
    },
    {
      title: t('faq.items.2.title'),
      description: t('faq.items.2.description'),
    },
    {
      title: t('faq.items.3.title'),
      description: t('faq.items.3.description'),
    },
    {
      title: t('faq.items.4.title'),
      description: t('faq.items.4.description'),
    },
    {
      title: t('faq.items.5.title'),
      description: t('faq.items.5.description'),
    },
    {
      title: t('faq.items.6.title'),
      description: t('faq.items.6.description'),
    },
    {
      title: t('faq.items.7.title'),
      description: t('faq.items.7.description'),
    },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/give/person-praising.webp', alt: t('alt') }}
      />

      {/* WHY WE GIVE */}
      <div className="max-width-center pt-3xl sm:pt-4xl">
        <div className="flex flex-col gap-xxl px-padding">
          {reasonsToGive.map((r) => (
            <div key={`reasons-to-give-${r.title}`} className="flex flex-col gap-sm">
              <h2>
                {t.rich(r.title, {
                  bold: (chunks) => (
                    <span className="font-display text-brand-primary">{chunks}</span>
                  ),
                })}
              </h2>
              <h4 className="lg:max-w-[55%]">{r.description}</h4>
              <ScriptureList scriptures={r.scriptureList} />
            </div>
          ))}

          {/* DONATE CTA */}
          <Link href={PageRoutes.pushpay} className="max-sm:w-full">
            <AnimativeFillButton variant="secondary">{t('donate')}</AnimativeFillButton>
          </Link>
        </div>
      </div>

      {/* OTHER WAYS TO GIVE */}
      <div className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title={t('waysToGive.title')} description={t('waysToGive.subtitle')} />

        {/* Tablet/Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
          {otherWaysToGiveArr.map((item) => (
            <HiddenTextCard key={`desktop-${item.title}`} {...item} />
          ))}
        </div>

        {/* Mobile */}
        <SimpleCarousel
          className="sm:hidden"
          slides={otherWaysToGiveArr.map((item) => (
            <HiddenTextCard key={`mobile-${item.title}`} {...item} />
          ))}
        />
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center py-3xl sm:py-4xl px-padding">
        <SectionHeader title={t('faq.title')} subtitle={t('faq.subtitle')} />
        <Accordion content={faqContent} />
      </div>

      {/* THANK YOU MESSAGE */}
      <MediaBackgroundAndContent
        centerContent
        color={ColorBackground.BLUE}
        content={
          <div className="max-w-3xl mx-auto space-y-md">
            <h3 className="text-center">
              {t.rich('thanks.thankYou', {
                bold: (chunks) => <span className="font-display text-brand-primary">{chunks}</span>,
              })}
            </h3>

            <h4 className="text-center">{t('thanks.blessing')}</h4>

            <h4 className="text-center">
              {t.rich('thanks.contact', {
                email: (chunks) => (
                  <Link
                    href="mailto:thewindchurch@outlook.com"
                    className="font-semibold underline break-normal"
                  >
                    {chunks}
                  </Link>
                ),
                phone: (chunks) => (
                  <Link href="tel:9513590203" className="font-semibold underline">
                    {chunks}
                  </Link>
                ),
              })}
            </h4>

            <h3 className="text-center">
              {t.rich('thanks.partners', {
                bold: (chunks) => <span className="font-display text-brand-primary">{chunks}</span>,
              })}
            </h3>
          </div>
        }
      />

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Give;
