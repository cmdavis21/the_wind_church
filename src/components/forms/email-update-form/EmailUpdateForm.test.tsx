import { render, screen } from '@testing-library/react';

import EmailUpdateForm from './EmailUpdateForm';

describe('EmailUpdateForm', () => {
  it('should render correctly', () => {
    render(<EmailUpdateForm />);
    expect(screen.getByText('EmailUpdateForm Component')).toBeInTheDocument();
  });
});
