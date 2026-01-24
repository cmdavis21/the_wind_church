import { Button } from 'flowbite-react';
import React from 'react';

import { PageRoutes } from '@/data/page-routes';

import Link from 'next/link';

interface ErrorAlertProps {
  header?: string;
  title?: string;
  subtitle?: string;
  homeBtnLabel?: string;
  reloadPage?: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  header,
  title,
  subtitle,
  homeBtnLabel,
  reloadPage = true,
}) => (
  <div className="flex flex-col gap-md justify-center items-center p-padding max-width-center">
    <h1 className="font-display text-brand-primary">{header ?? 'Error'}</h1>
    <h2>{title ?? 'We encountered a problem!'}</h2>
    <h3>{subtitle ?? 'Please check back later.'}</h3>
    <div className="flex flex-col md:flex-row gap-lg pt-lg">
      <Link href={PageRoutes.home}>
        <Button pill size="lg" color="primary">
          {homeBtnLabel ?? 'Go to Home'}
        </Button>
      </Link>
      {reloadPage && (
        <Button pill size="lg" color="secondary" onClick={() => window.location.reload()}>
          Try refreshing
        </Button>
      )}
    </div>
  </div>
);

export default ErrorAlert;
