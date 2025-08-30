import React, { ReactElement } from 'react';

import SquareExclaimation from '@/components/icons/squareExclaimation';

interface ErrorMessageBannerProps {
  content: string | ReactElement;
  className?: string;
}

const ErrorMessageBanner: React.FC<ErrorMessageBannerProps> = ({
  content,
  className,
}) => (
  <div
    className={`${
      className ?? ''
    } bg-red/20 text-red p-sm rounded-md w-full flex items-center gap-sm`}
  >
    <SquareExclaimation className="fill-red min-w-[20px] min-h-[20px]" />
    {content}
  </div>
);

export default ErrorMessageBanner;
