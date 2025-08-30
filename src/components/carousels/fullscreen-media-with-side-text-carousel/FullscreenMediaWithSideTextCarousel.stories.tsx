import FullscreenMediaWithSideTextCarousel from './FullscreenMediaWithSideTextCarousel';

const FullscreenMediaWithSideTextCarouselStory = {
  component: FullscreenMediaWithSideTextCarousel,
  title: 'Carousels/FullscreenMediaWithSideTextCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default FullscreenMediaWithSideTextCarouselStory;

export const Default = {
  args: {
    slides: [
      {
        media: {
          src: '/images/wind_church_building.webp',
          alt: 'decorative background image',
          poster: '',
        },
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor',
      },
      {
        media: {
          src: '/placeholder-media/crosses.png',
          alt: 'decorative background image',
          poster: '',
        },
        title: 'Lorem ipsum dolor sit amet consectetur',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae blanditiis autem cumque perspiciatis impedit quis aspernatur saepe sapiente suscipit nulla aliquam beatae quo officia a necessitatibus sunt voluptas, quibusdam unde?',
      },
      {
        media: {
          src: '/placeholder-media/mailbox.jpg',
          alt: 'decorative background image',
          poster: '',
        },
        title: 'Lorem ipsum dolor sit amet consectetur',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae blanditiis autem cumque perspiciatis impedit quis aspernatur saepe sapiente suscipit nulla aliquam beatae quo officia a necessitatibus sunt voluptas, quibusdam unde?',
      },
    ],
  },
};
