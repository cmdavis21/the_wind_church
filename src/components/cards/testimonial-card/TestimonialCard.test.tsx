import React from 'react';
import { render, screen } from '@testing-library/react';

import TestimonialCard from './TestimonialCard';

describe('TestimonialCard', () => {
  it('should render correctly', () => {
    render(<TestimonialCard />);
    expect(screen.getByText('TestimonialCard Component')).toBeInTheDocument();
  });
});