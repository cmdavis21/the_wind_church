import ImageCardWithModal from './ImageCardWithModal';

const ImageCardWithModalStory = {
  component: ImageCardWithModal,
  title: 'Cards/ImageCardWithModal',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageCardWithModalStory;

export const Default = {
  args: {
    src: '/placeholder-media/family.jpeg',
    alt: 'alt text',
  },
};
