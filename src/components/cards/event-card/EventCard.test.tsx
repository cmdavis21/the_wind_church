import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { formatDateMMMddyyyy } from '@/data/format-date';

import EventCard from './EventCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockEvent = {
  name: 'Church Gathering',
  date: new Date(),
  image: {
    src: '/event-image.jpg',
    alt: 'Church Event',
  },
  time: {
    hour: '7',
    minute: '30',
    timeOfDay: 'PM',
  },
  categories: ['Everyone Welcome', 'Fellowhsip', 'Discipleship'],
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, corrupti, incidunt, culpa est tempore eaque facilis unde qui obcaecati laudantium autem quam cumque odit aperiam amet possimus doloremque repellat officiis?',
  location: 'Lorem Ipsum',
  host: 'Outreach Ministry',
  howToSignup: 'Signup sheet in office',
  helpNeeded: ['Setup', 'Breakdown', 'Servers'],
};

describe('EventCard Component', () => {
  it('renders the event name and formatted date', () => {
    render(<EventCard event={mockEvent} />);

    const formattedDate = formatDateMMMddyyyy(mockEvent.date);

    expect(screen.getByText(mockEvent.name)).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it("displays 'Upcoming Event' tag if the event is within 30 days", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10); // 10 days from today

    render(<EventCard event={{ ...mockEvent, date: futureDate }} />);

    expect(screen.getByText('Upcoming Event')).toBeInTheDocument();
  });

  it("displays 'Happening Today!' tag if the event is today", () => {
    render(<EventCard event={mockEvent} />);

    expect(screen.getByText('Happening Today!')).toBeInTheDocument();
  });

  it('opens modal when clicked', () => {
    render(<EventCard event={mockEvent} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
