import { render, screen } from '@testing-library/react';
import React from 'react';

import QuantityInput from './QuantityInput';

describe('QuantityInput', () => {
  it('should render correctly', () => {
    render(<QuantityInput />);
    expect(screen.getByText('QuantityInput Component')).toBeInTheDocument();
  });
});