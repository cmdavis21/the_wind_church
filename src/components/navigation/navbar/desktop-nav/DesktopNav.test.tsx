import React from 'react';
import { render, screen } from '@testing-library/react';

import DesktopNav from './DesktopNav';

describe('DesktopNav', () => {
  it('should render correctly', () => {
    render(<DesktopNav />);
    expect(screen.getByText('DesktopNav Component')).toBeInTheDocument();
  });
});