import { youTubeClient } from './config';

import { YOUTUBE_CHANNEL_ID } from '@/data/constants';
import { YouTubeSnippet } from '@/data/types';

export const getUploadPlaylistId = async () => {
  const res = await youTubeClient.channels.list({
    part: ['contentDetails'],
    id: [YOUTUBE_CHANNEL_ID],
  });

  return res.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
};

export const getPlaylistVideos = async (): Promise<YouTubeSnippet[]> => {
  const playlistId = await getUploadPlaylistId();

  if (playlistId) {
    const res = await youTubeClient.playlistItems.list({
      part: ['snippet'],
      playlistId,
      maxResults: 7,
    });
    return res.data.items
      ? res.data.items.map((item) => ({
          title: item.snippet?.title ?? '',
          publishedAt: item.snippet?.publishedAt ?? '',
          thumbnail: item.snippet?.thumbnails?.medium?.url ?? '',
          videoUrl: `https://www.youtube.com/watch?v=${item.snippet?.resourceId?.videoId}`,
        }))
      : [];
  } else return [];
};

export const getPastLiveStreams = async (): Promise<YouTubeSnippet[]> => {
  const res = await youTubeClient.search.list({
    part: ['snippet'],
    channelId: YOUTUBE_CHANNEL_ID,
    eventType: 'completed',
    type: ['video'],
    maxResults: 7,
  });

  return res.data.items
    ? res.data.items.map((item) => ({
        title: item.snippet?.title ?? '',
        publishedAt: item.snippet?.publishedAt ?? '',
        thumbnail: item.snippet?.thumbnails?.medium?.url ?? '',
        videoUrl: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
      }))
    : [];
};
