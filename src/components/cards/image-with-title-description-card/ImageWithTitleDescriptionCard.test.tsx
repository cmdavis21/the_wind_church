import { render, screen } from '@testing-library/react';
import React from 'react';

import ImageWithTitleDescriptionCard from './ImageWithTitleDescriptionCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock('@/components/icons/upArrow', () => () => <span>UpArrow</span>);

describe('ImageWithTitleDescriptionCard', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Example Image',
    title: 'Example Title',
    description: 'Example description for the card.',
  };

  it('renders image, title, and description', () => {
    render(<ImageWithTitleDescriptionCard {...defaultProps} />);

    // Check if the image is rendered with the correct alt text
    expect(screen.getByAltText('Example Image')).toBeInTheDocument();

    // Check if the title is rendered
    expect(screen.getByText('Example Title')).toBeInTheDocument();

    // Check if the description is rendered
    expect(
      screen.getByText('Example description for the card.')
    ).toBeInTheDocument();
  });

  it('renders a link when link prop is passed', () => {
    const linkProps = {
      ...defaultProps,
      link: {
        label: 'Click Here',
        href: '/some-link',
      },
    };

    render(<ImageWithTitleDescriptionCard {...linkProps} />);

    // Check if the link label is rendered
    expect(screen.getByText('Click Here')).toBeInTheDocument();

    // Check if the link has the correct href
    expect(screen.getByRole('link')).toHaveAttribute('href', '/some-link');

    // Check if UpArrow icon is rendered
    expect(screen.getByText('UpArrow')).toBeInTheDocument();
  });

  it('does not render a link when link prop is not passed', () => {
    render(<ImageWithTitleDescriptionCard {...defaultProps} />);

    // The link should not be present
    expect(screen.queryByRole('link')).toBeNull();
  });
});
