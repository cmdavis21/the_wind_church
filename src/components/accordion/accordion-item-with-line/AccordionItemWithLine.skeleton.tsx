import React from 'react';

import Plus from '@/components/icons/plus';

const AccordionItemWithLineSkeleton = () => (
  <div className="animate-pulse w-full border border-x-0 border-t-0 px-[25px] py-[15px] rounded-lg">
    <Plus fill="#EDEDED" width={35} height={35} />
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

export default AccordionItemWithLineSkeleton;
