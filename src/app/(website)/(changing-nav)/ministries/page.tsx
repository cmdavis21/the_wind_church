import { Metadata } from 'next';

import { WEBSITE_BASE_URL } from '@/data/constants';
import MinistriesClient from './nossr';

export const metadata: Metadata = {
  title: 'Ministries',
  description:
    'Explore ministries at The Wind Church for every age and stage—join us in growing together in Christ.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/ministries`,
  },
};

const Ministries = () => <MinistriesClient />;

export default Ministries;
