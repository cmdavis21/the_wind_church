import { fireEvent, render, screen } from '@testing-library/react';

import TextareaInput from './TextareaInput';

describe('TextareaInput', () => {
  it('renders the label correctly', () => {
    render(<TextareaInput label="Test Label" />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders a textarea field', () => {
    render(<TextareaInput label="Test Label" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays an error message when provided', () => {
    render(<TextareaInput label="Test Label" error="This is an error" />);

    expect(screen.getByText('This is an error')).toBeInTheDocument();
    expect(screen.getByText('This is an error')).toHaveClass('text-error');
  });

  it('accepts input value', () => {
    render(<TextareaInput label="Test Label" />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Hello world' } });

    expect(textarea).toHaveValue('Hello world');
  });
});
