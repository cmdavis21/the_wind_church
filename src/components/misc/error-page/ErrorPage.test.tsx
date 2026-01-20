import { render, screen } from '@testing-library/react';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render correctly', () => {
    render(<ErrorPage />);
    expect(screen.getByText('ErrorPage Component')).toBeInTheDocument();
  });
});
