import { render, screen } from '@testing-library/react';
import React from 'react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render correctly', () => {
    render(<ErrorMessage />);
    expect(screen.getByText('ErrorMessage Component')).toBeInTheDocument();
  });
});