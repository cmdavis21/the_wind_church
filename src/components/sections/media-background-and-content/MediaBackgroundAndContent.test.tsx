import { render, screen } from '@testing-library/react';

import { MediaType } from '@/data/utils';

import MediaBackgroundAndContent from './MediaBackgroundAndContent';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock('@/data/utils', () => ({
  findMediaType: (src: string) =>
    src.endsWith('.mp4') ? MediaType.VIDEO : MediaType.IMAGE,
  MediaType: {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
  },
}));

describe('MediaBackgroundAndContent', () => {
  it('should render the provided content', () => {
    render(
      <MediaBackgroundAndContent
        background={{ src: '/images/background.jpg' }}
        content={<p>Test Content</p>}
      />
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render an image when the media type is IMAGE', () => {
    render(
      <MediaBackgroundAndContent
        background={{ src: '/images/background.jpg', alt: 'Test Image' }}
        content={<p>Test Content</p>}
      />
    );

    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('should render a video when the media type is VIDEO', () => {
    render(
      <MediaBackgroundAndContent
        background={{
          src: '/videos/background.mp4',
          poster: '/images/poster.jpg',
        }}
        content={<p>Test Content</p>}
      />
    );

    expect(screen.getByRole('video')).toBeInTheDocument();
  });

  it('should apply the given className and id', () => {
    const { container } = render(
      <MediaBackgroundAndContent
        background={{ src: '/images/background.jpg' }}
        content={<p>Test Content</p>}
        className="custom-class"
        id="test-id"
      />
    );

    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveAttribute('id', 'test-id');
  });

  it('should render with rounded styles if rounded is true', () => {
    const { container } = render(
      <MediaBackgroundAndContent
        background={{ src: '/images/background.jpg' }}
        content={<p>Test Content</p>}
        rounded
      />
    );

    expect(container.firstChild).toHaveClass('rounded-xl');
  });
});
