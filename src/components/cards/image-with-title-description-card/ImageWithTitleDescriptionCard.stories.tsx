import ImageWithTitleDescriptionCard from './ImageWithTitleDescriptionCard';

const ImageWithTitleDescriptionCardStory = {
  component: ImageWithTitleDescriptionCard,
  title: 'Cards/ImageWithTitleDescriptionCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ImageWithTitleDescriptionCardStory;

export const Default = {
  args: {
    src: '/images/misc/logo_placeholder.png',
    alt: 'alt text',
    title: 'Lorem Ipsum Dolor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deserunt ipsam dolorem ab eveniet corporis blanditiis dolor possimus aliquid id earum consequatur magnam ipsa, inventore laborum accusamus quasi voluptates. Doloremque.',
  },
};

export const WithLink = {
  args: {
    src: '/images/misc/logo_placeholder.png',
    alt: 'alt text',
    title: 'Lorem Ipsum Dolor',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deserunt ipsam dolorem ab eveniet corporis blanditiis dolor possimus aliquid id earum consequatur magnam ipsa, inventore laborum accusamus quasi voluptates. Doloremque.',
    link: {
      label: 'Link to place',
      href: '#',
    },
  },
};
