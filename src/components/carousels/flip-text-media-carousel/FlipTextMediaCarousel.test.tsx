import React from 'react';
import { render, screen } from '@testing-library/react';

import FlipTextMediaCarousel from './FlipTextMediaCarousel';

describe('FlipTextMediaCarousel', () => {
  it('should render correctly', () => {
    render(<FlipTextMediaCarousel />);
    expect(screen.getByText('FlipTextMediaCarousel Component')).toBeInTheDocument();
  });
});