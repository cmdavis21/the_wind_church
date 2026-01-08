import { render, screen } from '@testing-library/react';

import OrderLookupForm from './OrderLookupForm';

describe('OrderLookupForm', () => {
  it('should render correctly', () => {
    render(<OrderLookupForm />);
    expect(screen.getByText('OrderLookupForm Component')).toBeInTheDocument();
  });
});
