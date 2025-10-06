import React, { ReactElement, useRef, useState } from 'react';

import Plus from '@/components/icons/plus';
import { useResizeHeightObserver } from '@/data/hooks';

interface AccordionItemWithLineProps {
  title: string;
  description: string | ReactElement;
  defaultOpen?: boolean;
  show?: boolean;
}

const AccordionItemWithLine: React.FC<AccordionItemWithLineProps> = ({
  title,
  description,
  defaultOpen,
  show = true,
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const accordionDesc = useRef<HTMLHeadingElement | null>(null);
  const height = useResizeHeightObserver(accordionDesc);

  return (
    <div className={`${!show ? 'hidden' : ''} w-full p-[15px] overflow-hidden`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-md pb-md border border-gray dark:border-grayDark border-x-0 border-t-0"
      >
        <Plus className={`fill-primary ${open ? 'rotate-45' : ''} transition-all duration-300`} />
        <h3
          className={`max-sm:text-[20px] text-navy dark:text-navyLight text-left font-thin tracking-wide ${
            open ? 'font-bold' : ''
          }`}
        >
          {title}
        </h3>
      </button>

      {/* dropdown */}
      <div
        style={{ height: open ? `${height + 10}px` : '0px' }}
        className={`${
          open ? 'pt-[10px] mt-[10px]' : 'opacity-0 pointer-events-none'
        } transition-[height, opacity] duration-300`}
      >
        <div ref={accordionDesc} className="body-large text-charcoal dark:text-textInverse">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionItemWithLine;
