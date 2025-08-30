import CenterModeMediaWithTextCarousel from './CenterModeMediaWithTextCarousel';

const CenterModeMediaWithTextCarouselStory = {
  component: CenterModeMediaWithTextCarousel,
  title: 'Carousels/CenterModeMediaWithTextCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default CenterModeMediaWithTextCarouselStory;

export const Default = {
  args: {
    slides: [
      {
        media: {
          src: '/placeholder-media/building.jpg',
          alt: 'decorative background image',
        },
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Suscipit cupiditate necessitatibus perferendis, a sint pariatur saepe voluptatum facilis fugiat corporis nihil commodi mollitia dolor modi quaerat! In perferendis cumque deleniti.',
      },
      {
        media: {
          src: '/placeholder-media/couple_credit_card.jpg',
          alt: 'decorative background image',
        },
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Suscipit cupiditate necessitatibus perferendis, a sint pariatur saepe voluptatum facilis fugiat corporis nihil commodi mollitia dolor modi quaerat! In perferendis cumque deleniti.',
      },
      {
        media: {
          src: '/placeholder-media/crosses.png',
          alt: 'decorative background image',
        },
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Suscipit cupiditate necessitatibus perferendis, a sint pariatur saepe voluptatum facilis fugiat corporis nihil commodi mollitia dolor modi quaerat! In perferendis cumque deleniti.',
      },
    ],
  },
};
