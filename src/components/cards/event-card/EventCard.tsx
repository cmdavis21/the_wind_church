'use client';
import { differenceInDays, format, isToday } from 'date-fns';
import { Badge } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import EventDetailsModal from '@/components/modals/event-details-modal/EventDetailsModal';

import { useDominantColor } from '@/data/client/use-dominant-color';
import { Event } from '@/data/types';
import { darkenRgb } from '@/data/utils';

interface EventCardProps {
  event: Event;
  scale?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, scale = true }) => {
  const { name, time, location, image } = event;

  const [open, setOpen] = useState(false);
  const [pastEvent, setPastEvent] = useState(false);
  const [addTag, setAddTag] = useState<{ label: string; color?: string } | null>(null);

  const { color } = useDominantColor(event.image.src, 'bottom');
  const panelColor = darkenRgb(color, 0.4);

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

  const eventDate = new Date(event.date);

  return (
    <>
      <EventDetailsModal event={event} openModal={open} setOpenModal={setOpen} />

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative w-[300px] sm:w-[350px] flex flex-col overflow-hidden rounded-3xl text-left shadow-lg
          ${scale ? 'transition-transform duration-300 hover:scale-[1.02]' : ''}
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
        style={{ backgroundColor: panelColor }}
      >
        {/* PHOTO — full bleed, fixed aspect, clipped by the card's own overflow-hidden */}
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            fill
            src={image.src}
            alt={image.alt ?? 'Image of event'}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            placeholder="blur"
            blurDataURL="data:..."
          />

          {pastEvent && <div className="absolute inset-0 z-10 bg-black/40" />}

          {addTag && (
            <div className="absolute top-3 left-3 z-20">
              <Badge color={addTag.color ?? 'yellow'} size="sm">
                {addTag.label}
              </Badge>
            </div>
          )}

          {/* OMBRE — softened with alpha stops, fades out fully on hover to reveal the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 transition-opacity duration-500 ease-out group-hover:opacity-0 motion-reduce:transition-none"
            // style={{
            //   background: `linear-gradient(to bottom, transparent 38%, ${rgbToRgba(color, 0.55)} 75%, ${rgbToRgba(panelColor, 0.8)} 100%)`,
            // }}
            style={{
              background: `linear-gradient(to bottom, transparent 38%, ${color} 72%, ${panelColor} 100%)`,
            }}
          />

          {/* TITLE — fades with the ombre since it needs the gradient's contrast to stay readable */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-lg pb-md transition-opacity duration-300 ease-out group-hover:opacity-0 motion-reduce:transition-none">
            <h3 className="text-white font-bold leading-tight">{name}</h3>
          </div>
        </div>

        {/* DETAILS ROW */}
        <div className="relative z-20 flex items-center gap-3 px-lg py-md">
          {/* DATE BADGE */}
          <div
            style={{ border: 1, borderColor: color }}
            className="flex flex-col items-center justify-center shrink-0 w-14 rounded-lg bg-white text-light-gray overflow-hidden"
          >
            <span
              style={{ backgroundColor: color }}
              className="w-full text-center text-[10px] font-bold uppercase tracking-wide text-white py-0.5"
            >
              {format(eventDate, 'MMM')}
            </span>
            <span className="text-lg font-bold text-black">{format(eventDate, 'd')}</span>
            <span className="w-full text-center text-[10px] font-medium uppercase leading-none text-gray-500 pb-1">
              {format(eventDate, 'EEE')}
            </span>
          </div>

          {/* VENUE + TIME */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm truncate">{location.name}</p>
            <p className="text-white/70 text-xs leading-snug line-clamp-1">
              {location.address}, {location.city} {location.city} {location.zip}
            </p>
            {location.sublocation && (
              <p className="text-white/70 text-xs leading-snug">{location.sublocation}</p>
            )}
            <p className="text-white font-semibold text-sm whitespace-nowrap">
              {time.hour}:{time.minute} {time.time_of_day} {time.time_zone}
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

export default EventCard;
