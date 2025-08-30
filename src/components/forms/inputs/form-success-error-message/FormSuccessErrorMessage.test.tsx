import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import FormSuccessErrorMessage from './FormSuccessErrorMessage';

describe('FormSuccessErrorMessage', () => {
  it('renders a success message', () => {
    render(
      <FormSuccessErrorMessage
        error={false}
        message="Form submitted successfully!"
      />
    );

    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(
      screen.getByText('Form submitted successfully!')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /circle check/i })
    ).toBeInTheDocument(); // Assuming CircleCheck is an SVG with an accessible name
  });

  it('renders an error message', () => {
    render(
      <FormSuccessErrorMessage error={true} message="Submission failed!" />
    );

    expect(screen.getByText('Oh no...')).toBeInTheDocument();
    expect(screen.getByText('Submission failed!')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /solid circle x/i })
    ).toBeInTheDocument(); // Assuming SolidCircleX is an SVG with an accessible name
  });

  it('renders the refresh button when refreshForm is provided', () => {
    const mockRefresh = jest.fn();
    render(
      <FormSuccessErrorMessage
        error={false}
        message="Success!"
        refreshForm={mockRefresh}
      />
    );

    const refreshButton = screen.getByRole('button', {
      name: 'New submission? Refresh form.',
    });
    expect(refreshButton).toBeInTheDocument();

    fireEvent.click(refreshButton);
    expect(mockRefresh).toHaveBeenCalled();
  });

  it('does not render the refresh button when refreshForm is not provided', () => {
    render(<FormSuccessErrorMessage error={false} message="Success!" />);

    expect(
      screen.queryByRole('button', { name: 'New submission? Refresh form.' })
    ).not.toBeInTheDocument();
  });
});
