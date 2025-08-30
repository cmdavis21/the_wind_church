import React from 'react';

import Caret from '@/components/icons/caret';

const AccordionItemSkeleton = () => (
  <div className="animate-pulse w-full border px-[25px] py-[15px] rounded-lg">
    <div className="flex items-center gap-md">
      <div className="h-[30px] w-[30px] rounded-md bg-[#EDEDED]" />
      <div className="flex items-center gap-md w-[40%]">
        <div className="h-[30px] w-[25%] rounded-sm bg-[#EDEDED]" />
        <div className="h-[30px] w-[35%] rounded-sm bg-[#EDEDED]" />
        <div className="h-[30px] w-[10%] rounded-sm bg-[#EDEDED]" />
        <div className="h-[30px] w-[15%] rounded-sm bg-[#EDEDED]" />
      </div>
    </div>
    <Caret fill="#EDEDED" width={35} height={35} />
  </div>
);

export default AccordionItemSkeleton;
