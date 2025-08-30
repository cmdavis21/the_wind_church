import { render, screen, fireEvent } from '@testing-library/react';

import TextRadio from './TextRadio';
import '@testing-library/jest-dom';

describe('TextRadio', () => {
  const mockOnSelect = jest.fn();
  const text = 'Option 1';

  it('renders the text correctly', () => {
    render(<TextRadio text={text} active={false} onSelect={mockOnSelect} />);

    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });

  it('applies active border when active is true', () => {
    const { container } = render(
      <TextRadio text={text} active={true} onSelect={mockOnSelect} />
    );

    expect(container.firstChild).toHaveClass('border-yellow');
  });

  it('applies default border when active is false', () => {
    const { container } = render(
      <TextRadio text={text} active={false} onSelect={mockOnSelect} />
    );

    expect(container.firstChild).toHaveClass('border-white');
  });

  it('calls onSelect when clicked', () => {
    render(<TextRadio text={text} active={false} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button', { name: text });
    fireEvent.click(button);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(true);
  });

  it('toggles active state on click', () => {
    render(<TextRadio text={text} active={true} onSelect={mockOnSelect} />);

    const button = screen.getByRole('button', { name: text });
    fireEvent.click(button);

    expect(mockOnSelect).toHaveBeenCalledWith(false);
  });
});
