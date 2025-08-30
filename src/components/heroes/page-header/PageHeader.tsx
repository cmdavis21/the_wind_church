import React from "react";

import { permanentMarker } from "@/app/[locale]/layout";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-sm text-center dark:text-softWhite">
    <div
      className={`${permanentMarker.className} text-[36px] md:text-[75px] 2xl:text-[100px] leading-snug`}
    >
      {title}
    </div>
    <h3>{subtitle}</h3>
  </div>
);

export default PageHeader;
