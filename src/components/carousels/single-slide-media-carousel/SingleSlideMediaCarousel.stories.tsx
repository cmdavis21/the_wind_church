import SingleSlideMediaCarousel from './SingleSlideMediaCarousel';

const SingleSlideMediaCarouselStory = {
  component: SingleSlideMediaCarousel,
  title: 'Carousels/SingleSlideMediaCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default SingleSlideMediaCarouselStory;

export const Default = {
  args: {
    media: [
      {
        src: '/placeholder-media/footer_video.mp4',
        alt: 'test alt',
        poster: '/images/misc/logo_placeholder.png',
      },
      {
        src: '/images/misc/logo_placeholder.png',
        alt: 'test alt',
        poster: '/images/misc/logo_placeholder.png',
      },
    ],
  },
};
