import React from 'react';

import { ACCORDION_TYPE } from './accordion-item/AccordionItem';
import AccordionItemSkeleton from './accordion-item/AccordionItem.skeleton';

const AccordionSkeleton: React.FC<{ variant?: ACCORDION_TYPE }> = ({
  variant = ACCORDION_TYPE.DEFAULT,
}) => (
  <div className="w-full flex flex-col gap-lg">
    <AccordionItemSkeleton variant={variant} />
    <AccordionItemSkeleton variant={variant} />
    <AccordionItemSkeleton variant={variant} />
    <AccordionItemSkeleton variant={variant} />
  </div>
);

export default AccordionSkeleton;
