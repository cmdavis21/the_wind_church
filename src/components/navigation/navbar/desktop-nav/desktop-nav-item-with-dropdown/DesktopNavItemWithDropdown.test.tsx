import { render, screen } from '@testing-library/react';
import React from 'react';

import DesktopNavItemWithDropdown from './DesktopNavItemWithDropdown';

describe('DesktopNavItemWithDropdown', () => {
  it('should render correctly', () => {
    render(<DesktopNavItemWithDropdown />);
    expect(screen.getByText('DesktopNavItemWithDropdown Component')).toBeInTheDocument();
  });
});