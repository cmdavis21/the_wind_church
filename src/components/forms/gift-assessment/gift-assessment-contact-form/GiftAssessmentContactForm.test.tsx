import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import GiftAssessmentContactForm from './GiftAssessmentContactForm';

describe('GiftAssessmentContactForm', () => {
  const mockContact = jest.fn();

  it('renders the form fields correctly', () => {
    render(<GiftAssessmentContactForm contact={mockContact} />);

    expect(screen.getByLabelText('First Name*')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name*')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone*')).toBeInTheDocument();
    expect(screen.getByLabelText('Email*')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Submit your results' })
    ).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<GiftAssessmentContactForm contact={mockContact} />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Submit your results' })
    );

    expect(
      await screen.findByText('Please enter your first name')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please enter your last name')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please enter your phone')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Please enter your email')
    ).toBeInTheDocument();
  });

  it('submits the form when all fields are filled', async () => {
    render(<GiftAssessmentContactForm contact={mockContact} />);

    fireEvent.change(screen.getByLabelText('First Name*'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Last Name*'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('Phone*'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText('Email*'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Submit your results' })
    );

    expect(mockContact).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john@example.com',
    });
  });

  it('disables the button when isPending is true', () => {
    render(<GiftAssessmentContactForm contact={mockContact} isPending />);

    expect(
      screen.getByRole('button', { name: 'Submitting your results now...' })
    ).toBeDisabled();
  });

  it('shows success message when isSuccess is true', () => {
    render(<GiftAssessmentContactForm contact={mockContact} isSuccess />);

    expect(
      screen.getByText(
        "Thank you for sharing your results with us. We'll talk soon!"
      )
    ).toBeInTheDocument();
  });

  it('shows error message when isError is true', () => {
    render(<GiftAssessmentContactForm contact={mockContact} isError />);

    expect(
      screen.getByText(
        'There was an error submitting your results. Please try again again later or download your results.'
      )
    ).toBeInTheDocument();
  });
});
