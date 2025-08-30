import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import MobileNavMenuButton from './MobileNavMenuButton';

describe('MobileNavMenuButton', () => {
  it('renders the button correctly', () => {
    render(
      <MobileNavMenuButton
        navState={false}
        handleChange={() => {}}
        changeColor={false}
      />
    );

    // Ensure the button is in the document
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls handleChange when clicked', () => {
    const mockHandleChange = jest.fn();
    render(
      <MobileNavMenuButton
        navState={false}
        handleChange={mockHandleChange}
        changeColor={false}
      />
    );

    const button = screen.getByRole('button');

    // Simulate button click
    fireEvent.click(button);

    // Expect handleChange to be called once with new state
    expect(mockHandleChange).toHaveBeenCalledWith(true);
  });

  it('toggles the open state and applies correct styles', () => {
    const { rerender, container } = render(
      <MobileNavMenuButton
        navState={false}
        handleChange={() => {}}
        changeColor={false}
      />
    );

    const button = screen.getByRole('button');
    const firstLine = container.querySelector('div > div:first-child');

    // Initial state should not have -rotate-45
    expect(firstLine).not.toHaveClass('-rotate-45');

    // Click the button to toggle open state
    fireEvent.click(button);

    // Rerender to apply state change
    rerender(
      <MobileNavMenuButton
        navState={false}
        handleChange={() => {}}
        changeColor={false}
      />
    );

    // Check that the first line rotates
    expect(firstLine).toHaveClass('-rotate-45');
  });

  it('applies correct colors based on changeColor prop', () => {
    const { rerender, container } = render(
      <MobileNavMenuButton
        navState={false}
        handleChange={() => {}}
        changeColor={false}
      />
    );

    const firstLine = container.querySelector('div > div:first-child');

    // Default: White background
    expect(firstLine).toHaveClass('bg-white');

    // Rerender with changeColor=true
    rerender(
      <MobileNavMenuButton
        navState={false}
        handleChange={() => {}}
        changeColor={true}
      />
    );

    // Expect new background color
    expect(firstLine).toHaveClass('bg-black');
  });
});
