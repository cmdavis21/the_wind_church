import React from 'react';
import { render, screen } from '@testing-library/react';

import LanguageSelectorSelect from './LanguageSelectorSelect';

describe('LanguageSelectorSelect', () => {
  it('should render correctly', () => {
    render(<LanguageSelectorSelect />);
    expect(screen.getByText('LanguageSelectorSelect Component')).toBeInTheDocument();
  });
});