import { Metadata } from 'next';
import React from 'react';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import MinistryCard from '@/components/cards/ministry-card/MinistryCard';
import ErrorMessage from '@/components/error-message/ErrorMessage';
import MinistryConnectionForm from '@/components/forms/ministry-connection-form/MinistryConnectionForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { getAllMinistries } from '@/data/services/sanity/queries/ministries';

export const metadata: Metadata = {
  title: 'Ministries',
  description:
    'Explore ministries at The Wind Church for every age and stage—join us in growing together in Christ.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/ministries`,
  },
};

const Ministries = async () => {
  const ministries = await getAllMinistries();
  const BIBLICAL_VERSES: { passage: string; verse: string }[] = [
    {
      passage:
        'So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up.',
      verse: 'Ephesians 4:11-12',
    },
    {
      passage:
        'Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.',
      verse: '1 Peter 4:10',
    },
    {
      passage:
        'Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction.',
      verse: '2 Timothy 4:2',
    },
    {
      passage:
        'Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction.',
      verse: '2 Timothy 4:2',
    },
    {
      passage:
        'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.',
      verse: 'Colossians 3:23-24',
    },
  ];
  return (
    <div>
      <PageHero
        short
        title="Ministries"
        subtitle="Grow in love and service by joining a ministry"
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/food_bank.jpg`,
        }}
      />

      <div className="p-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        {ministries && ministries.length > 0 ? (
          <>
            {ministries.map((ministry, index) => (
              <React.Fragment key={`ministries-page-${ministry.name}`}>
                <MinistryCard {...ministry} flip={index % 2 === 0} />

                {index % 2 === 0 && (
                  <PassageQuote
                    passage={BIBLICAL_VERSES[index]?.passage}
                    verse={BIBLICAL_VERSES[index]?.verse}
                  />
                )}
              </React.Fragment>
            ))}

            <div className="flex flex-col gap-xxl">
              <CenterTextSection
                noPadding
                title="Not sure where to start?"
                description="Tell us what you're interested in, and we’ll help you get connected."
              />
              <MinistryConnectionForm
                ministryNames={ministries.map((i) => i.name).sort((a, b) => a.localeCompare(b))}
              />
            </div>
          </>
        ) : (
          <ErrorMessage message="There are no ministries at this time. Please check again later." />
        )}
      </div>

      <PageScrollUpButton />
    </div>
  );
};

export default Ministries;
