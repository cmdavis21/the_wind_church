import TextInput from './TextInput';

const TextInputStory = {
  component: TextInput,
  title: 'Forms/TextInput',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default TextInputStory;

export const Default = {
  args: {
    label: 'This is an input Label',
    error: 'This is an input error message',
  },
};
