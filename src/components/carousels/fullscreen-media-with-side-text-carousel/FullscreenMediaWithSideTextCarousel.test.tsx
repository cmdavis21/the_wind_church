import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import FullscreenMediaWithSideTextCarousel from './FullscreenMediaWithSideTextCarousel';

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
      src: '/image1.jpg',
      alt: 'Image 1',
    },
    title: 'Slide 1 Title',
    description: 'Slide 1 Description',
  },
  {
    media: {
      src: '/video1.mp4',
      alt: 'Video 1',
      poster: '/video1-poster.jpg',
    },
    title: 'Slide 2 Title',
    description: 'Slide 2 Description',
  },
];

describe('FullscreenMediaWithSideTextCarousel', () => {
  it('renders the first slide correctly', () => {
    render(<FullscreenMediaWithSideTextCarousel slides={mockSlides} />);

    // Check that the first slide's title and description are displayed
    expect(screen.getByText('Slide 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Slide 1 Description')).toBeInTheDocument();

    // Check that the first media is an image
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('renders video with poster correctly', () => {
    render(<FullscreenMediaWithSideTextCarousel slides={mockSlides} />);

    // Check that video element is in the document
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('poster', '/video1-poster.jpg');
  });

  it('changes slides when clicking on navigation arrows', async () => {
    render(<FullscreenMediaWithSideTextCarousel slides={mockSlides} />);

    const user = userEvent.setup();

    // Click the right arrow to go to the next slide
    const rightArrow = screen.getByRole('button', { name: /next/i });
    await user.click(rightArrow);

    // Expect the second slide's content to be displayed
    expect(screen.getByText('Slide 2 Title')).toBeInTheDocument();
    expect(screen.getByText('Slide 2 Description')).toBeInTheDocument();
  });
});
