import React from 'react';

import Plus from '../icons/plus';
import { ACCORDION_TYPE } from './Accordion';

const AccordionItemSkeleton = ({ variant }: { variant: ACCORDION_TYPE }) =>
  variant === ACCORDION_TYPE.DEFAULT ? (
    <div className="animate-pulse w-full border px-lg py-[15px] rounded-lg">
      <div className="flex items-center gap-md">
        <div className="h-[30px] w-[30px] rounded-md bg-[#EDEDED]" />
        <div className="flex items-center gap-md w-[40%]">
          <div className="h-[30px] w-[25%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[35%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[10%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[15%] rounded-sm bg-[#EDEDED]" />
        </div>
      </div>
      <Plus className="size-[20px] min-w-[20px] min-h-[20px] fill-light-navy dark:fill-dark-primaryText" />
    </div>
  ) : (
    <div className="animate-pulse w-full border border-x-0 border-t-0 px-lg py-[15px] rounded-lg">
      <Plus className="size-[20px] min-w-[20px] min-h-[20px] fill-light-navy dark:fill-dark-primaryText" />
      <div className="flex items-center gap-md">
        <div className="h-[30px] w-[30px] rounded-md bg-[#EDEDED]" />
        <div className="flex items-center gap-md w-[40%]">
          <div className="h-[30px] w-[25%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[35%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[10%] rounded-sm bg-[#EDEDED]" />
          <div className="h-[30px] w-[15%] rounded-sm bg-[#EDEDED]" />
        </div>
      </div>
    </div>
  );

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
