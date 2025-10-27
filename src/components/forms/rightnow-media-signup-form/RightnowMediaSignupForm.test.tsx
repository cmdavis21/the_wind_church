import { useCreateRightnowMediaSignup } from '@/data/services/forms/rightnow-media-signup';
import { useCreateContactSignup } from '@/data/services/sanity/mutations/contact-signup';
import { YesNo } from '@/data/types';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RightnowMediaSignupForm from './RightnowMediaSignupForm';

jest.mock('@/data/services/forms/member-contact-signup', () => ({
  useCreateContactSignup: jest.fn(),
}));

jest.mock('@/data/services/forms/rightnow-media-signup', () => ({
  useCreateRightnowMediaSignup: jest.fn(),
}));

describe('RightnowMediaSignupForm', () => {
  beforeEach(() => {
    const signupMemberMock = jest.fn();
    const signupUserMock = jest.fn();

    (useCreateRightnowMediaSignup as jest.Mock).mockReturnValue({
      mutate: signupMemberMock,
      isPending: false,
      isSuccess: false,
      isError: false,
    });

    (useCreateContactSignup as jest.Mock).mockReturnValue({
      mutate: signupUserMock,
    });
  });

  it('renders form inputs correctly', () => {
    render(<RightnowMediaSignupForm />);

    expect(screen.getByLabelText(/First Name\*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name\*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone\*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email\*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Already a Wind member\?/i)).toBeInTheDocument();
  });

  it('shows validation errors on empty submission', async () => {
    render(<RightnowMediaSignupForm />);
    fireEvent.click(screen.getByText(/Submit!/i));

    await waitFor(() => {
      expect(screen.getByText(/Enter your first name/i)).toBeInTheDocument();
      expect(screen.getByText(/Enter your last name/i)).toBeInTheDocument();
      expect(screen.getByText(/Enter your phone number/i)).toBeInTheDocument();
      expect(screen.getByText(/Enter your email/i)).toBeInTheDocument();
    });
  });

  it('submits the form correctly when user is not a Wind member', async () => {
    const signupMemberMock = jest.fn();
    const signupUserMock = jest.fn();
    render(<RightnowMediaSignupForm />);

    fireEvent.change(screen.getByLabelText(/First Name\*/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name\*/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Phone\*/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/Email\*/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.click(screen.getByLabelText(/No/i));
    fireEvent.click(screen.getByText(/Submit!/i));

    await waitFor(() => {
      expect(signupUserMock).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
      });
      expect(signupMemberMock).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        windMember: YesNo.NO,
      });
    });
  });

  it('submits the form correctly when user is a Wind member', async () => {
    const signupMemberMock = jest.fn();
    const signupUserMock = jest.fn();
    render(<RightnowMediaSignupForm />);

    fireEvent.change(screen.getByLabelText(/First Name\*/i), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name\*/i), {
      target: { value: 'Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Phone\*/i), {
      target: { value: '0987654321' },
    });
    fireEvent.change(screen.getByLabelText(/Email\*/i), {
      target: { value: 'jane.smith@example.com' },
    });
    fireEvent.click(screen.getByLabelText(/Yes/i));
    fireEvent.click(screen.getByText(/Submit!/i));

    await waitFor(() => {
      expect(signupMemberMock).toHaveBeenCalledWith({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '0987654321',
        windMember: YesNo.YES,
      });
      expect(signupUserMock).not.toHaveBeenCalled();
    });
  });
});
