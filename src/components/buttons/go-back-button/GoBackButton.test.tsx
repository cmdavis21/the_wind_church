import { render, screen, fireEvent } from '@testing-library/react';

import GoBackButton from './GoBackButton';

import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('GoBackButton', () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });
  });

  it("should render with default label 'Go back'", () => {
    render(<GoBackButton />);
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });

  it('should render with a custom label', () => {
    render(<GoBackButton label="Return" />);
    expect(screen.getByText('Return')).toBeInTheDocument();
  });

  it('should render the icon by default', () => {
    render(<GoBackButton />);
    expect(screen.getByTestId('turn-left-icon')).toBeInTheDocument();
  });

  it('should not render the icon when icon prop is false', () => {
    render(<GoBackButton icon={false} />);
    expect(screen.queryByTestId('turn-left-icon')).not.toBeInTheDocument();
  });

  it('should call router.back() when clicked', () => {
    render(<GoBackButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockBack).toHaveBeenCalled();
  });

  it('should apply custom icon class when iconClassName is provided', () => {
    render(<GoBackButton iconClassName="custom-icon-class" />);
    const icon = screen.getByTestId('turn-left-icon');
    expect(icon).toHaveClass('custom-icon-class');
  });
});
