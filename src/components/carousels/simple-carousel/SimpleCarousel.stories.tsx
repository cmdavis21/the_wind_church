import SimpleCarousel from './SimpleCarousel';

const SimpleCarouselStory = {
  component: SimpleCarousel,
  title: 'Carousels/SimpleCarousel',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default SimpleCarouselStory;

export const Default = {
  args: {
    blueDots: false,
    showDots: true,
    className: '',
    slides: [
      <div className="w-[200px] h-[200px] bg-lightGray rounded-lg flex items-center justify-center text-[30px] font-bold">
        1
      </div>,
      <div className="w-[200px] h-[200px] bg-lightGray rounded-lg flex items-center justify-center text-[30px] font-bold">
        2
      </div>,
      <div className="w-[200px] h-[200px] bg-lightGray rounded-lg flex items-center justify-center text-[30px] font-bold">
        3
      </div>,
      <div className="w-[200px] h-[200px] bg-lightGray rounded-lg flex items-center justify-center text-[30px] font-bold">
        4
      </div>,
    ],
  },
};
