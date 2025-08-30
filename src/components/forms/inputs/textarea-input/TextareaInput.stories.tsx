import TextareaInput from './TextareaInput';

const TextareaInputStory = {
  component: TextareaInput,
  title: 'Forms/TextareaInput',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default TextareaInputStory;

export const Default = {
  args: {
    label: 'This is a textarea Label',
    error: 'This is a textarea error message',
  },
};
