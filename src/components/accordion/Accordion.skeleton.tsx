import React from 'react';

import AccordionItemSkeleton from './accordion-item/AccordionItem.skeleton';
import AccordionItemWithLineSkeleton from './accordion-item-with-line/AccordionItemWithLine.skeleton';

const AccordionSkeleton: React.FC<{ productAccordion?: boolean }> = ({
  productAccordion,
}) => (
  <div className="w-full flex flex-col gap-lg">
    {productAccordion ? (
      <>
        <AccordionItemWithLineSkeleton />
        <AccordionItemWithLineSkeleton />
        <AccordionItemWithLineSkeleton />
        <AccordionItemWithLineSkeleton />
      </>
    ) : (
      <>
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
      </>
    )}
  </div>
);

export default AccordionSkeleton;
