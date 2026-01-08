import { fireEvent, render, screen } from '@testing-library/react';
import { HoneyPotInput } from './HoneyPotInput';

describe('HoneyPotInput', () => {
  it('calls setValue when the hidden input changes', () => {
    const mockSetValue = jest.fn();

    render(<HoneyPotInput setValue={mockSetValue} />);

    const input = screen.getByRole('textbox', { name: /name/i });

    fireEvent.change(input, { target: { value: 'bot-filled' } });

    expect(mockSetValue).toHaveBeenCalledWith('bot-filled');
  });
});
