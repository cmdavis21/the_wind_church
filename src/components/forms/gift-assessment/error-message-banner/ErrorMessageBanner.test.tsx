import { render, screen } from '@testing-library/react';
import React from 'react';

import ErrorMessageBanner from './ErrorMessageBanner';

describe('ErrorMessageBanner', () => {
  it('renders the error message content', () => {
    render(<ErrorMessageBanner content="This is an error message." />);
    expect(screen.getByText('This is an error message.')).toBeInTheDocument();
  });

  it('renders with an additional class name', () => {
    const { container } = render(
      <ErrorMessageBanner content="Error" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders the SquareExclaimation icon', () => {
    render(<ErrorMessageBanner content="Error" />);
    const icon = screen.getByRole('img', { hidden: true }); // Assuming SquareExclaimation is an SVG
    expect(icon).toBeInTheDocument();
  });
});
