import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import SimpleCarousel from './SimpleCarousel';

describe('SimpleCarousel', () => {
  const slides = [
    <div key="slide-1">Slide 1</div>,
    <div key="slide-2">Slide 2</div>,
    <div key="slide-3">Slide 3</div>,
  ];

  it('should render the carousel with slides', () => {
    render(<SimpleCarousel slides={slides} />);

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('should render navigation arrows', () => {
    render(<SimpleCarousel slides={slides} />);

    const leftArrow = screen.getAllByRole('button')[0]; // First button is left arrow
    const rightArrow = screen.getAllByRole('button')[1]; // Second button is right arrow

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it('should render dots when showDots is true', () => {
    render(<SimpleCarousel slides={slides} showDots />);

    const dots = screen.getAllByRole('button');
    expect(dots.length).toBeGreaterThan(2); // Includes arrows + dots
  });

  it('should call onClick when a dot is clicked', () => {
    render(<SimpleCarousel slides={slides} showDots />);

    const dots = screen.getAllByRole('button').slice(2); // Exclude arrows
    fireEvent.click(dots[1]); // Click second dot

    expect(dots[1]).toHaveClass('bg-primary/20 border-yellow'); // Verifying active state change
  });

  it('should apply blue dot styling when blueDots is true', () => {
    render(<SimpleCarousel slides={slides} showDots blueDots />);

    const dots = screen.getAllByRole('button').slice(2);
    fireEvent.click(dots[1]);

    expect(dots[1]).toHaveClass('bg-blue/20 border-blue');
  });
});
