import FullscreenMediaWithTextFadeInOutCarousel from './FullscreenMediaWithTextFadeInOutCarousel';

const FullscreenMediaWithTextFadeInOutCarouselStory = {
  component: FullscreenMediaWithTextFadeInOutCarousel,
  title: 'Carousels/FullscreenMediaWithTextFadeInOutCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default FullscreenMediaWithTextFadeInOutCarouselStory;

export const Default = {
  args: {
    slides: [
      {
        media: {
          src: '/placeholder-media/footer_video.mp4',
          poster: '/placeholder-media/food_bank.jpg',
          alt: '',
        },
        header: 'Deep Dive Studies',
        title: 'Young Professionals Deep Dive',
        subtitle: 'Evenlyn Harper',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolore vero provident. Ab fugiat quis quisquam vero corporis quaerat repellendus dolore est veritatis corrupti ipsa non expedita nostrum, aspernatur explicabo!',
        link: '#',
      },
      {
        media: {
          src: '/placeholder-media/group_women.jpg',
          poster: '',
          alt: 'alt text',
        },
        header: 'Deep Dive Studies',
        title: "Reflections: Women's Discipleship",
        subtitle: 'Sophia Rodriguez',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolore vero provident. Ab fugiat quis quisquam vero corporis quaerat repellendus dolore est veritatis corrupti ipsa non expedita nostrum, aspernatur explicabo!',
        link: '#',
      },
    ],
  },
};
