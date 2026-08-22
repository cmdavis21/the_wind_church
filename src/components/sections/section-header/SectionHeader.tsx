import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle }) => (
  <div id={id} className="relative">
    <div className="flex flex-col gap-3 w-fit">
      <h2 className="capitalize leading-none">{title}</h2>
      {subtitle && (
        <>
          <h5 className="font-light text-light-navy dark:text-dark-navy tracking-wider uppercase">
            {subtitle}
          </h5>
          <div className="w-[15%] h-[2px] bg-brand-primary rounded-full" />
        </>
      )}
    </div>
  </div>
);

export default SectionHeader;
