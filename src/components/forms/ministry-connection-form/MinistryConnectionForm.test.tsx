import React from 'react';
import { render, screen } from '@testing-library/react';

import MinistryConnectionForm from './MinistryConnectionForm';

describe('MinistryConnectionForm', () => {
  it('should render correctly', () => {
    render(<MinistryConnectionForm />);
    expect(screen.getByText('MinistryConnectionForm Component')).toBeInTheDocument();
  });
});