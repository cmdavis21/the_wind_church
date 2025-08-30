'use client';

import { ReactElement } from 'react';

import AccordionItemWithLine from './accordion-item-with-line/AccordionItemWithLine';
import AccordionItem from './accordion-item/AccordionItem';

export enum AccordionType {
  DEFAULT,
  PRODUCT,
}

interface AccordionProps {
  content: {
    image?: string;
    icon?: React.FC<React.SVGAttributes<unknown>> | ReactElement;
    title: string;
    description: string | ReactElement;
    defaultOpen?: boolean;
    show?: boolean;
  }[];
  accordionType?: AccordionType;
}

const Accordion: React.FC<AccordionProps> = ({
  content,
  accordionType = AccordionType.DEFAULT,
}) => {
  const getAccordionType = (
    accordionContent: (typeof content)[0],
    type: AccordionType
  ) => {
    switch (type) {
      case AccordionType.DEFAULT:
        return (
          <AccordionItem
            key={`accordion-container-${accordionContent.title}`}
            image={accordionContent.image}
            icon={accordionContent.icon}
            title={accordionContent.title}
            description={accordionContent.description}
            defaultOpen={accordionContent.defaultOpen}
          />
        );
      case AccordionType.PRODUCT:
        return (
          <AccordionItemWithLine
            key={`accordion-container-${accordionContent.title}`}
            title={accordionContent.title}
            description={accordionContent.description}
            defaultOpen={accordionContent.defaultOpen}
            show={accordionContent.show}
          />
        );
    }
  };

  return (
    <div
      className={`w-full flex flex-col ${
        accordionType !== AccordionType.PRODUCT ? 'gap-lg' : ''
      }`}
    >
      {content.map((section) => getAccordionType(section, accordionType))}
    </div>
  );
};

export default Accordion;
