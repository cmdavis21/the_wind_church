import React from 'react';
import { Metadata } from 'next';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { WEBSITE_BASE_URL } from '@/data/constants';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import { getAllCategorizedLeaders } from '@/data/services/sanity/queries/leaders';

export const metadata: Metadata = {
  title: 'WIND Leaders',
  description:
    'Meet the dedicated leaders who serve and guide our church community with wisdom and compassion.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/wind-leaders`,
  },
};

const WindLeadersClient = async () => {
  const leadersByCategory = await getAllCategorizedLeaders();

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader title="The Leaders" subtitle="Get to know your leaders in the church." />

      {leadersByCategory &&
        Object.keys(leadersByCategory)
          .sort((a, b) => a.localeCompare(b))
          .map((cat) => (
            <div key={`wind-leaders-${cat}`} className="flex flex-col gap-xl">
              <SectionHeader noPadding title={cat} subtitle="Select Leaders to learn more" />

              {/* DESKTOP */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
                  {leadersByCategory[cat].map((leader) => (
                    <LeaderCard
                      key={`wind-leader-desktop-${leader.first_name}-${leader.last_name}`}
                      {...leader}
                    />
                  ))}
                </div>
              </div>

              {/* MOBILE */}
              <SimpleCarousel
                className="md:hidden"
                slides={leadersByCategory[cat].map((leader) => (
                  <LeaderCard
                    key={`wind-leader-mobile-${leader.first_name}-${leader.last_name}`}
                    {...leader}
                  />
                ))}
              />
            </div>
          ))}

      {/* Page Scroll Button */}
      <PageScrollUpButton />
    </div>
  );
};

export default WindLeadersClient;
