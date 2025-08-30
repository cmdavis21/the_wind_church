import { render, screen, fireEvent } from '@testing-library/react';

import ImageModal from './ImageModal';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('ImageModal', () => {
  const mockSetOpen = jest.fn();

  it('should render modal with image when open', () => {
    render(
      <ImageModal
        src="/test-image.jpg"
        alt="Test Image"
        open={true}
        setOpen={mockSetOpen}
      />
    );

    // Check if the image is rendered
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();

    // Check if the close button is present
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call setOpen(false) when close button is clicked', () => {
    render(
      <ImageModal
        src="/test-image.jpg"
        alt="Test Image"
        open={true}
        setOpen={mockSetOpen}
      />
    );

    // Click the close button
    fireEvent.click(screen.getByRole('button'));

    // Expect setOpen to be called with false
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });

  it('should not render modal when open is false', () => {
    render(
      <ImageModal
        src="/test-image.jpg"
        alt="Test Image"
        open={false}
        setOpen={mockSetOpen}
      />
    );

    // Modal content should not be in the document
    expect(screen.queryByAltText('Test Image')).not.toBeInTheDocument();
  });
});
