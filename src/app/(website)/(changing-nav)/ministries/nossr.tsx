'use client';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import MinistryCard from '@/components/cards/ministry-card/MinistryCard';
import MinistryCardSkeleton from '@/components/cards/ministry-card/MinistryCard.skeleton';
import ErrorPage from '@/components/error-page/ErrorPage';
import MinistryConnectionForm from '@/components/forms/ministry-connection-form/MinistryConnectionForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useGetAllMinistries } from '@/data/services/sanity/queries/ministries';
import React from 'react';

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

const MinistriesClient = () => {
  const { ministries, ministriesLoading, ministriesError } = useGetAllMinistries();

  if (ministriesError) {
    return (
      <ErrorPage description="There are no ministries at this time. Please check again later." />
    );
  }

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
        {/* LOADING */}
        {ministriesLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <React.Fragment key={`ministry-card-skeleton-${index}`}>
              <MinistryCardSkeleton flip={index % 2 === 0} />

              {index % 2 === 0 && (
                <PassageQuote
                  passage={BIBLICAL_VERSES[index]?.passage}
                  verse={BIBLICAL_VERSES[index]?.verse}
                />
              )}
            </React.Fragment>
          ))}

        {!ministriesLoading && (
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
        )}
      </div>

      <PageScrollUpButton />
    </div>
  );
};

export default MinistriesClient;
