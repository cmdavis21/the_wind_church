import { youtube } from '@googleapis/youtube';
import { YOUTUBE_API_KEY } from '../env.server';

export const youTubeClient = youtube({
  version: 'v3',
  auth: YOUTUBE_API_KEY,
});
