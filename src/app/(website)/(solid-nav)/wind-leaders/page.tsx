import { WEBSITE_BASE_URL } from '@/data/constants';
import { Metadata } from 'next';
import WindLeadersClient from './nossr';

export const metadata: Metadata = {
  title: 'WIND Leaders',
  description:
    'Meet the dedicated leaders who serve and guide our church community with wisdom and compassion.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/wind-leaders`,
  },
};

const WindLeaders = () => <WindLeadersClient />;

export default WindLeaders;
