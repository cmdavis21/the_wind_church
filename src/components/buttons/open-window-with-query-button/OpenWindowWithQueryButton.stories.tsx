import OpenWindowWithQueryButton from './OpenWindowWithQueryButton';

const OpenWindowWithQueryButtonStory = {
  component: OpenWindowWithQueryButton,
  title: 'Buttons/OpenWindowWithQueryButton',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default OpenWindowWithQueryButtonStory;

export const Default = {
  args: {
    label: 'Have you been to Riverside?',
    query: 'Riverside, CA',
  },
};
