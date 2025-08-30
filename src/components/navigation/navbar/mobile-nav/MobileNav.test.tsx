import React from 'react';
import { render, screen } from '@testing-library/react';

import MobileNav from './MobileNav';

describe('MobileNav', () => {
  it('should render correctly', () => {
    render(<MobileNav />);
    expect(screen.getByText('MobileNav Component')).toBeInTheDocument();
  });
});