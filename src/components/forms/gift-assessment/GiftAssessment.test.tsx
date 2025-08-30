import { render, screen } from '@testing-library/react';
import React from 'react';

import GiftAssessment from './GiftAssessment';

describe('GiftAssessment', () => {
  it('should render correctly', () => {
    render(<GiftAssessment />);
    expect(screen.getByText('GiftAssessment Component')).toBeInTheDocument();
  });
});