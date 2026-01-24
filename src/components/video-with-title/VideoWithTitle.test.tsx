import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import VideoWithTitle from './VideoWithTitle';

// Mock Play icon component
jest.mock('@/components/icons/play', () => () => <span>PlayIcon</span>);

// Mock SectionHeader component to avoid dealing with its actual rendering
jest.mock(
  '@/components/sections/section-header/SectionHeader',
  () =>
    ({ title, subtitle }: { title: string; subtitle: string }) =>
      (
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      )
);

describe('VideoWithTitle', () => {
  const defaultProps = {
    src: 'https://example.com/video.mp4',
    poster: 'https://example.com/poster.jpg',
    title: 'Sample Video Title',
    subtitle: 'Sample Video Subtitle',
  };

  it('renders video with title and subtitle', () => {
    render(<VideoWithTitle {...defaultProps} />);

    // Check if the title and subtitle are rendered correctly
    expect(screen.getByText('Sample Video Title')).toBeInTheDocument();
    expect(screen.getByText('Sample Video Subtitle')).toBeInTheDocument();

    // Check if the video is rendered with the correct poster
    const video = screen.getByRole('video');
    expect(video).toHaveAttribute('poster', defaultProps.poster);
  });

  it('shows the play button when the video is paused', () => {
    render(<VideoWithTitle {...defaultProps} />);

    // Initially, the play button should be visible
    expect(screen.getByText('Watch')).toBeInTheDocument();
  });

  it('hides the play button when the video is playing', () => {
    render(<VideoWithTitle {...defaultProps} />);

    const video = screen.getByRole('video');
    const playButton = screen.getByText('Watch');

    // Simulate playing the video
    fireEvent.click(video);

    // After clicking, the play button should not be visible
    expect(playButton).not.toBeInTheDocument();
  });

  it('toggles video playback when clicking on the video', () => {
    render(<VideoWithTitle {...defaultProps} />);

    const video = screen.getByRole('video');

    // Video should be initially paused
    expect(video).toHaveAttribute('paused', 'true');

    // Simulate clicking to play the video
    fireEvent.click(video);

    // After clicking, the video should start playing
    expect(video).toHaveAttribute('paused', 'false');

    // Simulate clicking again to pause the video
    fireEvent.click(video);

    // After clicking again, the video should be paused
    expect(video).toHaveAttribute('paused', 'true');
  });

  it('renders correctly on mobile', () => {
    render(<VideoWithTitle {...defaultProps} />);

    // The mobile layout should be visible when screen is small (simulate mobile)
    global.innerWidth = 500; // simulate a mobile screen
    global.dispatchEvent(new Event('resize'));

    // Check if the mobile-specific play button and text are rendered
    expect(screen.getByText('Watch')).toBeInTheDocument();
    expect(screen.getByText('Sample Video Title')).toBeInTheDocument();
  });

  it('does not show the play button when video is playing on mobile', () => {
    render(<VideoWithTitle {...defaultProps} />);

    // Simulate mobile view
    global.innerWidth = 500; // simulate a mobile screen
    global.dispatchEvent(new Event('resize'));

    const video = screen.getByRole('video');
    const playButton = screen.getByText('Watch');

    // Simulate clicking to play the video
    fireEvent.click(video);

    // After clicking, the play button should not be visible
    expect(playButton).not.toBeInTheDocument();
  });
});
