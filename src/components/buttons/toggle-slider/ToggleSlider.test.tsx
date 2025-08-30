import { render, screen, fireEvent } from '@testing-library/react';

import ToggleSlider from './ToggleSlider';

describe('ToggleSlider', () => {
  const mockOptions = [
    { label: 'Option 1', onSelect: jest.fn() },
    { label: 'Option 2', onSelect: jest.fn() },
    { label: 'Option 3', onSelect: jest.fn() },
  ];

  it('renders all options correctly', () => {
    render(<ToggleSlider options={mockOptions} />);

    mockOptions.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('sets the default selected option', () => {
    render(<ToggleSlider options={mockOptions} defaultSelect={1} />);

    const selectedOption = screen.getByText('Option 2');
    expect(selectedOption).toHaveClass('text-black'); // Active state class
  });

  it('updates the active state when clicking an option', () => {
    render(<ToggleSlider options={mockOptions} />);

    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    expect(option).toHaveClass('text-black'); // Active state class
  });

  it('calls the onSelect function when an option is clicked', () => {
    render(<ToggleSlider options={mockOptions} />);

    const option = screen.getByText('Option 3');
    fireEvent.click(option);

    expect(mockOptions[2].onSelect).toHaveBeenCalled();
  });
});
