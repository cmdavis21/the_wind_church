import { fireEvent, render, screen } from '@testing-library/react';

import CarouselDot from './CarouselDot';

describe('CarouselDot', () => {
  const mockOnClick = jest.fn();

  it('should render a button', () => {
    render(<CarouselDot onClick={mockOnClick} active={false} blueDot={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    render(<CarouselDot onClick={mockOnClick} active={false} blueDot={false} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should have the correct classes when active and blueDot is false', () => {
    render(<CarouselDot onClick={mockOnClick} active={true} blueDot={false} />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-brand-primary/20 border-primary');
  });

  it('should have the correct classes when active and blueDot is true', () => {
    render(<CarouselDot onClick={mockOnClick} active={true} blueDot={true} />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-navy/20 border-navy');
  });

  it('should have the correct classes when inactive', () => {
    render(<CarouselDot onClick={mockOnClick} active={false} blueDot={false} />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-light-gray/20 border-light-gray');
  });
});
