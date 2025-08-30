import { render, screen } from '@testing-library/react';
import React from 'react';

import EventRentalForm from './EventRentalForm';

describe('EventRentalForm', () => {
  it('should render correctly', () => {
    render(<EventRentalForm />);
    expect(screen.getByText('EventRentalForm Component')).toBeInTheDocument();
  });
});