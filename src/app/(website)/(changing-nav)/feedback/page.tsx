import VisitorFeedbackForm from '@/components/forms/visitor-feedback-form/VisitorFeedbackForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Feedback' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.feedback}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`;
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

const VisitorFeedback = () => (
  <div>
    <PageHero
      size="short"
      title="Visitor Feedback"
      media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg` }}
    />
    <div className="p-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <CenterTextSection
        highlight={[[2, 2]]}
        title="Let us know how we did!"
        description="We'd love to hear about your experience visiting our church—your feedback helps us grow and better serve every guest who walks through our doors."
      />
      <VisitorFeedbackForm />
    </div>
  </div>
);

export default VisitorFeedback;
