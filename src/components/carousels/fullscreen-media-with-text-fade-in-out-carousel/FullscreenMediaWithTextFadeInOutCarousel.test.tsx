import { render, screen, fireEvent, act } from '@testing-library/react';

import FullscreenMediaWithTextFadeInOutCarousel from './FullscreenMediaWithTextFadeInOutCarousel';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockSlides = [
  {
    media: { src: '/image1.jpg', alt: 'Slide 1' },
    header: 'Header 1',
    title: 'Title 1',
    description: 'Description 1',
    link: '/link1',
  },
  {
    media: { src: '/video.mp4', poster: '/poster.jpg' },
    header: 'Header 2',
    title: 'Title 2',
    description: 'Description 2',
    link: '/link2',
  },
];

jest.useFakeTimers();

describe('FullscreenMediaWithTextFadeInOutCarousel', () => {
  test('renders the carousel component', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={mockSlides} />);
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  test('renders images and videos correctly', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={mockSlides} />);

    // Check first image is displayed
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();

    // Check video is rendered with correct poster
    const video = screen.getByRole('video');
    expect(video).toHaveAttribute('src', '/video.mp4');
    expect(video).toHaveAttribute('poster', '/poster.jpg');
  });

  test('automatically transitions slides after 8 seconds', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={mockSlides} />);

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.getByText('Title 2')).toBeVisible();
  });

  test('navigates slides using arrows', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={mockSlides} />);

    const rightArrow = screen.getByTestId('carousel-right-arrow');
    fireEvent.click(rightArrow);

    expect(screen.getByText('Title 2')).toBeVisible();

    const leftArrow = screen.getByTestId('carousel-left-arrow');
    fireEvent.click(leftArrow);

    expect(screen.getByText('Title 1')).toBeVisible();
  });

  test('navigates slides using dots', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={mockSlides} />);

    const dots = screen.getAllByTestId('carousel-dot');
    fireEvent.click(dots[1]);

    expect(screen.getByText('Title 2')).toBeVisible();
  });

  test('handles empty slides array gracefully', () => {
    render(<FullscreenMediaWithTextFadeInOutCarousel slides={[]} />);
    expect(screen.queryByTestId('carousel')).not.toBeInTheDocument();
  });
});
