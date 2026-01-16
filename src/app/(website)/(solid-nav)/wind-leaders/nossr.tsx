'use client';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import LeaderCardSkeleton from '@/components/cards/leader-card/LeaderCard.skeleton';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { useGetAllCategorizedLeaders } from '@/data/services/sanity/queries/leaders';

const WindLeadersClient = () => {
  const { leaders, leadersLoading, leadersError } = useGetAllCategorizedLeaders();

  if (leadersError) {
    return (
      <ErrorPage description="There are no Wind Leaders at this time. Please check again later." />
    );
  }

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <PageHeader title="The Leaders" subtitle="Get to know your leaders in the church." />

      {leadersLoading &&
        Array.from({ length: 2 }).map((_, index) => (
          <div key={`wind-leaders-skelton-${index}`} className="flex flex-col gap-xl">
            <SectionHeaderSkeleton />

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <LeaderCardSkeleton key={`wind-leader-desktop-skeleton-${idx}`} />
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <SimpleCarousel
              className="md:hidden"
              slides={Array.from({ length: 5 }).map((_, idx) => (
                <LeaderCardSkeleton key={`wind-leader-mobile-skeleton-${idx}`} />
              ))}
            />
          </div>
        ))}

      {!leadersLoading &&
        leaders &&
        Object.keys(leaders)
          .sort((a, b) => a.localeCompare(b))
          .map((cat) => (
            <div key={`wind-leaders-${cat}`} className="flex flex-col gap-xl">
              <SectionHeader title={cat} subtitle="Select Leaders to learn more" />

              {/* DESKTOP */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
                  {leaders[cat].map((leader) => (
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
                slides={leaders[cat].map((leader) => (
                  <LeaderCard
                    key={`wind-leader-mobile-${leader.first_name}-${leader.last_name}`}
                    {...leader}
                  />
                ))}
              />
            </div>
          ))}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default WindLeadersClient;
