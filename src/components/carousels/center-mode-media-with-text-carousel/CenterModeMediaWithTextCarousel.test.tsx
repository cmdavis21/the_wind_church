import React from 'react';
import { render, screen } from '@testing-library/react';

import CenterModeMediaWithTextCarousel from './CenterModeMediaWithTextCarousel';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockSlides = [
  {
    media: {
      src: '/test-image.jpg',
      alt: 'Test Image',
    },
    title: 'Test Title 1',
    description: 'Test Description 1',
  },
  {
    media: {
      src: '/test-video.mp4',
      alt: 'Test Video',
      poster: '/test-poster.jpg',
    },
    title: 'Test Title 2',
    description: 'Test Description 2',
  },
];

describe('CenterModeMediaWithTextCarousel', () => {
  it('renders without crashing', () => {
    render(<CenterModeMediaWithTextCarousel slides={mockSlides} />);
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });

  it('renders images correctly', () => {
    render(<CenterModeMediaWithTextCarousel slides={mockSlides} />);
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('renders videos correctly', () => {
    render(<CenterModeMediaWithTextCarousel slides={mockSlides} />);
    expect(screen.getByAltText('Test Video')).toBeInTheDocument();
  });
});
