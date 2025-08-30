import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { EventType } from '@/data/types';

import EventDetailsModal from './EventDetailsModal';

describe('EventDetailsModal', () => {
  const mockSetOpenModal = jest.fn();

  const event: EventType = {
    name: 'Family Picnic and Games',
    description:
      'Join the Wind family for an exhilarating day at the park. A blessed time to fellowship and grow connections. Games, food, and prizes will be available.',
    date: '2024-09-20',
    time: '4:30pm',
    location: '1234 Washington Park Ave., Riverside CA 92503',
    hostedBy: 'Outreach Ministry',
    howToSignup: 'Signup sheet in Fellowship Hall',
    categories: ['Community', 'Fellowship'],
    helpNeeded: ['Setup', 'Breakdown', 'Game Coordinators', 'Food Servers'],
    image: {
      src: '/fall-background-image.png',
      alt: 'decorative background image',
    },
  };

  it('should render event details correctly', () => {
    render(
      <EventDetailsModal
        event={event}
        openModal={true}
        setOpenModal={mockSetOpenModal}
      />
    );

    // Check if key elements are rendered
    expect(screen.getByText(event.name)).toBeInTheDocument();
    expect(screen.getByText(event.description)).toBeInTheDocument();
    expect(screen.getByText('4:30pm')).toBeInTheDocument();
    expect(screen.getByText('Sep 20, 2024')).toBeInTheDocument(); // Assuming formatted date
    expect(screen.getByText(event.location)).toBeInTheDocument();
    expect(screen.getByText(event.hostedBy)).toBeInTheDocument();
    expect(
      screen.getByText('How to Signup: Signup sheet in Fellowship Hall')
    ).toBeInTheDocument();
    expect(screen.getByText('Help Needed:')).toBeInTheDocument();

    // Ensure categories are displayed
    event.categories?.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    // Ensure help needed items are displayed
    event.helpNeeded?.forEach((helpItem) => {
      expect(screen.getByText(helpItem)).toBeInTheDocument();
    });

    // Check if image is rendered
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', event.image.src);
    expect(img).toHaveAttribute('alt', event.image.alt);
  });

  it('should call setOpenModal when the close button is clicked', () => {
    render(
      <EventDetailsModal
        event={event}
        openModal={true}
        setOpenModal={mockSetOpenModal}
      />
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockSetOpenModal).toHaveBeenCalledTimes(1);
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
  });
});
