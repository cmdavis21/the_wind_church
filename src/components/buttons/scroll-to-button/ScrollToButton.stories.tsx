import ScrollToButton from './ScrollToButton';

const ScrollToButtonStory = {
  component: ScrollToButton,
  title: 'Buttons/ScrollToButton',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => (
    <div className="relative h-screen">
      <Story />
      <div id="test-div" className="mt-20 bg-red w-full h-[20px]"></div>
    </div>
  ),
};

export default ScrollToButtonStory;

export const Default = {
  args: {
    id: 'test-div',
    label: 'Scroll To',
  },
};
