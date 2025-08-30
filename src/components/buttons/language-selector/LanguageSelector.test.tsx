import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LanguageSelector from './LanguageSelector';

describe('LanguageSelector', () => {
  it('renders the language selector dropdown', () => {
    render(<LanguageSelector changeColor={false} />);

    // Ensure the select dropdown is present
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Ensure both language options exist
    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument();
    expect(screen.getByText('🇲🇽 Spanish')).toBeInTheDocument();
  });

  it('updates selected language on change', () => {
    render(<LanguageSelector changeColor={false} />);

    const selectElement = screen.getByRole('combobox');

    // Ensure default value is 'en'
    expect(selectElement).toHaveValue('en');

    // Simulate changing to Spanish
    fireEvent.change(selectElement, { target: { value: 'es' } });

    // Expect locale to be updated
    expect(selectElement).toHaveValue('es');
  });

  it('applies correct text color based on changeColor prop', () => {
    const { rerender } = render(<LanguageSelector changeColor={false} />);

    const selectElement = screen.getByRole('combobox');

    // Check class for default color mode
    expect(selectElement).toHaveClass('text-white');

    // Rerender with changeColor = true
    rerender(<LanguageSelector changeColor={true} />);

    // Expect new class to apply
    expect(selectElement).toHaveClass('text-black');
  });
});
