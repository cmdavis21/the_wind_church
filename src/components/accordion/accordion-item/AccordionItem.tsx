import Plus from '@/components/icons/plus';
import { useResizeHeightObserver } from '@/data/hooks';
import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react';

interface AccordionItemProps {
  image?: string;
  icon: React.FC<React.SVGAttributes<unknown>>;
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
    <div className="w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow hover:shadow-lg transition-shadow duration-200 p-5 md:p-6 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-[15px] md:gap-5"
      >
        <div className="flex items-center gap-md">
          {image && (
            <div className="relative min-w-[30px] min-h-[30px]">
              <Image fill src={image} alt="decorative img" className="rounded-sm" />
            </div>
          )}
          {Icon && <Icon width={30} height={30} />}
          <h4
            className={`text-light-navy dark:text-dark-primaryText text-left tracking-wide ${
              open ? 'font-semibold' : ''
            }`}
          >
            {title}
          </h4>
        </div>
        <Plus
          className={`size-[20px] min-w-[20px] min-h-[20px] ${open ? 'rotate-45' : ''} fill-light-navy dark:fill-dark-primaryText transition-[rotate,fill] duration-300`}
        />
      </button>

      {/* dropdown */}
      <div
        style={{ height: open ? `${height + 20}px` : '0px' }}
        className={`${
          open ? 'pt-5 md:pt-6 mt-5 md:mt-6' : 'opacity-0 pointer-events-none'
        } border border-light-gray dark:border-x-dark-charcoal border-x-0 border-b-0 transition-[height, opacity] duration-500`}
      >
        <div
          ref={accordionDesc}
          className="body-large text-light-secondaryText dark:text-dark-primaryText"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
