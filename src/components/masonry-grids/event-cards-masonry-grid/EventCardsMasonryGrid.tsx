'use client';

import React from 'react';
import { Masonry } from 'react-plock';

import EventCard from '@/components/cards/event-card/EventCard';
import { Event } from '@/data/types';

interface ExtendedEventProps extends Event {
  scale: boolean;
}

interface EventCardsMasonryGridProps {
  events: ExtendedEventProps[];
  columns?: number[];
  gap?: number[];
  media?: number[];
}

const EventCardsMasonryGrid: React.FC<EventCardsMasonryGridProps> = ({
  events,
  columns,
  gap,
  media,
}) => {
  const config = (() => {
    switch (events.length) {
      case 1:
        return {
          columns: [1],
          gap: [50],
          media: [640],
        };
      case 2:
        return {
          columns: [1, 2],
          gap: [50, 50],
          media: [640, 768],
        };
      default:
        return {
          columns: [1, 2, 3],
          gap: [50, 50, 50],
          media: [640, 768, 1024],
        };
    }
  })();

  return (
    <Masonry
      items={events}
      config={{
        columns: columns ?? config.columns,
        gap: gap ?? config.gap,
        media: media ?? config.media,
        useBalancedLayout: false,
      }}
      render={(event) => (
        <EventCard key={event.name} event={event} scale={event.scale} />
      )}
    />
  );
};

export default EventCardsMasonryGrid;
