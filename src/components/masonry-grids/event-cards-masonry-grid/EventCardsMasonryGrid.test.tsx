import { render, screen } from '@testing-library/react';
import React from 'react';

import EventCardsMasonryGrid from './EventCardsMasonryGrid';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockEvents = [
  {
    name: 'Sunday Service',
    date: new Date(),
    time: {
      hour: '7',
      minute: '30',
      timeOfDay: 'PM',
    },
    categories: ['Worship'],
    description: 'Weekly church gathering',
    location: 'Main Hall',
    host: 'Pastor John',
    howToSignup: 'Visit website',
    image: {
      src: '/event-image.jpg',
      alt: 'Sunday Service',
    },
    scale: true,
  },
  {
    name: 'Bible Study',
    date: new Date(),
    time: {
      hour: '7',
      minute: '30',
      timeOfDay: 'PM',
    },
    categories: ['Education'],
    description: 'Weekly Bible study session',
    location: 'Room 3',
    host: 'Elder James',
    howToSignup: 'Sign up at the entrance',
    image: {
      src: '/bible-study.jpg',
      alt: 'Bible Study',
    },
    scale: false,
  },
];

describe('EventCardsMasonryGrid Component', () => {
  it('renders without crashing', () => {
    render(<EventCardsMasonryGrid events={[]} />);
    expect(screen.getByTestId('masonry-grid')).toBeInTheDocument();
  });

  it('displays event cards when events are provided', () => {
    render(<EventCardsMasonryGrid events={mockEvents} />);

    expect(screen.getByText('Sunday Service')).toBeInTheDocument();
    expect(screen.getByText('Bible Study')).toBeInTheDocument();
  });

  it('renders the correct number of events', () => {
    render(<EventCardsMasonryGrid events={mockEvents} />);

    const eventCards = screen.getAllByRole('button');
    expect(eventCards.length).toBe(mockEvents.length);
  });
});
