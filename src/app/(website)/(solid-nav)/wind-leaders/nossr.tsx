'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import LeaderCardSkeleton from '@/components/cards/leader-card/LeaderCard.skeleton';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import SelectInput from '@/components/forms/inputs/select-input/SelectInput';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import Filter from '@/components/icons/filter';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { useGetAllCategorizedLeaders } from '@/data/client/sanity/leaders';
import { useState } from 'react';

const WindLeadersClient = () => {
  const [filter, setFilter] = useState('');
  const [active, setActive] = useState<{ cat: string; index: number } | null>(null);
  const { leaders, leadersLoading, leadersError } = useGetAllCategorizedLeaders();

  if (leadersError) return <ErrorAlert />;

  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl max-width-center">
      <PageHeader title="The Leaders" subtitle="Get to know your leaders in the church." />

      {/* FILTERING */}
      {leaders && (
        <div className="w-full flex md:justify-end">
          <SelectInput
            icon={Filter}
            className="sm:w-fit sm:self-end"
            disabled={leadersLoading || leadersError}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { label: 'All Leaders', value: '' },
              ...Object.entries(leaders).map(([k, _]) => ({ label: k, value: k })),
            ]}
          />
        </div>
      )}

      {leadersLoading &&
        Array.from({ length: 2 }).map((_, index) => (
          <div key={`wind-leaders-skelton-${index}`} className="flex flex-col gap-xl md:gap-xxl">
            <SectionHeaderSkeleton />

            {/* DESKTOP */}
            <div className="hidden sm:flex flex-wrap gap-xl">
              {Array.from({ length: 5 }).map((_, idx) => (
                <LeaderCardSkeleton key={`wind-leader-desktop-skeleton-${idx}`} />
              ))}
            </div>

            {/* MOBILE */}
            <SimpleCarousel
              disable
              className="sm:hidden"
              slides={Array.from({ length: 5 }).map((_, idx) => (
                <LeaderCardSkeleton key={`wind-leader-mobile-skeleton-${idx}`} />
              ))}
            />
          </div>
        ))}

      {!leadersLoading &&
        leaders &&
        Object.entries(leaders)
          .sort(([a], [b]) => a.localeCompare(b))
          .filter(([cat]) => filter === '' || cat === filter)
          .map(([cat, leaderList]) => (
            <div key={`wind-leaders-${cat}`} className="flex flex-col gap-xl md:gap-xxl">
              <SectionHeader title={cat} subtitle="Select Leaders to learn more" />

              {/* DESKTOP */}
              <div className="hidden sm:flex flex-wrap gap-xl">
                {leaderList.map((leader, index) => {
                  const isSelected = active?.cat === cat && active?.index === index;
                  return (
                    <LeaderCard
                      key={`wind-leader-desktop-${leader.first_name}-${leader.last_name}`}
                      onToggle={() => {
                        if (isSelected) return setActive(null);
                        setActive({ cat, index });
                      }}
                      isActive={isSelected}
                      {...leader}
                    />
                  );
                })}
              </div>

              {/* MOBILE */}
              <SimpleCarousel
                className="sm:hidden"
                slides={leaderList.map((leader, index) => {
                  const isSelected = active?.cat === cat && active?.index === index;
                  return (
                    <LeaderCard
                      key={`wind-leader-mobile-${leader.first_name}-${leader.last_name}`}
                      onToggle={() => {
                        if (isSelected) return setActive(null);
                        setActive({ cat, index });
                      }}
                      isActive={isSelected}
                      {...leader}
                    />
                  );
                })}
              />
            </div>
          ))}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default WindLeadersClient;
