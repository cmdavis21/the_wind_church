import { render, screen, fireEvent } from '@testing-library/react';

import ColorRadio from './ColorRadio';
import '@testing-library/jest-dom';

describe('ColorRadio', () => {
  const mockOnSelect = jest.fn();
  const testColor = '#ff0000'; // Example color (red)

  it('renders the button with the correct background color', () => {
    render(
      <ColorRadio color={testColor} active={false} onSelect={mockOnSelect} />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`background-color: ${testColor}`);
  });

  it('applies active border when active is true', () => {
    const { container } = render(
      <ColorRadio color={testColor} active={true} onSelect={mockOnSelect} />
    );

    expect(container.firstChild).toHaveClass('border-yellow');
  });

  it('applies default border when active is false', () => {
    const { container } = render(
      <ColorRadio color={testColor} active={false} onSelect={mockOnSelect} />
    );

    expect(container.firstChild).toHaveClass('border-white');
  });

  it('calls onSelect when clicked', () => {
    render(
      <ColorRadio color={testColor} active={false} onSelect={mockOnSelect} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(true);
  });

  it('toggles active state on click', () => {
    render(
      <ColorRadio color={testColor} active={true} onSelect={mockOnSelect} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnSelect).toHaveBeenCalledWith(false);
  });
});
