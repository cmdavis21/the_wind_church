import { fireEvent, render, screen } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders the label correctly', () => {
    render(<TextInput label="Test Label" />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders an input field', () => {
    render(<TextInput label="Test Label" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays an error message when provided', () => {
    render(<TextInput label="Test Label" error="This is an error" />);

    expect(screen.getByText('This is an error')).toBeInTheDocument();
    expect(screen.getByText('This is an error')).toHaveClass('text-error');
  });

  it('accepts input value', () => {
    render(<TextInput label="Test Label" />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(input).toHaveValue('Hello');
  });
});
