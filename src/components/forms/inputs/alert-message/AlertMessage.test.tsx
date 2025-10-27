import { render, screen } from '@testing-library/react';

import AlertMessage from './AlertMessage';

describe('QuantityInput', () => {
  it('should render correctly', () => {
    render(<AlertMessage />);
    expect(screen.getByText('AlertMessage Component')).toBeInTheDocument();
  });
});
