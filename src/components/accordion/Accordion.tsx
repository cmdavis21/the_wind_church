'use client';

import { ReactElement } from 'react';

import AccordionItem, { ACCORDION_TYPE } from './accordion-item/AccordionItem';

interface AccordionProps {
  variant?: ACCORDION_TYPE;
  content: {
    icon?: React.FC<React.SVGAttributes<unknown>>;
    title: string;
    description: string | ReactElement;
    defaultOpen?: boolean;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ variant = ACCORDION_TYPE.DEFAULT, content }) => (
  <div className={`w-full flex flex-col ${variant === ACCORDION_TYPE.DEFAULT ? 'gap-lg' : ''}`}>
    {content.map((acc) => (
      <AccordionItem key={`accordion-container-${acc.title}`} variant={variant} {...acc} />
    ))}
  </div>
);

export default Accordion;
