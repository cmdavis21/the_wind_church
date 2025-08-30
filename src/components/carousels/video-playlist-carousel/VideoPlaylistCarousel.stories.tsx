import VideoPlaylistCarousel from './VideoPlaylistCarousel';

const VideoPlaylistCarouselStory = {
  component: VideoPlaylistCarousel,
  title: 'Carousels/VideoPlaylistCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default VideoPlaylistCarouselStory;

export const Default = {
  args: {
    playlist: [
      {
        poster: '/placeholder-media/crosses.png',
        title: 'Test Video',
        date: '09/13/2024',
        link: 'test-string',
      },
      {
        poster: '/placeholder-media/food_bank.jpg',
        title: 'Test Video',
        date: '09/13/2024',
        link: 'test-string',
      },
      {
        poster: '/placeholder-media/contro.webp',
        title: 'Test Video',
        date: '09/13/2024',
        link: 'test-string',
      },
      {
        poster: '/placeholder-media/job_bible.jpg',
        title: 'Test Video',
        date: '09/13/2024',
        link: 'test-string',
      },
      {
        poster: '/placeholder-media/church_prayer.jpg',
        title: 'Test Video',
        date: '09/13/2024',
        link: 'test-string',
      },
    ],
  },
};
