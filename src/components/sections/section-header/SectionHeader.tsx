import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle }) => (
  <div id={id} className="relative">
    {/* Desktop */}
    <div className="hidden md:block">
      <div className="flex gap-3">
        <div className={`w-[3px] min-h-full bg-brand-primary rounded-md`} />
        <div className="flex flex-col gap-2 w-full">
          {subtitle && (
            <h5
              className={`font-light text-light-navy dark:text-dark-navy tracking-wider uppercase`}
            >
              {subtitle}
            </h5>
          )}
          <h2 className="capitalize">{title}</h2>
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className="md:hidden flex flex-col items-center justify-center gap-3">
      <h2 className="text-center capitalize">{title}</h2>
      <div className={`w-[40px] h-[2px] bg-brand-primary rounded-md`} />
      {subtitle && (
        <h5
          className={`font-light text-brand-navy dark:text-brand-dark text-center tracking-wider uppercase`}
        >
          {subtitle}
        </h5>
      )}
    </div>
  </div>
);

export default SectionHeader;
