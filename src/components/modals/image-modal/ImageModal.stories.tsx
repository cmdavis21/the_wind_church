import ImageModal from './ImageModal';

const ImageModalStory = {
  component: ImageModal,
  title: 'Modals/ImageModal',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageModalStory;

export const Default = {
  args: {
    src: '/images/misc/logo_placeholder.png',
    alt: 'test modal',
    open: true,
    setOpen: (e: any) => alert(e),
  },
};
