import { youTubeClient } from './config';

import {
  AWS_SERMON_FALLBACK_POSTER,
  AWS_SERMON_FALLBACK_VIDEO,
  YOUTUBE_CHANNEL_ID,
} from '@/data/constants';
import { FallbackSermonSnippet, YouTubeSermonSnippet, YouTubeSnippet } from '@/data/types';
import { cache } from 'react';

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
      maxResults: 8,
    });
    return res.data.items
      ? res.data.items.map((item) => ({
          title: item.snippet?.title ?? '',
          published_at: item.snippet?.publishedAt ?? '',
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
    maxResults: 8,
  });

  return res.data.items
    ? res.data.items.map((item) => ({
        title: item.snippet?.title ?? '',
        published_at: item.snippet?.publishedAt ?? '',
        thumbnail: item.snippet?.thumbnails?.medium?.url ?? '',
        videoUrl: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
      }))
    : [];
};

export const getLatestSermon = cache(
  async (): Promise<{ ok: boolean; data?: YouTubeSermonSnippet | FallbackSermonSnippet }> => {
    try {
      // Get Latest video
      const searchRes = await youTubeClient.search.list(
        {
          channelId: YOUTUBE_CHANNEL_ID,
          part: ['snippet'],
          order: 'date',
          maxResults: 1,
        },
        { next: { revalidate: 3600 } }
      );

      const videoId = searchRes.data.items?.[0]?.id?.videoId;
      if (!videoId) throw new Error('no-video');

      // 2. Duration
      const detailsRes = await youTubeClient.videos.list({
        id: [videoId],
        part: ['contentDetails'],
      });

      const isoDuration = detailsRes.data.items?.[0]?.contentDetails?.duration;
      if (!isoDuration) throw new Error('no-duration');

      const duration = convertISO8601ToSeconds(isoDuration);

      return {
        ok: true,
        data: {
          kind: 'youtube',
          videoId,
          duration,
          title: searchRes.data.items?.[0]?.snippet?.title ?? '',
          link: `https://www.youtube.com/watch?v=${videoId}`,
        },
      };
    } catch (err: any) {
      // Fallback to S3 clip
      if (AWS_SERMON_FALLBACK_VIDEO !== '' && AWS_SERMON_FALLBACK_POSTER !== '') {
        return {
          ok: true,
          data: {
            kind: 'fallback',
            url: AWS_SERMON_FALLBACK_VIDEO,
            poster: AWS_SERMON_FALLBACK_POSTER,
          },
        };
      }

      return {
        ok: false,
        data: undefined,
      };
    }
  }
);

function convertISO8601ToSeconds(iso: string) {
  const match = iso.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(match?.[1] || '0');
  const minutes = parseInt(match?.[2] || '0');
  const seconds = parseInt(match?.[3] || '0');

  return hours * 3600 + minutes * 60 + seconds;
}
