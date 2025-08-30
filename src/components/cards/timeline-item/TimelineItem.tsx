'use client';

import { differenceInDays, isToday } from 'date-fns';
import { Badge, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

import { EventType } from '@/data/types';
import { formatDateMMMddyyyy } from '@/data/format-date';

import EventDetailsModal from '../../modals/event-details-modal/EventDetailsModal';

interface TimelineItemProps {
  event: EventType;
  vertical?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, vertical }) => {
  const [open, setOpen] = useState(false);
  const [addTag, setAddTag] = useState<string | null>(null);

  useEffect(() => {
    const now = Date.now();
    const eventDate = new Date(event.date);
    const daysUntilEvent = differenceInDays(eventDate, now);

    if (daysUntilEvent <= 30 && daysUntilEvent > 0) {
      setAddTag('Upcoming Event');
    } else if (isToday(eventDate)) {
      setAddTag('Happening Today!');
    }
  }, [event.date]);

  return (
    <>
      <EventDetailsModal
        event={event}
        openModal={open}
        setOpenModal={setOpen}
      />

      <div
        className={`relative w-full min-w-[200px] max-w-[700px] flex ${
          vertical ? '' : 'md:flex-col'
        } gap-md`}
      >
        {/* line */}
        {vertical ? (
          <div className="absolute left-[6px] -top-2 w-[0.5px] h-full bg-lightGray" />
        ) : (
          <>
            {/* desktop */}
            <div className="hidden md:block absolute -left-2 top-[6px] h-[0.5px] w-full bg-lightGray" />
            {/* mobile */}
            <div className="md:hidden absolute left-[6px] -top-2 w-[0.5px] h-full bg-lightGray" />
          </>
        )}

        {/* dot */}
        <div className="relative min-w-3 min-h-3 max-w-3 max-h-3 bg-yellow rounded-full" />

        {/* content */}
        <div
          className={`relative max-w-[90%] space-y-xs p-2 ${
            vertical ? '-mt-3 pb-16' : 'max-md:-mt-2 md:-ml-2'
          } rounded-lg`}
        >
          {/* upcoming tag */}
          {addTag && (
            <Badge color="yellow" className="text-black mb-3">
              {addTag}
            </Badge>
          )}
          <h4 className="text-yellow  font-bold leading-none">
            {formatDateMMMddyyyy(event.date)}
          </h4>
          <h3 className="font-bold leading-none">{event.name}</h3>
          {event.description && (
            <div className="body-large line-clamp-2 text-ellipsis">
              {event.description}
            </div>
          )}
          <Button
            pill
            color="info"
            className="whitespace-nowrap"
            onClick={() => setOpen(!open)}
          >
            View details
          </Button>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
