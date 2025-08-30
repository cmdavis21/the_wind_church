import CarouselDot from './CarouselDot';

const CarouselDotStory = {
  component: CarouselDot,
  title: 'Carousels/CarouselDot',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default CarouselDotStory;

export const Default = {
  args: {
    onClick: () => alert('Clicked'),
    active: false,
    blueDot: false,
  },
};
