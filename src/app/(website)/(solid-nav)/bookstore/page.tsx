import { Metadata } from 'next';
import React from 'react';

import { WEBSITE_BASE_URL } from '@/data/constants';
import BookstoreClient from './nossr';

export const metadata: Metadata = {
  title: 'Bookstore',
  description:
    'Shop faith-based books, apparel, and gifts in The Wind Church bookstore—equipping you for your spiritual journey.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/bookstore`,
  },
};

const Bookstore = () => <BookstoreClient />;

export default Bookstore;
