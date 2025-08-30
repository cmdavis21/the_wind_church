import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Navbar Component')).toBeInTheDocument();
  });
});