import VideoCard from './VideoCard';

const VideoCardStory = {
  component: VideoCard,
  title: 'Cards/VideoCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default VideoCardStory;

export const Default = {
  args: {
    poster: '/placeholder-media/crosses.png',
    title: 'Lorem Ipsum Dolor',
    date: 'Aug 25, 2024',
    link: '#',
  },
};
