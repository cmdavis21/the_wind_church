'use client';

import { formatDateMMMddyyyy } from '@/data/format-date';
import { Event } from '@/data/types';
import { differenceInDays, isToday } from 'date-fns';
import { Badge, Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EventDetailsModal from '../../modals/event-details-modal/EventDetailsModal';

interface TimelineItemProps {
  event: Event;
  vertical?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, vertical = true }) => {
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
      <EventDetailsModal event={event} openModal={open} setOpenModal={setOpen} />

      <div
        className={`relative w-full min-w-7xl max-w-[700px] flex ${
          vertical ? '' : 'md:flex-col'
        } gap-md`}
      >
        {/* line */}
        {vertical ? (
          <div className="absolute left-[6px] -top-2 w-[0.5px] h-full bg-light-gray" />
        ) : (
          <>
            {/* desktop */}
            <div className="hidden md:block absolute -left-2 top-[6px] h-[0.5px] w-full bg-light-gray" />
            {/* mobile */}
            <div className="md:hidden absolute left-[6px] -top-2 w-[0.5px] h-full bg-light-gray" />
          </>
        )}

        {/* dot */}
        <div className="relative min-w-3 size-3 aspect-square bg-brand-primary rounded-full" />

        {/* content */}
        <div
          className={`relative max-w-[90%] flex flex-col gap-xs p-2 ${
            vertical ? '-mt-3 pb-16' : 'max-md:-mt-2 md:-ml-2'
          }`}
        >
          {addTag && (
            <Badge color="yellow" size="xs" className="w-full">
              {addTag}
            </Badge>
          )}
          <div className="flex gap-xs">
            <div className="relative size-[70px] rounded-md aspect-square">
              <Image
                fill
                src={event.image.src}
                alt={event.image.alt}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-xs items-start text-left">
              <h5 className="text-light-navy dark:text-dark-navy font-bold leading-none">
                {formatDateMMMddyyyy(event.date)}
              </h5>
              <h4 className="font-bold leading-none">{event.name}</h4>
              {event.description && (
                <div className="body-large line-clamp-1 text-ellipsis">{event.description}</div>
              )}
              <Button color="info" size="xs" onClick={() => setOpen(!open)}>
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
