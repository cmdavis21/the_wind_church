import { render, screen } from '@testing-library/react';

import ErrorAlert from './ErrorAlert';

describe('ErrorAlert', () => {
  it('should render correctly', () => {
    render(<ErrorAlert />);
    expect(screen.getByText('ErrorAlert Component')).toBeInTheDocument();
  });
});
