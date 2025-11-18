import { Metadata } from 'next';

import { WEBSITE_BASE_URL } from '@/data/constants';
import DeepDivesClient from './nossr';

export const metadata: Metadata = {
  title: 'Deep Dive',
  description:
    'Join our Deep Dive sessions for in-depth teaching, biblical study, and spiritual growth.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/deep-dive`,
  },
};

const DeepDive = async () => <DeepDivesClient />;

export default DeepDive;
