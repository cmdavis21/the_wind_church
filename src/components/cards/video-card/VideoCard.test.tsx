import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

// Mock formatDateMMMddyyyy to control its output
jest.mock('@/data/format-date', () => ({
  formatDateMMMddyyyy: jest.fn((date) => `Formatted Date: ${date}`),
}));

describe('VideoCard', () => {
  const mockProps = {
    poster: '/test-image.jpg',
    title: 'Test Video',
    date: '2024-01-01',
    link: 'https://example.com',
  };

  it('should render the video card with correct content', () => {
    render(<VideoCard {...mockProps} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the formatted date is rendered
    expect(
      screen.getByText(`Formatted Date: ${mockProps.date}`)
    ).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText(mockProps.title)).toHaveAttribute(
      'src',
      mockProps.poster
    );

    // Check if the link exists
    expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.link);
  });

  it('should open the video link in a new tab', () => {
    render(<VideoCard {...mockProps} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
