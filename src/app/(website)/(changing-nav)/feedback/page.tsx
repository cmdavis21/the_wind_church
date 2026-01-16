import { Metadata } from 'next';

import VisitorFeedbackForm from '@/components/forms/visitor-feedback-form/VisitorFeedbackForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

export const metadata: Metadata = {
  title: 'Visitor Feedback',
  description:
    'Thank you for visiting our church. Please leave feedback on your experience so we can improve for the body of Christ.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/prayer-requests`,
  },
};

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
