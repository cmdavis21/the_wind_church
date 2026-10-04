import React from 'react';

interface CenterTextSectionProps {
  title: string;
  highlight?: number[][];
  description?: string;
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({ title, highlight, description }) => (
  // <div className="flex flex-col gap-lg max-w-[700px] font-light text-center mx-auto">
  //   {highlight && typeof title === 'string' ? (
  //     <Text htmlTag="h2" highlight={highlight}>
  //       {title}
  //     </Text>
  //   ) : (
  //     <h2>{title}</h2>
  //   )}
  //   {description && (
  //     <h4 className="text-light-charcoal dark:text-dark-primaryText">{description}</h4>
  //   )}
  // </div>
  <div className="max-w-[700px] mx-auto text-center py-2xl flex flex-col gap-lg">
    <h2 className="text-3xl font-light tracking-tight">{title}</h2>

    {description && (
      <h4 className="text-light-charcoal dark:text-dark-primaryText leading-relaxed">
        {description}
      </h4>
    )}
  </div>
);

export default CenterTextSection;
