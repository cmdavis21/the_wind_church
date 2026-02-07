'use client';
import { differenceInDays, isToday } from 'date-fns';
import { Badge } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import EventDetailsModal from '@/components/modals/event-details-modal/EventDetailsModal';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { Event } from '@/data/types';

interface EventCardProps {
  event: Event;
  scale?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, scale = true }) => {
  const [open, setOpen] = useState(false);
  const [pastEvent, setPastEvent] = useState(false);
  const [addTag, setAddTag] = useState<{
    label: string;
    color?: string;
  } | null>(null);

  useEffect(() => {
    const now = Date.now();
    const eventDate = new Date(event.date);
    const daysUntilEvent = differenceInDays(eventDate, now);

    if (daysUntilEvent > 0 && daysUntilEvent <= 30) {
      setAddTag({ label: 'Upcoming' });
    } else if (isToday(eventDate)) {
      setAddTag({ label: 'Happening Today!' });
    }

    if (new Date(now) > eventDate) {
      setPastEvent(true);
      setAddTag({ label: 'Past Event', color: 'gray' });
    }
  }, [event.date]);

  return (
    <>
      <EventDetailsModal event={event} openModal={open} setOpenModal={setOpen} />

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-[300px] sm:w-[400px] flex flex-col p-xs cursor-pointer"
      >
        <div
          className={`relative w-full aspect-video rounded-md ${scale ? 'group-hover:scale-105 transition-scale duration-300' : ''} border border-light-gray dark:border-dark-gray`}
        >
          <Image
            fill
            src={event.image.src}
            alt={event.image.alt ?? 'Image of event'}
            className="object-cover rounded-md"
            placeholder="blur"
            blurDataURL="data:..."
          />
          {pastEvent && <div className="absolute inset-0 z-10 bg-black/30 rounded-lg" />}
          {addTag && (
            <div className="absolute top-2 left-2 z-10">
              <Badge color={addTag.color ?? 'yellow'} size="sm">
                {addTag.label}
              </Badge>
            </div>
          )}
        </div>

        <div className="pt-sm text-left">
          <h6 className="text-light-navy dark:text-dark-navy">{formatDateMMMddyyyy(event.date)}</h6>
          <h5>{event.name}</h5>
        </div>
      </button>
    </>
  );
};

export default EventCard;
