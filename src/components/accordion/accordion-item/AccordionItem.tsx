import Plus from '@/components/icons/plus';
import { useResizeHeightObserver } from '@/data/hooks';
import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react';

export enum ACCORDION_TYPE {
  DEFAULT,
  MINIMAL,
}

interface AccordionItemProps {
  variant?: ACCORDION_TYPE;
  image?: string;
  icon?: React.FC<React.SVGAttributes<unknown>>;
  title: string;
  description: string | ReactElement;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  variant = ACCORDION_TYPE.DEFAULT,
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
        isDefault
          ? 'border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow hover:shadow-lg transition-shadow duration-200'
          : ''
      )}
    >
      {/* Header Button */}
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
        {/* Left Section */}
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

        {/* Plus Icon */}
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
        <div
          ref={accordionDesc}
          className="body-large text-light-secondaryText dark:text-dark-secondaryText"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
