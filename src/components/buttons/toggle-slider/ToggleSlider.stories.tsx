import ToggleSlider from './ToggleSlider';

const ToggleSliderStory = {
  component: ToggleSlider,
  title: 'Buttons/ToggleSlider',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ToggleSliderStory;

export const Default = {
  args: {
    options: [
      {
        label: 'Label One',
        onSelect: () => alert('Clicked!'),
      },
      {
        label: 'Label Two',
        onSelect: () => alert('Clicked!'),
      },
    ],
  },
};
