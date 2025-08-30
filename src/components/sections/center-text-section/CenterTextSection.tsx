import React, { ReactElement } from "react";

import { styleSelectedWords } from "@/data/utils";

interface CenterTextSectionProps {
  title: string | ReactElement;
  highlight?: number[][];
  description?: string;
  noPadding?: boolean;
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({
  title,
  highlight,
  description,
  noPadding,
}) => (
  <div
    className={`${
      noPadding ? "" : "py-[50px]"
    } flex flex-col gap-[25px] max-w-[1000px] mx-auto text-center font-light dark:text-softWhite`}
  >
    {highlight && typeof title === "string" ? (
      <div
        dangerouslySetInnerHTML={{
          __html: styleSelectedWords({
            text: title,
            array: highlight,
            htmlTag: "h1",
          }),
        }}
      />
    ) : (
      <h1>{title}</h1>
    )}
    {description && (
      <h4 className="text-charcoal dark:text-softWhite">{description}</h4>
    )}
  </div>
);

export default CenterTextSection;
