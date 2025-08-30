import { render, screen } from '@testing-library/react';

import SingleSlideMediaCarousel from './SingleSlideMediaCarousel';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock('@/data/utils', () => ({
  findMediaType: jest.fn((src) => (src.includes('.mp4') ? 'video' : 'image')),
  MediaType: {
    IMAGE: 'image',
    VIDEO: 'video',
  },
}));

describe('SingleSlideMediaCarousel', () => {
  const mockMedia = [
    { src: '/test-image1.jpg', alt: 'Test Image 1' },
    { src: '/test-video.mp4', alt: 'Test Video', poster: '/test-poster.jpg' },
  ];

  it('renders images and videos correctly', () => {
    render(<SingleSlideMediaCarousel media={mockMedia} />);

    // Check if images are rendered
    expect(screen.getByAltText('Test Image 1')).toBeInTheDocument();

    // Check if video is rendered
    expect(screen.getByRole('video')).toBeInTheDocument();
  });

  it('renders without media', () => {
    render(<SingleSlideMediaCarousel media={[]} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByRole('video')).not.toBeInTheDocument();
  });
});
