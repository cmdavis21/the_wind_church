import { render, screen } from '@testing-library/react';

import VideoPlaylistCarousel from './VideoPlaylistCarousel';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock('react-multi-carousel', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="carousel">{children}</div>,
}));

jest.mock('@/components/cards/video-card/VideoCard', () => ({
  __esModule: true,
  default: ({ title }: any) => <div>{title}</div>,
}));

describe('VideoPlaylistCarousel', () => {
  const mockPlaylist = [
    {
      poster: '/images/video1.jpg',
      title: 'Video 1',
      date: '2024-01-01',
      link: 'https://example.com/video1',
    },
    {
      poster: '/images/video2.jpg',
      title: 'Video 2',
      date: '2024-01-02',
      link: 'https://example.com/video2',
    },
  ];

  it('should render the carousel', () => {
    render(<VideoPlaylistCarousel playlist={mockPlaylist} />);
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });

  it('should render all videos in the playlist', () => {
    render(<VideoPlaylistCarousel playlist={mockPlaylist} />);
    mockPlaylist.forEach((video) => {
      expect(screen.getByText(video.title)).toBeInTheDocument();
    });
  });
});
