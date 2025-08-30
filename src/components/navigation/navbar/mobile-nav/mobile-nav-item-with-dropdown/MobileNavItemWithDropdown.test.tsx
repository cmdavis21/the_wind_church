import { render, screen } from '@testing-library/react';
import React from 'react';

import MobileNavItemWithDropdown from './MobileNavItemWithDropdown';

describe('MobileNavItemWithDropdown', () => {
  it('should render correctly', () => {
    render(<MobileNavItemWithDropdown />);
    expect(screen.getByText('MobileNavItemWithDropdown Component')).toBeInTheDocument();
  });
});