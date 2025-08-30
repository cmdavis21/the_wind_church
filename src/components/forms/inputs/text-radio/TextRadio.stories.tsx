import TextRadio from './TextRadio';

const TextRadioStory = {
  component: TextRadio,
  title: 'Forms/TextRadio',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default TextRadioStory;

export const Default = {
  args: {
    text: 'SM',
    active: false,
    onSelect: (select: boolean) => alert(select),
  },
};
