import { PageRoutes } from '@/data/page-routes';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import Link from 'next/link';

interface ErrorAlertProps {
  header?: string;
  title?: string;
  subtitle?: string;
  homeBtnLabel?: string;
  reloadPage?: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = async ({
  header,
  title,
  subtitle,
  homeBtnLabel,
  reloadPage = true,
}) => {
  const t = await getTranslations('ErrorAlert');

  return (
    <div className="flex flex-col gap-md justify-center items-center p-padding max-width-center">
      <h1 className="font-display text-brand-primary">{header ?? t('header')}</h1>
      <h2>{title ?? t('title')}</h2>
      <h3>{subtitle ?? t('subtitle')}</h3>
      <div className="flex flex-col md:flex-row gap-lg pt-lg">
        <Link href={PageRoutes.home}>
          <Button pill size="lg" color="primary">
            {homeBtnLabel ?? t('home')}
          </Button>
        </Link>
        {reloadPage && (
          <Button pill size="lg" color="secondary" onClick={() => window.location.reload()}>
            {t('refresh')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorAlert;
