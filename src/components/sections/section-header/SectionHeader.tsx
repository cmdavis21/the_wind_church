import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle }) => (
  <div id={id} className="py-2xl">
    <h2 className="text-4xl tracking-tight capitalize">{title}</h2>
    {subtitle && (
      <div className="mt-sm flex items-center gap-sm">
        <div className="h-[1px] w-[40px] bg-brand-primary" />
        <h5 className="uppercase text-xs tracking-widest text-light-navy dark:text-dark-navy">
          {subtitle}
        </h5>
      </div>
    )}
  </div>
);

export default SectionHeader;
