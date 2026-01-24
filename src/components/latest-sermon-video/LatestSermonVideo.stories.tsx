import LatestSermonVideo from './LatestSermonVideo';

const LatestSermonVideoStory = {
  component: LatestSermonVideo,
  title: 'Video/LatestSermonVideo',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default LatestSermonVideoStory;

export const Default = {
  args: {
    title: "Don't Stop the Roll",
    src: '/placeholder-media/footer_video.mp4',
    poster: '/images/misc/logo_placeholder.png',
    link: '#',
  },
};
