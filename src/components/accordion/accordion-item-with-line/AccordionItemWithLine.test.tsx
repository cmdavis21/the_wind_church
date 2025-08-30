import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AccordionItemWithLine from './AccordionItemWithLine';

describe('AccordionItemWithLine', () => {
  const title = 'What is faith?';
  const description =
    'Faith is the substance of things hoped for, the evidence of things not seen.';

  it('should render correctly with title and description', () => {
    render(<AccordionItemWithLine title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should toggle dropdown when clicked', () => {
    render(<AccordionItemWithLine title={title} description={description} />);

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

  it('should not render when show is false', () => {
    render(
      <AccordionItemWithLine
        title={title}
        description={description}
        show={false}
      />
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });
});
