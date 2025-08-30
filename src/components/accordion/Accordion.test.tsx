import { render, screen } from '@testing-library/react';
import React from 'react';

import Accordion, { AccordionType } from './Accordion';

describe('Accordion', () => {
  const defaultContent = [
    {
      title: 'Amet reprehenderit error explicabo velit repudiandae?',
      description:
        'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur.',
      defaultOpen: true,
    },
  ];

  const productContent = [
    {
      title: 'Product Warranty',
      description: 'This product has a 2-year warranty.',
      defaultOpen: false,
      show: true,
    },
  ];

  it('should render a default accordion with content', () => {
    render(<Accordion content={defaultContent} />);

    expect(screen.getByText(defaultContent[0].title)).toBeInTheDocument();
    expect(screen.getByText(defaultContent[0].description)).toBeInTheDocument();
  });

  it('should render a product accordion with content', () => {
    render(
      <Accordion
        content={productContent}
        accordionType={AccordionType.PRODUCT}
      />
    );

    expect(screen.getByText(productContent[0].title)).toBeInTheDocument();
    expect(screen.getByText(productContent[0].description)).toBeInTheDocument();
  });

  it('should not render an item if `show` is false in PRODUCT accordion', () => {
    const hiddenProductContent = [{ ...productContent[0], show: false }];
    render(
      <Accordion
        content={hiddenProductContent}
        accordionType={AccordionType.PRODUCT}
      />
    );

    expect(
      screen.queryByText(hiddenProductContent[0].title)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(hiddenProductContent[0].description)
    ).not.toBeInTheDocument();
  });
});
