import { Metadata } from 'next';
import React from 'react';

import { WEBSITE_BASE_URL } from '@/data/constants';
import GalleryClient from './nossr';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our church photo gallery and relive the special moments from recent events and gatherings.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/gallery`,
  },
};

const Gallery = async () => <GalleryClient />;

export default Gallery;
