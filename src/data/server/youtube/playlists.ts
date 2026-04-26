import {
  FallbackSermonSnippet,
  YouTubePlaylist,
  YouTubeSermonSnippet,
  YouTubeVideo,
} from '@/data/types';
import { cache } from 'react';

import {
  AWS_SERMON_FALLBACK_POSTER,
  AWS_SERMON_FALLBACK_VIDEO,
  YOUTUBE_CHANNEL_ID,
} from '../env.server';
import { youTubeClient } from './client';

const getChannelPlaylists = async (): Promise<YouTubePlaylist[]> => {
  const res = await youTubeClient.playlists.list({
    part: ['snippet', 'contentDetails'],
    channelId: YOUTUBE_CHANNEL_ID,
    maxResults: 5,
  });

  if (!res.data.items) return [];

  return res.data.items.map((pl) => ({
    id: pl.id!,
    title: pl.snippet?.title ?? '',
    videos: [],
  }));
};

const getPlaylistVideos = async (playlistId: string): Promise<YouTubeVideo[]> => {
  const res = await youTubeClient.playlistItems.list({
    part: ['snippet', 'status'],
    playlistId,
    maxResults: 8,
  });

  if (!res.data.items) return [];

  return res.data.items
    .filter((item) => item.status?.privacyStatus === 'public')
    .map((item) => ({
      title: item.snippet?.title ?? '',
      published_at: item.snippet?.publishedAt ?? '',
      thumbnail: item.snippet?.thumbnails?.medium?.url ?? '',
      videoUrl: `https://www.youtube.com/watch?v=${item.snippet?.resourceId?.videoId}`,
    }));
};

export const getPlaylists = async (): Promise<YouTubePlaylist[]> => {
  const playlists = await getChannelPlaylists();

  const results = await Promise.all(
    playlists.map(async (pl) => {
      const videos = await getPlaylistVideos(pl.id);
      return { ...pl, videos };
    })
  );

  return results;
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
