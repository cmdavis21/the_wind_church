import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-xs md:gap-md text-center">
    <h2 className="font-display text-3xl sm:text-5xl md:text-7xl leading-snug">{title}</h2>
    <h3>{subtitle}</h3>
  </div>
);

export default PageHeader;
