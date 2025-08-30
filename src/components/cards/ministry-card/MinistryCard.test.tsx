import React from 'react';
import { render, screen } from '@testing-library/react';

import MinistryCard from './MinistryCard';

describe('MinistryCard', () => {
  it('should render correctly', () => {
    render(<MinistryCard />);
    expect(screen.getByText('MinistryCard Component')).toBeInTheDocument();
  });
});