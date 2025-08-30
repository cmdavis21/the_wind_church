import { Button } from 'flowbite-react';
import React from 'react';

import { PageRoutes } from '@/data/page-routes';

import Home from '../icons/home';
import Redo from '../icons/redo';

interface ErrorMessageProps {
  message?: string;
  routeToPage?: {
    label: string;
    link: string;
  };
  reloadPage?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  routeToPage,
  reloadPage,
}) => (
  <div className="p-padding flex justify-center items-center">
    <div className="flex flex-col justify-center items-center text-center gap-[52px]">
      <h3>{message ?? 'An error has occured. Please try agin later.'}</h3>
      <div className="flex flex-wrap gap-sm w-full justify-center">
        <Button
          pill
          size="lg"
          color="info"
          className="h-full"
          href={PageRoutes.home}
        >
          <div className="flex items-center gap-sm">
            <Home /> Home
          </div>
        </Button>
        {reloadPage && (
          <Button
            pill
            size="lg"
            color="info"
            className="h-full"
            onClick={() => {
              if (window) window.location.reload();
            }}
          >
            <div className="flex items-center gap-sm">
              <Redo /> Refresh page
            </div>
          </Button>
        )}
        {routeToPage && (
          <Button
            pill
            size="lg"
            color="yellow"
            className="h-full"
            href={routeToPage.link}
          >
            {routeToPage.label}
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default ErrorMessage;
