import { YouTubePlaylist, YouTubeVideo } from '@/data/types';
import { cache } from 'react';

import { PreviewSermonProps } from '@/components/preview-sermon/PreviewSermon';
import {
  AWS_SERMON_FALLBACK_POSTER,
  AWS_SERMON_FALLBACK_VIDEO,
  YOUTUBE_CHANNEL_ID,
  YOUTUBE_UPLOADS_PLAYLIST_ID,
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

const getFallbackSermonResults = () => {
  if (AWS_SERMON_FALLBACK_VIDEO === '' || AWS_SERMON_FALLBACK_POSTER === '') {
    return { data: undefined };
  }

  return {
    kind: 'fallback',
    url: AWS_SERMON_FALLBACK_VIDEO,
    poster: AWS_SERMON_FALLBACK_POSTER,
  };
};

export const getLatestSermon = cache(async (): Promise<PreviewSermonProps> => {
  try {
    if (YOUTUBE_UPLOADS_PLAYLIST_ID === '') return getFallbackSermonResults();

    const playlistRes = await youTubeClient.playlistItems.list(
      {
        playlistId: YOUTUBE_UPLOADS_PLAYLIST_ID,
        part: ['snippet'],
        maxResults: 1,
      },
      {
        next: { revalidate: 43200 },
      }
    );

    const videoId = playlistRes.data.items?.[0]?.snippet?.resourceId?.videoId;

    if (!videoId) {
      console.error('YOUTUBE FETCH LATEST SERMON - No Video ID');
      return getFallbackSermonResults();
    }

    const detailsRes = await youTubeClient.videos.list({
      id: [videoId],
      part: ['contentDetails'],
    });

    const duration = detailsRes.data.items?.[0]?.contentDetails?.duration;

    return {
      data: {
        kind: 'youtube',
        videoId,
        duration: convertISO8601ToSeconds(duration ?? ''),
        title: playlistRes.data.items?.[0]?.snippet?.title ?? '',
        link: `https://www.youtube.com/watch?v=${videoId}`,
      },
    };
  } catch (error) {
    console.error('YOUTUBE FETCH LATEST SERMON', error);
    return getFallbackSermonResults();
  }
});

function convertISO8601ToSeconds(iso: string) {
  const match = iso.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(match?.[1] || '0');
  const minutes = parseInt(match?.[2] || '0');
  const seconds = parseInt(match?.[3] || '0');

  return hours * 3600 + minutes * 60 + seconds;
}
