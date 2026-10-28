import React from 'react';

interface CenterTextSectionProps {
  title: string;
  description?: string;
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({ title, description }) => (
  <div className="text-center py-2xl max-w-[950px] mx-auto">
    <h2 className="text-4xl tracking-tight font-light">{title}</h2>
    {description && (
      <h4 className="mt-sm text-light-charcoal dark:text-dark-primaryText leading-relaxed">
        {description}
      </h4>
    )}
  </div>
);

export default CenterTextSection;
