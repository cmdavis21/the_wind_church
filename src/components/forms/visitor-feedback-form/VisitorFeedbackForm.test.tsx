import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { useCreateVisitorFeedback } from '@/data/services/forms/visitor-feedback';

import VisitorFeedbackForm from './VisitorFeedbackForm';

jest.mock('@/data/services/forms/visitor-feedback', () => ({
  useCreateVisitorFeedback: jest.fn(),
}));

describe('VisitorFeedbackForm', () => {
  let mockSubmit: jest.Mock;

  beforeEach(() => {
    mockSubmit = jest.fn();
    (useCreateVisitorFeedback as jest.Mock).mockReturnValue({
      mutate: mockSubmit,
      isPending: false,
      isSuccess: false,
      isError: false,
      reset: jest.fn(),
    });
  });

  it('renders the form correctly', () => {
    render(<VisitorFeedbackForm />);

    expect(screen.getByText('Feedback')).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Feedback/i)).toBeInTheDocument();
  });

  it('shows validation errors when submitting an empty form', async () => {
    render(<VisitorFeedbackForm />);

    fireEvent.click(screen.getByRole('button', { name: /Submit!/i }));

    await waitFor(() => {
      expect(screen.getByText('Enter your first name')).toBeInTheDocument();
      expect(screen.getByText('Enter your last name')).toBeInTheDocument();
      expect(screen.getByText('Enter your email')).toBeInTheDocument();
      expect(screen.getByText('Enter your phone number')).toBeInTheDocument();
      expect(screen.getByText('Please enter your feedback')).toBeInTheDocument();
    });
  });

  it('submits the form when valid data is provided', async () => {
    render(<VisitorFeedbackForm />);

    fireEvent.input(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.input(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.input(screen.getByLabelText(/Phone/i), {
      target: { value: '1234567890' },
    });
    fireEvent.input(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByLabelText(/Your Feedback/i), {
      target: { value: 'Great experience!' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit!/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'test@example.com',
        feedback: 'Great experience!',
      });
    });
  });

  it('disables the submit button when pending', async () => {
    (useCreateVisitorFeedback as jest.Mock).mockReturnValue({
      mutate: mockSubmit,
      isPending: true,
      isSuccess: false,
      isError: false,
      reset: jest.fn(),
    });

    render(<VisitorFeedbackForm />);

    expect(screen.getByRole('button', { name: /Submitting.../i })).toBeDisabled();
  });
});
