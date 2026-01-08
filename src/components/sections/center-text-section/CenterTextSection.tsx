import { styleSelectedWords } from '@/data/utils';
import React from 'react';

interface CenterTextSectionProps {
  title: string;
  highlight?: number[][];
  description?: string;
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({ title, highlight, description }) => (
  <div className="flex flex-col gap-[25px] max-w-[1000px] font-light text-center mx-auto">
    {highlight && typeof title === 'string' ? (
      <div
        dangerouslySetInnerHTML={{
          __html: styleSelectedWords({
            text: title,
            array: highlight,
            htmlTag: 'h1',
          }),
        }}
      />
    ) : (
      <h1>{title}</h1>
    )}
    {description && (
      <h4 className="text-light-secondaryText dark:text-dark-secondaryText">{description}</h4>
    )}
  </div>
);

export default CenterTextSection;
