import TestimonialCarousel from './TestimonialCarousel';

const TestimonialCarouselStory = {
  component: TestimonialCarousel,
  title: 'Carousels/TestimonialCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default TestimonialCarouselStory;

export const Default = {
  args: {
    blueDots: false,
    showDots: true,
    className: '',
    slides: [
      <div className="w-7xl h-7xl bg-light-gray rounded-lg flex items-center justify-center text-[30px] font-bold">
        1
      </div>,
      <div className="w-7xl h-7xl bg-light-gray rounded-lg flex items-center justify-center text-[30px] font-bold">
        2
      </div>,
      <div className="w-7xl h-7xl bg-light-gray rounded-lg flex items-center justify-center text-[30px] font-bold">
        3
      </div>,
      <div className="w-7xl h-7xl bg-light-gray rounded-lg flex items-center justify-center text-[30px] font-bold">
        4
      </div>,
    ],
  },
};
