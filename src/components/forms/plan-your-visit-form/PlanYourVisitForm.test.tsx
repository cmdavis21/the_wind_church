import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import PlanYourVisitForm from './PlanYourVisitForm';

import { useCreatePlanYourVisit } from '@/data/services/forms/plan-your-church-visit';

jest.mock('@/data/services/forms/plan-your-church-visit', () => ({
  useCreatePlanYourVisit: jest.fn(),
}));

describe('PlanYourVisitForm', () => {
  let mockSubmit: jest.Mock;

  beforeEach(() => {
    mockSubmit = jest.fn();
    (useCreatePlanYourVisit as jest.Mock).mockReturnValue({
      mutate: mockSubmit,
      isPending: false,
      isSuccess: false,
      isError: false,
      reset: jest.fn(),
    });
  });

  it('renders the form correctly', () => {
    render(<PlanYourVisitForm />);

    expect(screen.getByText('Plan Your Visit')).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How many people will be coming with you/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Which Sunday will you visit/i)).toBeInTheDocument();
  });

  it('shows validation errors when submitting an empty form', async () => {
    render(<PlanYourVisitForm />);

    fireEvent.click(screen.getByRole('button', { name: /Submit!/i }));

    await waitFor(() => {
      expect(screen.getByText('Enter your first name')).toBeInTheDocument();
      expect(screen.getByText('Enter your last name')).toBeInTheDocument();
      expect(screen.getByText('Enter your email')).toBeInTheDocument();
      expect(screen.getByText('Enter your phone number')).toBeInTheDocument();
      expect(
        screen.getByText('Please let us know how many will be coming with you.')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Please select an ideal date we can expect you.')
      ).toBeInTheDocument();
    });
  });

  it('submits the form when valid data is provided', async () => {
    render(<PlanYourVisitForm />);

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
    fireEvent.input(screen.getByLabelText(/How many people will be coming with you/i), {
      target: { value: '2' },
    });

    // Select a Sunday date
    const select = screen.getByLabelText(/Which Sunday will you visit/i);
    fireEvent.change(select, {
      target: { value: select.children[1]?.textContent },
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit!/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'test@example.com',
        attendance: 2,
        dayOfVisit: select.children[1]?.textContent,
      });
    });
  });
});
