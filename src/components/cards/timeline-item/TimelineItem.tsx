'use client';

import { formatDateMMMddyyyy } from '@/data/format-date';
import { Event } from '@/data/types';
import cn from 'classnames';
import { differenceInDays, isToday } from 'date-fns';
import { Badge, Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EventDetailsModal from '../../modals/event-details-modal/EventDetailsModal';

interface TimelineItemProps {
  event: Event;
  vertical?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, vertical = true }) => {
  const t = useTranslations('Events');

  const { name, start_date_time, description, image } = event;

  const [open, setOpen] = useState(false);
  const [pastEvent, setPastEvent] = useState(false);
  const [addTag, setAddTag] = useState<{
    label: string;
    color?: string;
  } | null>(null);

  useEffect(() => {
    const now = Date.now();
    const eventDate = new Date(start_date_time);
    const daysUntilEvent = differenceInDays(eventDate, now);

    if (daysUntilEvent > 0 && daysUntilEvent <= 30) {
      setAddTag({ label: t('upcoming') });
    } else if (isToday(eventDate)) {
      setAddTag({ label: t('happening') });
    }

    if (new Date(now) > eventDate) {
      setPastEvent(true);
      setAddTag({ label: t('past'), color: 'gray' });
    }
  }, [start_date_time]);

  return (
    <>
      <EventDetailsModal event={event} openModal={open} setOpenModal={setOpen} />

      <div
        className={cn(
          !vertical && 'md:flex-col',
          'relative w-full min-w-7xl max-w-[700px] flex gap-md'
        )}
      >
        {/* LINE */}
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

        {/* DOT */}
        <div
          className={cn(
            'relative min-w-3 size-3 aspect-square rounded-full',
            pastEvent ? 'bg-light-gray dark:bg-dark-gray' : 'bg-brand-primary'
          )}
        />

        {/* CONTENT */}
        <div
          className={cn(
            vertical ? '-mt-3 pb-16' : 'max-md:-mt-2 md:-ml-2',
            'relative max-w-[90%] flex flex-col gap-xs p-2'
          )}
        >
          {addTag && (
            <Badge color={addTag.color ?? 'yellow'} size="xs" className="w-full">
              {addTag.label}
            </Badge>
          )}

          <div className="flex gap-xs">
            <div className="relative size-[70px] rounded-md aspect-square">
              <Image fill src={image.src} alt={image.alt} className="object-cover rounded-md" />
              {pastEvent && <div className="absolute inset-0 z-10 bg-black/30 rounded-lg" />}
            </div>

            <div className="flex flex-col gap-xs items-start text-left">
              <h5 className="text-light-navy dark:text-dark-navy font-bold leading-none">
                {formatDateMMMddyyyy(start_date_time)}
              </h5>

              <h4 className="font-bold leading-none">{name}</h4>

              {description && (
                <div className="body-large line-clamp-1 text-ellipsis">{description}</div>
              )}

              <Button color="info" size="xs" onClick={() => setOpen(!open)}>
                {t('view')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
