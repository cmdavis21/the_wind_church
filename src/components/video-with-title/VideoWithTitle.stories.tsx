import VideoWithTitle from './VideoWithTitle';

const VideoWithTitleStory = {
  component: VideoWithTitle,
  title: 'VideoWithTitle',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default VideoWithTitleStory;

export const Default = {
  args: {
    src: '/placeholder-media/footer_video.mp4',
    poster: '/images/misc/logo_placeholder.png',
    title: 'Sample Video Title',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit recusandae ad voluptas',
  },
};
