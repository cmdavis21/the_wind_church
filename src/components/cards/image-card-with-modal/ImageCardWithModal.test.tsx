import { render, screen, fireEvent } from '@testing-library/react';

import ImageCardWithModal from './ImageCardWithModal';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

// Mock ImageModal to prevent actual modal rendering
jest.mock('../../modals/image-modal/ImageModal', () => (props: any) => (
  <div data-testid="image-modal" {...props} />
));

describe('ImageCardWithModal', () => {
  const testProps = {
    src: '/test-image.jpg',
    alt: 'Test Image',
    className: 'test-class',
  };

  it('should render the image and button', () => {
    render(<ImageCardWithModal {...testProps} />);

    // Check if the image is rendered
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();

    // Check if the button is present
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should open modal when button is clicked', () => {
    render(<ImageCardWithModal {...testProps} />);

    // Click the button
    fireEvent.click(screen.getByRole('button'));

    // Expect modal to be rendered
    expect(screen.getByTestId('image-modal')).toBeInTheDocument();
    expect(screen.getByTestId('image-modal')).toHaveAttribute('open', 'true');
  });
});
