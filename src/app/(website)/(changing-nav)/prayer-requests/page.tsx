import { Metadata } from 'next';

import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

export const metadata: Metadata = {
  title: 'Prayer Requests',
  description:
    'Let us pray with you. Submit your prayer requests and our team will stand with you in faith.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/prayer-requests`,
  },
};

const PrayerRequests = () => (
  <div>
    <PageHero
      short
      title="Prayer Requests"
      media={{
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
      }}
    />
    <div className="p-padding flex flex-col gap-xl md:gap-xxl">
      <CenterTextSection
        noPadding
        title="We're a family going through life together"
        highlight={[[2, 2]]}
        description="We love to celebrate the Lord's blessings and support each other through difficult times. We're here for one another and for you."
      />
      <PrayerRequestForm />
    </div>
  </div>
);

export default PrayerRequests;
