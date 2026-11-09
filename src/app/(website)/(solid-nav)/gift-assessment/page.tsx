import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import GiftAssessment from '@/components/forms/gift-assessment/GiftAssessment';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'GiftAssessment' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.giftAssessment}`;
  const image = '/images/rental/church-building.webp';

  return {
    metadataBase: new URL(WEBSITE_URL!),
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

const GiftAssessmentPage = async () => {
  const t = await getTranslations('GiftAssessment');

  return (
    <div>
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />

      <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
        {/* Header */}
        <div className="text-center space-y-lg">
          <h1 className={`font-display md:text-[75px] leading-snug`}>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
          <h4 className="pt-md">
            {t.rich('descriptions.0', {
              bold: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </h4>
          <h4>{t('descriptions.1')}</h4>
        </div>

        {/* Quiz Instructions */}
        <div className="border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-md md:p-lg rounded-xl lg:max-w-[90%] 2xl:max-w-[80%] mx-auto flex flex-col gap-lg">
          <h5>{t('summary')}</h5>

          <div className="flex flex-col gap-md">
            <h5 className="font-bold">{t('instructions.title')}</h5>
            <ol className="px-lg list-outside list-decimal flex flex-col gap-md marker:font-bold">
              <li className="body-large">{t('instructions.items.0')}</li>
              <li className="body-large">{t('instructions.items.1')}</li>
              <li className="body-large">{t('instructions.items.2')}</li>
              <li className="body-large">{t('instructions.items.3')}</li>
            </ol>
          </div>

          <div className="flex flex-col gap-md">
            <h5 className="font-bold">{t('note.title')}</h5>
            <h5>{t('note.description')}</h5>
          </div>

          {/* Download PDF Assessment */}
          <a
            target="_blank"
            download="Spiritual_Gift_Assessment.pdf"
            href="/spiritual-gifts-test.pdf"
          >
            <AnimativeFillButton variant="secondary">{t('optional')}</AnimativeFillButton>
          </a>
        </div>

        {/* Assessment */}
        <div className="w-full lg:max-w-[90%] 2xl:max-w-[80%] mx-auto">
          <GiftAssessment />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 right-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />
    </div>
  );
};

export default GiftAssessmentPage;
