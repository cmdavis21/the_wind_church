import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { EventType } from '@/data/types';

import TimelineItem from './TimelineItem';

jest.mock('../../modals/event-details-modal/EventDetailsModal', () => () => (
  <div data-testid="event-details-modal" />
));

describe('TimelineItem', () => {
  const event: EventType = {
    name: 'Community Service Day',
    description:
      'A day to give back to the community with various service activities.',
    date: '2024-09-20',
    time: '10:00 AM',
    location: 'City Center Park',
    hostedBy: 'Volunteer Group',
    howToSignup: 'Sign up online',
    categories: ['Charity', 'Community'],
    helpNeeded: ['Setup', 'Logistics'],
    image: {
      src: '/event-image.jpg',
      alt: 'Event banner',
    },
  };

  it('should render event details correctly', () => {
    render(<TimelineItem event={event} vertical={false} />);

    expect(screen.getByText('Community Service Day')).toBeInTheDocument();
    expect(screen.getByText('Sep 20, 2024')).toBeInTheDocument(); // Assuming date format function works
    expect(
      screen.getByText(
        'A day to give back to the community with various service activities.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view details/i })
    ).toBeInTheDocument();
  });

  it("should open modal when 'View details' button is clicked", () => {
    render(<TimelineItem event={event} vertical={false} />);

    const button = screen.getByRole('button', { name: /view details/i });
    fireEvent.click(button);

    expect(screen.getByTestId('event-details-modal')).toBeInTheDocument();
  });
});
