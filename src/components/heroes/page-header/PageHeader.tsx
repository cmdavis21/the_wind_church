import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-sm text-center">
    <h2 className={`font-display text-[42px] md:text-[75px] 2xl:text-[85px] leading-snug`}>
      {title}
    </h2>
    <h3>{subtitle}</h3>
  </div>
);

export default PageHeader;
