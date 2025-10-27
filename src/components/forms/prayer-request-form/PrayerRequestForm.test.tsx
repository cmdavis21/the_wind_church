import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import PrayerRequestForm from './PrayerRequestForm';

import { useCreatePrayerRequest } from '@/data/services/forms/prayer-request-submission';

// Mock the useCreatePrayerRequest hook
jest.mock('@/data/services/forms/prayer-request-submission', () => ({
  useCreatePrayerRequest: jest.fn(),
}));

describe('PrayerRequestForm', () => {
  const mockSubmitRequest = jest.fn();

  beforeEach(() => {
    // Mock implementation for the mutation hook
    (useCreatePrayerRequest as jest.Mock).mockReturnValue({
      mutate: mockSubmitRequest,
      isPending: false,
      isSuccess: false,
      isError: false,
      reset: jest.fn(),
      resetMutation: jest.fn(),
    });
  });

  it('should render the form fields correctly', () => {
    render(<PrayerRequestForm />);

    // Check that the form fields are rendered
    expect(screen.getByPlaceholderText('Enter your first name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your prayer here')).toBeInTheDocument();
    expect(screen.getByText('Would you like us to respond to you by email?')).toBeInTheDocument();
    expect(screen.getByLabelText('Yes')).toBeInTheDocument();
    expect(screen.getByLabelText('No, just prayers')).toBeInTheDocument();
  });

  it('should show an error if the form is submitted with invalid data', async () => {
    render(<PrayerRequestForm />);

    // Trigger form submission without filling in any fields
    fireEvent.click(screen.getByText('Submit!'));

    await waitFor(() => {
      expect(screen.getByText('Enter your first name')).toBeInTheDocument();
      expect(screen.getByText('Enter your last name')).toBeInTheDocument();
      expect(screen.getByText('Enter your email')).toBeInTheDocument();
      expect(screen.getByText('Please enter your prayer')).toBeInTheDocument();
    });
  });

  it('should show success message after successful submission', async () => {
    // Mock successful mutation
    (useCreatePrayerRequest as jest.Mock).mockReturnValue({
      mutate: mockSubmitRequest,
      isPending: false,
      isSuccess: true,
      isError: false,
      reset: jest.fn(),
      resetMutation: jest.fn(),
    });

    render(<PrayerRequestForm />);

    // Simulate form submission
    fireEvent.change(screen.getByPlaceholderText('Enter your first name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your prayer here'), {
      target: { value: 'Please pray for my family' },
    });

    fireEvent.click(screen.getByText('Submit!'));

    await waitFor(() => {
      // Check that success message is displayed
      expect(screen.getByText(/We will keep you in our prayers/)).toBeInTheDocument();
    });
  });

  it('should show error message after failed submission', async () => {
    // Mock failed mutation
    (useCreatePrayerRequest as jest.Mock).mockReturnValue({
      mutate: mockSubmitRequest,
      isPending: false,
      isSuccess: false,
      isError: true,
      reset: jest.fn(),
      resetMutation: jest.fn(),
    });

    render(<PrayerRequestForm />);

    // Simulate form submission
    fireEvent.change(screen.getByPlaceholderText('Enter your first name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your prayer here'), {
      target: { value: 'Please pray for my family' },
    });

    fireEvent.click(screen.getByText('Submit!'));

    await waitFor(() => {
      // Check that error message is displayed
      expect(screen.getByText(/There was an error submitting your request/)).toBeInTheDocument();
    });
  });

  it('should disable the submit button when the form is submitting', () => {
    (useCreatePrayerRequest as jest.Mock).mockReturnValue({
      mutate: mockSubmitRequest,
      isPending: true,
      isSuccess: false,
      isError: false,
      reset: jest.fn(),
      resetMutation: jest.fn(),
    });

    render(<PrayerRequestForm />);

    // Ensure the submit button is disabled during submission
    expect(screen.getByText('Submitting...')).toBeInTheDocument();
    expect(screen.getByText('Submit!')).toBeDisabled();
  });
});
