import { Button } from 'flowbite-react';
import React from 'react';

import { PageRoutes } from '@/data/page-routes';

import { permanentMarker } from '@/app/(website)/layout';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import Image from 'next/image';
import Link from 'next/link';
import Home from '../icons/home';
import Redo from '../icons/redo';

interface ErrorPageProps {
  title?: string;
  description?: string;
  reloadPage?: boolean;
  routeToPage?: {
    label: string;
    link: string;
  };
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title, description, routeToPage, reloadPage }) => (
  <div className="m-auto">
    <div className="mx-padding">
      <div className="bg-primary dark:bg-primaryDark grid grid-cols-1 md:grid-cols-2 md:drop-shadow-md rounded-xl">
        {/* IMAGE */}
        <div className="w-full h-full max-w-[1440px] pt-[25px] md:aspect-square flex items-end overflow-hidden">
          <div className="relative w-full aspect-video">
            <Image
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/young-girl.png`}
              className="object-contain scale-125"
              alt="Decorative background image"
              fill
            />
          </div>
        </div>

        {/* MESSAGE + ACTION BUTTONS */}
        <div className="w-full h-full max-w-[1440px] md:aspect-square p-[25px] md:p-[50px]">
          <div className="w-full h-full flex flex-col justify-center gap-lg rounded-lg bg-white dark:bg-grayDark p-[25px] md:p-[50px] shadow-md">
            <h1 className={`${permanentMarker.className} text-primary dark:text-primaryDark`}>
              {title ?? 'Error'}
            </h1>
            <h3>{description ?? 'An error has occured. Please try agin later.'}</h3>
            <div className="flex flex-wrap gap-md">
              <Link href={PageRoutes.home}>
                <Button pill size="xl" color="primary">
                  <div className="flex items-center gap-sm">
                    <Home /> Home
                  </div>
                </Button>
              </Link>
              {reloadPage && (
                <Button
                  pill
                  size="xl"
                  color="secondary"
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
                <Link href={routeToPage.link}>
                  <Button pill size="xl" color="ghost">
                    {routeToPage.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorPage;
