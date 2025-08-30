import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { PageRoutes } from '@/data/page-routes';

import FullscreenLatestSermon from './FullscreenLatestSermon';

// Mock the Volume icons
jest.mock('@/components/icons/volumeHigh', () => () => (
  <svg data-testid="volume-high-icon" />
));
jest.mock('@/components/icons/volumeSlash', () => () => (
  <svg data-testid="volume-slash-icon" />
));

// Mock Flowbite's Tooltip component
jest.mock('flowbite-react', () => ({
  Tooltip: ({
    content,
    children,
  }: {
    content: string;
    children: React.ReactNode;
  }) => (
    <div data-testid="tooltip" data-content={content}>
      {children}
    </div>
  ),
  Button: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="button">
      {children}
    </a>
  ),
}));

describe('FullscreenLatestSermon Component', () => {
  const defaultProps = {
    title: 'Power of Faith',
    src: 'https://example.com/video.mp4',
    poster: 'https://example.com/poster.jpg',
    link: 'https://example.com/latest-sermon',
  };

  it('renders the component correctly', () => {
    render(<FullscreenLatestSermon {...defaultProps} />);

    expect(screen.getByText('Latest Sermon')).toBeInTheDocument();
    expect(screen.getByText('Power of Faith')).toBeInTheDocument();
    expect(screen.getByRole('video')).toHaveAttribute(
      'poster',
      defaultProps.poster
    );
  });

  it('renders video element with correct properties', () => {
    render(<FullscreenLatestSermon {...defaultProps} />);
    const video = screen.getByRole('video');
    expect(video).toHaveAttribute('src', defaultProps.src);
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('autoPlay');
    expect(video).toHaveAttribute('playsInline');
  });

  it('toggles mute state on button click', () => {
    render(<FullscreenLatestSermon {...defaultProps} />);
    const muteButton = screen.getByRole('button');

    // Initially muted, should show volume slash icon
    expect(screen.getByTestId('volume-slash-icon')).toBeInTheDocument();

    // Click to unmute
    fireEvent.click(muteButton);
    expect(screen.getByTestId('volume-high-icon')).toBeInTheDocument();

    // Click again to mute
    fireEvent.click(muteButton);
    expect(screen.getByTestId('volume-slash-icon')).toBeInTheDocument();
  });

  it('renders Watch Video and View Sermons buttons with correct links', () => {
    render(<FullscreenLatestSermon {...defaultProps} />);

    const watchVideoButton = screen.getAllByTestId('button')[0];
    expect(watchVideoButton).toHaveAttribute('href', defaultProps.link);
    expect(watchVideoButton).toHaveTextContent('Watch Video');

    const viewSermonsButton = screen.getAllByTestId('button')[1];
    expect(viewSermonsButton).toHaveAttribute('href', PageRoutes.sermons);
    expect(viewSermonsButton).toHaveTextContent('View Sermons');
  });
});
