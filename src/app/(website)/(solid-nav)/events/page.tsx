import { Metadata } from 'next';
import React from 'react';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import TimelineItem from '@/components/cards/timeline-item/TimelineItem';
import ErrorMessage from '@/components/error-message/ErrorMessage';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import EventCardsMasonryGrid from '@/components/masonry-grids/event-cards-masonry-grid/EventCardsMasonryGrid';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { Event } from '@/data/types';
import { getAllEvents } from '@/data/services/sanity/queries/events';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Stay up to date with upcoming church events, services, and community gatherings at The Wind Church.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/events`,
  },
};

const Events = async () => {
  const events = await getAllEvents();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader
        title="Events"
        subtitle="Don't miss it! Stay informed on events happening at The Wind."
      />

      {events.length > 0 ? (
        <>
          {/* Desktop */}
          <div className="hidden md:block 2xl:px-padding">
            <EventCardsMasonryGrid
              events={events.map((event: Event) => ({ ...event, scale: true }))}
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {events.map((event) => (
              <TimelineItem key={event.name} event={event} vertical />
            ))}
          </div>
        </>
      ) : (
        <ErrorMessage
          message="Sorry, there are no upcoming events at this time."
          routeToPage={{
            label: 'Plan your visit',
            link: PageRoutes.planYourVisit,
          }}
        />
      )}

      <PageScrollUpButton />
    </div>
  );
};

export default Events;
