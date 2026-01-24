'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import EventCard from '@/components/cards/event-card/EventCard';
import TimelineItem from '@/components/cards/timeline-item/TimelineItem';
import SelectInput from '@/components/forms/inputs/select-input/SelectInput';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import Filter from '@/components/icons/filter';
import { EVENT_CATEGORIES } from '@/data/constants';
import { useGetAllEvents } from '@/data/services/sanity/queries/events';
import { isAfter } from 'date-fns';
import { useState } from 'react';

const EventsClient = () => {
  const [filter, setFilter] = useState('');
  const { events, eventsLoading, eventsError } = useGetAllEvents();
  const filteredEvents =
    events?.filter((e) => filter === '' || e.categories?.includes(filter)) ?? [];

  if (eventsError) return <ErrorAlert />;

  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl max-width-center">
      <PageHeader
        title="Events"
        subtitle="Don't miss it! Stay informed on events happening at The Wind."
      />

      {/* FILTERING */}
      {events && (
        <div className="flex flex-wrap justify-between items-center gap-sm w-full pb-sm border border-x-0 border-t-0 border-light-gray dark:border-dark-gray">
          <h4 className="font-bold">({filteredEvents.length}) Events</h4>
          <div className="max-md:w-full">
            <SelectInput
              icon={Filter}
              className="md:w-fit"
              disabled={eventsLoading || eventsError}
              onChange={(e) => setFilter(e.target.value)}
              options={[
                { label: 'All Events', value: '' },
                ...EVENT_CATEGORIES.map((e) => ({ label: e, value: e })),
              ]}
            />
          </div>
        </div>
      )}

      {!eventsLoading && (
        <>
          {events && events.length > 0 ? (
            <>
              {filteredEvents.length === 0 ? (
                <div className="flex flex-col gap-xs">
                  <h4 className="text-center">No events for this category.</h4>
                  <h4 className="text-center">Try another selection.</h4>
                </div>
              ) : (
                <>
                  {/* Desktop */}
                  <div className="hidden md:grid grid-cols-3 gap-xxl place-items-center">
                    {filteredEvents.map((event) => (
                      <EventCard
                        key={`event-card-${event.name}`}
                        event={event}
                        scale={isAfter(event.date, new Date())}
                      />
                    ))}
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden">
                    {filteredEvents.map((event) => (
                      <TimelineItem key={event.name} event={event} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-xs">
              <h4 className="text-center">There are no upcoming events at this time.</h4>
              <h4 className="text-center">Check back later</h4>
            </div>
          )}
        </>
      )}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default EventsClient;
