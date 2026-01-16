import CircleCheck from '@/components/icons/circle-check';
import ImageWithTitleDescriptionLinkCard from './ImageWithTitleAndHiddenTextCard';

const ImageWithTitleDescriptionLinkCardStory = {
  component: ImageWithTitleDescriptionLinkCard,
  title: 'Cards/ImageWithTitleDescriptionLinkCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageWithTitleDescriptionLinkCardStory;

export const Default = {
  args: {
    image: {
      src: '/images/misc/logo_placeholder.png',
      alt: 'alt text',
    },
    title: 'Lorem Ipsum Dolor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deserunt ipsam dolorem ab eveniet corporis blanditiis dolor possimus aliquid id earum consequatur magnam ipsa, inventore laborum accusamus quasi voluptates. Doloremque.',
  },
};

export const WithIcon = {
  args: {
    image: {
      src: '/images/misc/logo_placeholder.png',
      alt: 'alt text',
    },
    title: 'Lorem Ipsum Dolor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deserunt ipsam dolorem ab eveniet corporis blanditiis dolor possimus aliquid id earum consequatur magnam ipsa, inventore laborum accusamus quasi voluptates. Doloremque.',
    icon: <CircleCheck />,
  },
};
