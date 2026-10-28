'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import MinistryCard from '@/components/cards/ministry-card/MinistryCard';
import MinistryCardSkeleton from '@/components/cards/ministry-card/MinistryCard.skeleton';
import MinistryConnectionForm from '@/components/forms/ministry-connection-form/MinistryConnectionForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import { useGetAllMinistries } from '@/data/client/sanity/ministries';
import { useTranslations } from 'next-intl';

import React from 'react';

const MinistriesClient = () => {
  const t = useTranslations('Ministries');

  const { ministries, ministriesLoading, ministriesError } = useGetAllMinistries();

  if (ministriesError) {
    return (
      <MediaBackgroundAndContent
        centerContent
        content={<ErrorAlert />}
        background={{ src: '/images/people-serving.webp', alt: t('alt') }}
      />
    );
  }

  const bibleVerses: { passage: string; verse: string }[] = [
    { passage: t('scriptures.0.passage'), verse: t('scriptures.0.verse') },
    { passage: t('scriptures.1.passage'), verse: t('scriptures.1.verse') },
    { passage: t('scriptures.2.passage'), verse: t('scriptures.2.verse') },
    { passage: t('scriptures.3.passage'), verse: t('scriptures.3.verse') },
    { passage: t('scriptures.4.passage'), verse: t('scriptures.4.verse') },
    { passage: t('scriptures.5.passage'), verse: t('scriptures.5.verse') },
    { passage: t('scriptures.6.passage'), verse: t('scriptures.6.verse') },
    { passage: t('scriptures.7.passage'), verse: t('scriptures.7.verse') },
    { passage: t('scriptures.8.passage'), verse: t('scriptures.8.verse') },
    { passage: t('scriptures.9.passage'), verse: t('scriptures.9.verse') },
    { passage: t('scriptures.10.passage'), verse: t('scriptures.10.verse') },
    { passage: t('scriptures.11.passage'), verse: t('scriptures.11.verse') },
    { passage: t('scriptures.12.passage'), verse: t('scriptures.12.verse') },
    { passage: t('scriptures.13.passage'), verse: t('scriptures.13.verse') },
    { passage: t('scriptures.14.passage'), verse: t('scriptures.14.verse') },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title={t('title')}
        description={t('subtitle')}
        media={{ src: '/images/people-serving.webp', alt: t('alt') }}
      />

      <div className="p-padding flex flex-col gap-3xl sm:gap-4xl lg:gap-5xl max-width-center">
        {/* LOADING */}
        {ministriesLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <React.Fragment key={`ministry-card-skeleton-${index}`}>
              <MinistryCardSkeleton flip={index % 2 === 0} />

              {index % 2 === 0 && (
                <PassageQuote
                  passage={bibleVerses[index]?.passage}
                  verse={bibleVerses[index]?.verse}
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
                    passage={bibleVerses[index]?.passage}
                    verse={bibleVerses[index]?.verse}
                  />
                )}
              </React.Fragment>
            ))}

            <div className="flex flex-col gap-xxl">
              <CenterTextSection
                title={t('form.header.title')}
                description={t('form.header.subtitle')}
              />
              <MinistryConnectionForm
                ministryNames={ministries.map((i) => i.name).sort((a, b) => a.localeCompare(b))}
              />
            </div>
          </>
        )}
      </div>

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default MinistriesClient;
