import CircleCheck from '@/components/icons/circle-check';

import ImageWithTitleAndHiddenTextCard from './ImageWithTitleAndHiddenTextCard';

const ImageWithTitleAndHiddenTextCardStory = {
  component: ImageWithTitleAndHiddenTextCard,
  title: 'Cards/ImageWithTitleAndHiddenTextCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageWithTitleAndHiddenTextCardStory;

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
