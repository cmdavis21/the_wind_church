import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import UserSettings from './UserSettings';

// eslint-disable-next-line react/display-name
jest.mock('@/components/icons/verticalEllipsis', () => () => (
  <svg data-testid="ellipsis-icon" />
));
jest.mock(
  '@/components/buttons/language-selector/LanguageSelector',
  // eslint-disable-next-line react/display-name
  () => () => <div data-testid="language-selector">Language Selector</div>
);
jest.mock(
  '@/components/theme-mode/dark-theme-toggler/DarkThemeToggler',
  // eslint-disable-next-line react/display-name
  () => () => <div data-testid="dark-theme-toggler">Dark Theme Toggler</div>
);
jest.mock('@/data/hooks', () => ({
  useWindowDimensions: jest.fn(() => ({ width: 1200 })), // Mocking window width
}));

describe('UserSettings', () => {
  it('renders the button correctly', () => {
    render(<UserSettings changeColor={false} />);

    // Check if the button with the ellipsis icon is rendered
    expect(screen.getByTestId('ellipsis-icon')).toBeInTheDocument();
  });

  it('shows the dropdown menu on hover (desktop)', async () => {
    render(<UserSettings changeColor={false} />);

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button); // Simulate hover

    // Check if the dropdown menu items are now visible
    expect(screen.getByTestId('language-selector')).toBeVisible();
    expect(screen.getByTestId('dark-theme-toggler')).toBeVisible();
  });

  it('toggles the dropdown menu on click (mobile)', () => {
    // Mock smaller window width for mobile behavior
    jest.mock('@/data/hooks', () => ({
      useWindowDimensions: jest.fn(() => ({ width: 500 })),
    }));

    render(<UserSettings changeColor={false} />);

    const button = screen.getByRole('button');
    fireEvent.click(button); // Simulate click to open menu

    expect(screen.getByTestId('language-selector')).toBeVisible();
    expect(screen.getByTestId('dark-theme-toggler')).toBeVisible();

    fireEvent.click(button); // Click again to close menu
    expect(screen.getByTestId('language-selector')).not.toBeVisible();
  });

  it('applies correct color class when changeColor is true', () => {
    const { container } = render(<UserSettings changeColor={true} />);

    // Check if the button uses the correct class for dark mode
    expect(container.querySelector('svg')).toHaveClass('fill-black');
  });
});
