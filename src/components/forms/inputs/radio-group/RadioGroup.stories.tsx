import RadioGroup from './RadioGroup';

const RadioGroupStory = {
  component: RadioGroup,
  title: 'Forms/RadioGroup',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default RadioGroupStory;

export const Default = {
  args: {
    label: 'This is a select input Label',
    error: 'This is a select input error message',
    options: [
      {
        label: 'Option 1',
        value: 'Option 1',
      },
      {
        label: 'Option 2',
        value: 'Option 2',
      },
      {
        label: 'Option 3',
        value: 'Option 3',
      },
    ],
  },
};
