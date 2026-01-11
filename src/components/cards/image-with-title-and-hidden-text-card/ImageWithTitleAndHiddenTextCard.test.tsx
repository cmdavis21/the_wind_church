import { fireEvent, render, screen } from '@testing-library/react';

import SquarePlus from '@/components/icons/square-plus';

import ImageWithTitleAndHiddenTextCard from './ImageWithTitleAndHiddenTextCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('ImageWithTitleAndHiddenTextCard', () => {
  const mockImage = { src: '/test-image.jpg', alt: 'Test Image' };

  it('renders the image, title, and icon', () => {
    render(
      <ImageWithTitleAndHiddenTextCard
        image={mockImage}
        title="Test Title"
        description="Test Description"
        icon={SquarePlus}
      />
    );

    expect(screen.getByRole('img', { name: 'Test Image' })).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('toggles text visibility on click (mobile)', () => {
    render(
      <ImageWithTitleAndHiddenTextCard
        image={mockImage}
        title="Test Title"
        description="Test Description"
      />
    );

    const card = screen.getByRole('img', { name: 'Test Image' }).closest('div'); // Get parent div
    expect(screen.queryByText('Test Description')).not.toBeVisible();

    fireEvent.click(card!);
    expect(screen.getByText('Test Description')).toBeVisible();

    fireEvent.click(card!);
    expect(screen.queryByText('Test Description')).not.toBeVisible();
  });

  it('shows and hides description on hover (desktop)', () => {
    render(
      <ImageWithTitleAndHiddenTextCard
        image={mockImage}
        title="Test Title"
        description="Test Description"
      />
    );

    const card = screen.getByRole('img', { name: 'Test Image' }).closest('div');

    fireEvent.mouseOver(card!);
    expect(screen.getByText('Test Description')).toBeVisible();

    fireEvent.mouseLeave(card!);
    expect(screen.queryByText('Test Description')).not.toBeVisible();
  });
});
