import ColorRadio from './ColorRadio';

const ColorRadioStory = {
  component: ColorRadio,
  title: 'Forms/ColorRadio',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ColorRadioStory;

export const Default = {
  args: {
    color: 'productRed',
    active: false,
    onSelect: (select: boolean) => alert(select),
  },
};
