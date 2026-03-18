// 'use client';

// import { ReactElement } from 'react';

// import AccordionItem, { ACCORDION_TYPE } from './accordion-item/AccordionItem';

// interface AccordionProps {
//   variant?: ACCORDION_TYPE;
//   content: {
//     image?: string;
//     icon?: React.FC<React.SVGAttributes<unknown>>;
//     title: string;
//     description: string | ReactElement;
//     defaultOpen?: boolean;
//   }[];
// }

// const Accordion: React.FC<AccordionProps> = ({ variant = ACCORDION_TYPE.DEFAULT, content }) => (
//   <div className={`w-full flex flex-col ${variant === ACCORDION_TYPE.DEFAULT ? 'gap-lg' : ''}`}>
//     {content.map((acc) => (
//       <AccordionItem key={`accordion-container-${acc.title}`} variant={variant} {...acc} />
//     ))}
//   </div>
// );

// export default Accordion;

'use client';

import Plus from '@/components/icons/plus';
import { useResizeHeightObserver } from '@/data/hooks';
import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react';

export enum ACCORDION_TYPE {
  DEFAULT,
  MINIMAL,
}

interface AccordionItemData {
  image?: string;
  icon?: React.FC<React.SVGAttributes<unknown>>;
  title: string;
  description: string | ReactElement;
  defaultOpen?: boolean;
}

interface AccordionProps {
  variant?: ACCORDION_TYPE;
  content: AccordionItemData[];
}

const Accordion: React.FC<AccordionProps> = ({ variant = ACCORDION_TYPE.DEFAULT, content }) => {
  const isDefault = variant === ACCORDION_TYPE.DEFAULT;

  return (
    <div className={cn('w-full flex flex-col', isDefault && 'gap-lg')}>
      {content.map((item) => (
        <AccordionItem key={item.title} {...item} variant={variant} />
      ))}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemData & { variant: ACCORDION_TYPE }> = ({
  variant,
  image,
  icon: Icon,
  title,
  description,
  defaultOpen,
}) => {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const accordionDesc = useRef<HTMLDivElement | null>(null);
  const height = useResizeHeightObserver(accordionDesc);
  const isDefault = variant === ACCORDION_TYPE.DEFAULT;

  return (
    <div
      className={cn(
        'w-full overflow-hidden p-5 rounded-lg',
        isDefault &&
          'border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow hover:shadow-lg transition-shadow duration-200'
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full flex items-center',
          isDefault
            ? 'gap-[15px] md:gap-5 justify-between'
            : 'gap-md pb-md border border-light-gray dark:border-dark-gray border-x-0 border-t-0'
        )}
      >
        <div className="flex items-center gap-md">
          {image && (
            <div className="relative min-w-[30px] size-[30px] aspect-square">
              <Image fill src={image} alt="decorative img" className="rounded-sm" />
            </div>
          )}

          {Icon && <Icon width={30} height={30} />}

          <h4
            className={cn(
              'text-left tracking-wide',
              isDefault
                ? 'text-light-navy dark:text-dark-primaryText'
                : 'max-sm:text-[20px] text-light-navy dark:text-dark-navy font-thin',
              open ? 'font-semibold' : 'font-normal'
            )}
          >
            {title}
          </h4>
        </div>

        <Plus
          className={cn(
            open && 'rotate-45',
            'transition-[rotate] duration-300',
            'size-[20px] min-w-[20px] min-h-[20px]',
            isDefault
              ? 'order-last fill-light-navy dark:fill-dark-primaryText'
              : 'order-first fill-brand-primary'
          )}
        />
      </button>

      {/* Dropdown */}
      <div
        style={{ height: open ? `${height + (isDefault ? 20 : 10)}px` : '0px' }}
        className={cn(
          'transition-[height, opacity] duration-300',
          open
            ? isDefault
              ? 'pt-5 mt-5 border border-light-gray dark:border-dark-charcoal border-x-0 border-b-0'
              : 'pt-[10px]'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div ref={accordionDesc} className="body-large">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
