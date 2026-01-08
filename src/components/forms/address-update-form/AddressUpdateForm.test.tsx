import { render, screen } from '@testing-library/react';

import AddressUpdateForm from './AddressUpdateForm';

describe('AddressUpdateForm', () => {
  it('should render correctly', () => {
    render(<AddressUpdateForm />);
    expect(screen.getByText('AddressUpdateForm Component')).toBeInTheDocument();
  });
});
