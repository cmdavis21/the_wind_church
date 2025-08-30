'use client';

import { differenceInDays, isToday } from 'date-fns';
import { Badge } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Event } from '@/data/types';
import { formatDateMMMddyyyy } from '@/data/format-date';
import EventDetailsModal from '@/components/modals/event-details-modal/EventDetailsModal';

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
      <EventDetailsModal
        event={event}
        openModal={open}
        setOpenModal={setOpen}
      />

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full h-full min-w-[200px] max-w-[350px] mx-auto flex flex-col gap-md"
      >
        <div
          className={`relative w-full aspect-video ${
            scale && !pastEvent ? 'group-hover:aspect-[4/3]' : ''
          } transition-all duration-500 border border-lightGray dark:border-softGray rounded-lg`}
        >
          {pastEvent && (
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/30 rounded-lg" />
          )}
          <Image
            fill
            src={event.image.src}
            alt={event.image.alt ?? 'Image of event'}
            className="object-cover rounded-[10px]"
            placeholder="blur"
            blurDataURL="data:..."
          />
          {addTag && (
            <div className="absolute top-2 left-2 z-10">
              <Badge
                color={addTag.color ?? 'yellow'}
                size="sm"
                className="text-black"
              >
                {addTag.label}
              </Badge>
            </div>
          )}
        </div>

        <div className="text-left flex flex-col gap-xs">
          <h6 className="font-bold text-softYellow">
            {formatDateMMMddyyyy(event.date)}
          </h6>
          <h5 className="font-bold">{event.name}</h5>
        </div>
      </button>
    </>
  );
};

export default EventCard;
