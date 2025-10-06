import CarouselArrows from './CarouselArrows';

const CarouselArrowsStory = {
  component: CarouselArrows,
  title: 'Carousels/CarouselArrows',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default CarouselArrowsStory;

export const Default = {
  args: {
    className: '',
    leftArrowProps: {
      onClick: () => alert('Left Arrow Clicked!'),
    },
    rightArrowProps: {
      onClick: () => alert('Right Arrow Clicked!'),
    },
  },
};
export const ButtonIconClasses = {
  args: {
    className: '',
    leftArrowProps: {
      onClick: () => alert('Left Arrow Clicked!'),
      buttonClassName: 'bg-gray/40 p-xs',
      iconClassName: 'fill-black/70 size-[18px]',
    },
    rightArrowProps: {
      onClick: () => alert('Right Arrow Clicked!'),
      buttonClassName: 'bg-gray/40 p-xs',
      iconClassName: 'fill-black/70 size-[18px]',
    },
  },
};
