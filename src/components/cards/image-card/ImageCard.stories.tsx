import ImageCard from './ImageCard';

const ImageCardStory = {
  component: ImageCard,
  title: 'Cards/ImageCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageCardStory;

export const Default = {
  args: {
    src: '/placeholder-media/family.jpeg',
    alt: 'alt text',
  },
};
