import { styleSelectedWords } from '@/data/utils';
import React from 'react';

interface CenterTextSectionProps {
  title: string;
  highlight?: number[][];
  description?: string;
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({ title, highlight, description }) => (
  <div className="flex flex-col gap-lg max-w-[1000px] font-light text-center mx-auto">
    {highlight && typeof title === 'string' ? (
      <div
        dangerouslySetInnerHTML={{
          __html: styleSelectedWords({
            text: title,
            array: highlight,
            htmlTag: 'h2',
          }),
        }}
      />
    ) : (
      <h1>{title}</h1>
    )}
    {description && (
      <h4 className="text-light-charcoal dark:text-dark-primaryText">{description}</h4>
    )}
  </div>
);

export default CenterTextSection;
