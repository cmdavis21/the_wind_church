import { render, screen } from '@testing-library/react';
import React from 'react';

import FooterColumn from './FooterColumn';

describe('FooterColumn', () => {
  const title = 'About';
  const row = [
    { label: 'Courses', link: '/courses' },
    { label: 'Leaders', link: '/leaders' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Bookstore', link: '/bookstore' },
    { label: 'Cafe' }, // No link, should be a text-only item
  ];

  it('renders the title', () => {
    render(<FooterColumn label={title} row={row} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders all row items with correct links', () => {
    render(<FooterColumn label={title} row={row} />);

    row.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();

      if (item.link) {
        const linkElement = screen.getByRole('link', { name: item.label });
        expect(linkElement).toHaveAttribute('href', item.link);
      } else {
        // If there's no link, it should be a <p> tag instead
        const textElement = screen.getByText(item.label);
        expect(textElement.tagName).toBe('P');
      }
    });
  });
});
