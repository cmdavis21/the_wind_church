import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import PageScrollUpButton from './PageScrollUpButton';

describe('PageScrollUpButton', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true,
    });
  });

  it('should render without crashing', () => {
    render(<PageScrollUpButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be initially hidden', () => {
    render(<PageScrollUpButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('opacity-0');
  });

  it('should become visible when scrolled down', () => {
    render(<PageScrollUpButton />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('opacity-0');
  });

  it('should scroll to top when clicked', () => {
    render(<PageScrollUpButton />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
});
