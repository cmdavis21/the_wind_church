import FullscreenLatestSermon from './FullscreenLatestSermon';

const FullscreenLatestSermonStory = {
  component: FullscreenLatestSermon,
  title: 'Video/FullscreenLatestSermon',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default FullscreenLatestSermonStory;

export const Default = {
  args: {
    title: "Don't Stop the Roll",
    src: '/placeholder-media/footer_video.mp4',
    poster: '/images/misc/logo_placeholder.png',
    link: '#',
  },
};
