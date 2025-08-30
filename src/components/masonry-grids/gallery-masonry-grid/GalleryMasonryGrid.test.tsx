import { render, screen } from '@testing-library/react';

import GalleryMasonryGrid from './GalleryMasonryGrid';
import '@testing-library/jest-dom';

// Mock ImageCardWithModal to avoid rendering full images
jest.mock(
  '../../cards/image-card-with-modal/ImageCardWithModal',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
  () => (props: any) => <div data-testid="image-card" {...props} />
);

describe('GalleryMasonryGrid', () => {
  const testImages = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

  it('should render the correct number of image cards', () => {
    render(<GalleryMasonryGrid images={testImages} />);

    // Expect correct number of image components
    expect(screen.getAllByTestId('image-card')).toHaveLength(testImages.length);
  });

  it('should render without crashing with empty images array', () => {
    render(<GalleryMasonryGrid images={[]} />);

    // Should not find any image components
    expect(screen.queryByTestId('image-card')).not.toBeInTheDocument();
  });
});
