import { useCreateContactSignup } from '@/data/services/sanity/mutations/contact-signup';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FooterContactForm from './FooterContactForm';

// Mock the mutation hook
jest.mock('@/data/services/forms/member-contact-signup', () => ({
  useCreateContactSignup: jest.fn(),
}));

describe('FooterContactForm', () => {
  beforeEach(() => {
    const mockMutate = jest.fn();
    (useCreateContactSignup as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isSuccess: false,
      isError: false,
    });
  });

  it('renders the form correctly', () => {
    render(<FooterContactForm />);

    expect(screen.getByPlaceholderText('First Name*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Join Now!' })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<FooterContactForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Join Now!' }));

    await waitFor(() => {
      expect(screen.getByText('Enter your first name')).toBeInTheDocument();
      expect(screen.getByText('Enter your last name')).toBeInTheDocument();
      expect(screen.getByText('Enter your email')).toBeInTheDocument();
    });
  });

  it('calls mutation function when form is submitted with valid data', async () => {
    const mockMutate = jest.fn();
    render(<FooterContactForm />);

    fireEvent.change(screen.getByPlaceholderText('First Name*'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name*'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Phone Number*'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email*'), {
      target: { value: 'john.doe@example.com' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Join Now!' }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john.doe@example.com',
      });
    });
  });

  it('displays success message when submission succeeds', async () => {
    const mockMutate = jest.fn();
    (useCreateContactSignup as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isSuccess: true,
      isError: false,
    });

    render(<FooterContactForm />);

    expect(screen.getByText('Thank you for joining.')).toBeInTheDocument();
  });

  it('displays error message when submission fails', async () => {
    const mockMutate = jest.fn();
    (useCreateContactSignup as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isSuccess: false,
      isError: true,
    });

    render(<FooterContactForm />);

    expect(screen.getByText('Error. Please try again.')).toBeInTheDocument();
  });

  it('disables inputs and button when submission is pending', () => {
    const mockMutate = jest.fn();
    (useCreateContactSignup as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
      isSuccess: false,
      isError: false,
    });

    render(<FooterContactForm />);

    expect(screen.getByPlaceholderText('First Name*')).toBeDisabled();
    expect(screen.getByPlaceholderText('Last Name*')).toBeDisabled();
    expect(screen.getByPlaceholderText('Phone Number*')).toBeDisabled();
    expect(screen.getByPlaceholderText('Email*')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Submitting...' })).toBeDisabled();
  });
});
