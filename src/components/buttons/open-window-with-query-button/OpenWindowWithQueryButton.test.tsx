import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { openWindowWithQuery } from '@/data/hooks';

import OpenWindowWithQueryButton from './OpenWindowWithQueryButton';

// Mock the openWindowWithQuery function
jest.mock('@/data/hooks', () => ({
  openWindowWithQuery: jest.fn(),
}));

describe('OpenWindowWithQueryButton', () => {
  const label = 'Search Example';
  const query = 'Custom Query';

  it('renders the button with the provided label', () => {
    render(<OpenWindowWithQueryButton label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls openWindowWithQuery with the label when clicked (if no query is provided)', () => {
    render(<OpenWindowWithQueryButton label={label} />);
    const button = screen.getByText(label);

    fireEvent.click(button);

    expect(openWindowWithQuery).toHaveBeenCalledWith(label);
  });

  it('calls openWindowWithQuery with the query when clicked', () => {
    render(<OpenWindowWithQueryButton label={label} query={query} />);
    const button = screen.getByText(label);

    fireEvent.click(button);

    expect(openWindowWithQuery).toHaveBeenCalledWith(query);
  });
});
