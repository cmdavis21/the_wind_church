import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
  const title = 'Is there coffee?';
  const description =
    'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

  it('should render correctly', () => {
    render(<AccordionItem title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should toggle the dropdown when clicked', () => {
    render(<AccordionItem title={title} description={description} />);

    const button = screen.getByRole('button');
    const dropdownText = screen.getByText(description);

    // Initially, the description should be hidden (opacity-0 class makes it invisible)
    expect(dropdownText).toHaveClass('opacity-0', { exact: false });

    // Click to open
    fireEvent.click(button);
    expect(dropdownText).not.toHaveClass('opacity-0', { exact: false });

    // Click to close
    fireEvent.click(button);
    expect(dropdownText).toHaveClass('opacity-0', { exact: false });
  });
});
