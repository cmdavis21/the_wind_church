import { Metadata } from 'next';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import EventCard from '@/components/cards/event-card/EventCard';
import TimelineItem from '@/components/cards/timeline-item/TimelineItem';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { getAllEvents } from '@/data/services/sanity/queries/events';
import { Event } from '@/data/types';
import { isAfter } from 'date-fns';

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
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <PageHeader
        title="Events"
        subtitle="Don't miss it! Stay informed on events happening at The Wind."
      />

      {events.length > 0 ? (
        <>
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-xxl 2xl:px-padding place-items-center">
            {events.map((event: Event) => (
              <EventCard
                key={`event-card-${event.name}`}
                event={event}
                scale={isAfter(event.date, new Date())}
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {events.map((event) => (
              <TimelineItem key={event.name} event={event} vertical />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-lg">
          <h3>There are no upcoming events at this time.</h3>
          <h3>Check back later</h3>
        </div>
      )}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Events;
