import Image from "next/image";
import React, { ReactElement, useRef, useState } from "react";

import { useResizeHeightObserver } from "@/data/hooks";

import Caret from "../../icons/caret";

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
    <div className="w-full border border-lightGray px-[20px] md:px-[25px] py-[20px] dark:bg-softGray dark:border-softCharcoal rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-[15px] md:gap-[20px]"
      >
        <div className="flex items-center gap-md">
          {image && (
            <div className="relative min-w-[30px] min-h-[30px]">
              <Image
                fill
                src={image}
                alt="decorative img"
                className="rounded-sm"
              />
            </div>
          )}
          {Icon &&
            (typeof Icon === "function" ? (
              <Icon width={30} height={30} />
            ) : (
              Icon
            ))}
          <p
            className={`leading-[24px] font-light text-[18px] md:text-[20px] xl:text-[24px] text-blue dark:text-softBlue text-left tracking-wide ${
              open ? "italic" : ""
            }`}
          >
            {title}
          </p>
        </div>
        <Caret
          className={`${
            !open ? "rotate-180" : ""
          } fill-yellow dark:fill-softYellow min-w-[20px] min-h-[20px] size-[20px] md:min-w-[25px] md:min-h-[25px] md:size-[25px] transition-rotate duration-300`}
        />
      </button>

      {/* dropdown */}
      <div
        style={{ height: open ? `${height + 20}px` : "0px" }}
        className={`${
          open
            ? "pt-[15px] md:pt-[20px] mt-[15px] md:mt-[20px]"
            : "opacity-0 pointer-events-none"
        } border border-lightGray dark:border-softCharcoal border-x-0 border-b-0 transition-[height, opacity] duration-300`}
      >
        <div
          ref={accordionDesc}
          className="body-large text-charcoal dark:text-softWhite"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
