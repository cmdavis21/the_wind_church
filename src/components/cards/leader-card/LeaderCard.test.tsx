import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import LeaderCard from './LeaderCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('LeaderCard', () => {
  const name = 'Jane Austen';
  const position = 'Hebrews Cafe Lead';
  const description =
    'As the Lead Café Manager at Hebrew Café, I blend my love for creating a warm, welcoming environment and fostering a vibrant community atmosphere within the Café. Under my leadership, Hebrew Café has become a beloved local spot, celebrated for its delicious food, cozy ambiance, and engaging cultural events. My dedication to excellence and personal touch in everything I do are what make the Hebrew Café experience truly special.';
  const media = {
    poster: '/imag-1.png',
    src: '/video-1.mp4',
  };

  it('should render the LeaderCard with correct details', () => {
    render(
      <LeaderCard
        name={name}
        position={position}
        description={description}
        media={media}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(position)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    const videoElement = screen.getByTestId('leader-video');
    expect(videoElement).toHaveAttribute('src', media.src);
  });

  it('should open and close the content box when clicked', async () => {
    render(
      <LeaderCard
        name={name}
        position={position}
        description={description}
        media={media}
      />
    );
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByText(name)).toBeVisible();

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    expect(screen.getByText(name)).not.toBeVisible();
  });
});
