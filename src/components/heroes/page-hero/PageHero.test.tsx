import { render, screen } from '@testing-library/react';

import PageHero from './PageHero';

import { MediaType } from '@/data/utils';

jest.mock('@/data/utils', () => ({
  findMediaType: (src: string) => (src.includes('.mp4') ? MediaType.VIDEO : MediaType.IMAGE),
  MediaType: {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('PageHero', () => {
  it('renders title correctly', () => {
    render(<PageHero title="Welcome to Our Church" media={{ src: '/image.jpg' }} />);
    expect(screen.getByText('Welcome to Our Church')).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(
      <PageHero title="Hero Title" subtitle="This is a subtitle" media={{ src: '/image.jpg' }} />
    );
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
  });

  it('renders an image when media type is IMAGE', () => {
    render(<PageHero title="Hero" media={{ src: '/image.jpg' }} />);
    expect(screen.getByAltText('Decorative Background Image')).toBeInTheDocument();
  });

  it('renders a video when media type is VIDEO', () => {
    render(<PageHero title="Hero" media={{ src: '/video.mp4', poster: '/poster.jpg' }} />);
    expect(screen.getByRole('video')).toBeInTheDocument();
  });

  it('applies the correct height when short prop is true', () => {
    const { container } = render(
      <PageHero title="Hero" size="short" media={{ src: '/image.jpg' }} />
    );
    expect(container.firstChild).toHaveClass('h-[60%]');
  });

  it('applies the correct height when short prop is false', () => {
    const { container } = render(<PageHero title="Hero" media={{ src: '/image.jpg' }} />);
    expect(container.firstChild).toHaveClass('h-[95%]');
  });
});
