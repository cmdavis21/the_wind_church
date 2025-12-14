import Plus from '@/components/icons/plus';
import { useResizeHeightObserver } from '@/data/hooks';
import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react';

interface AccordionItemProps {
  image?: string;
  icon?: React.FC<React.SVGAttributes<unknown>> | ReactElement;
  title: string;
  description: string | ReactElement;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  image,
  icon: Icon,
  title,
  description,
  defaultOpen,
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const accordionDesc = useRef<HTMLHeadingElement | null>(null);
  const height = useResizeHeightObserver(accordionDesc);

  return (
    <div className="w-full border border-gray dark:bg-grayDark dark:border-grayDark dark:text-textInverse px-[20px] md:px-[25px] py-[20px] rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-[15px] md:gap-[20px]"
      >
        <div className="flex items-center gap-md">
          {image && (
            <div className="relative min-w-[30px] min-h-[30px]">
              <Image fill src={image} alt="decorative img" className="rounded-sm" />
            </div>
          )}
          {Icon && (typeof Icon === 'function' ? <Icon width={30} height={30} /> : Icon)}
          <p
            className={`leading-[24px] font-light text-[18px] md:text-[20px] xl:text-[24px] text-navy dark:text-textInverse text-left tracking-wide ${
              open ? 'italic' : ''
            }`}
          >
            {title}
          </p>
        </div>
        <Plus
          className={`size-[20px] ${open ? 'rotate-45' : ''} fill-navy dark:fill-textInverse transition-all duration-300`}
        />
      </button>

      {/* dropdown */}
      <div
        style={{ height: open ? `${height + 20}px` : '0px' }}
        className={`${
          open ? 'pt-[15px] md:pt-[20px] mt-[15px] md:mt-[20px]' : 'opacity-0 pointer-events-none'
        } border border-gray dark:border-charcoalLight border-x-0 border-b-0 transition-[height, opacity] duration-300`}
      >
        <div ref={accordionDesc} className="body-large text-charcoal dark:text-textInverse">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
