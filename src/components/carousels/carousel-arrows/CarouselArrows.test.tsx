import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import CarouselArrows from './CarouselArrows';

describe('CarouselArrows', () => {
  const mockLeftClick = jest.fn();
  const mockRightClick = jest.fn();

  beforeEach(() => {
    render(
      <CarouselArrows
        className="test-class"
        leftArrowProps={{ onClick: mockLeftClick }}
        rightArrowProps={{ onClick: mockRightClick }}
      />
    );
  });

  it('should render two arrow buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('should call left arrow onClick function when clicked', () => {
    const leftButton = screen.getAllByRole('button')[0]; // First button
    fireEvent.click(leftButton);
    expect(mockLeftClick).toHaveBeenCalledTimes(1);
  });

  it('should call right arrow onClick function when clicked', () => {
    const rightButton = screen.getAllByRole('button')[1]; // Second button
    fireEvent.click(rightButton);
    expect(mockRightClick).toHaveBeenCalledTimes(1);
  });

  it('should disable left button when disable prop is true', () => {
    render(
      <CarouselArrows
        className="test-class"
        leftArrowProps={{ onClick: mockLeftClick, disable: true }}
        rightArrowProps={{ onClick: mockRightClick }}
      />
    );

    const leftButton = screen.getAllByRole('button')[0];
    expect(leftButton).toHaveClass(
      'opacity-50 pointer-events-none cursor-default'
    );
  });

  it('should disable right button when disable prop is true', () => {
    render(
      <CarouselArrows
        className="test-class"
        leftArrowProps={{ onClick: mockLeftClick }}
        rightArrowProps={{ onClick: mockRightClick, disable: true }}
      />
    );

    const rightButton = screen.getAllByRole('button')[1];
    expect(rightButton).toHaveClass(
      'opacity-50 pointer-events-none cursor-default'
    );
  });
});
