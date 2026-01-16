import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-sm text-center">
    <div className={`font-display text-xl md:text-[75px] 2xl:text-4xl leading-snug`}>{title}</div>
    <h3>{subtitle}</h3>
  </div>
);

export default PageHeader;
