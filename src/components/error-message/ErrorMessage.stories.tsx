import ErrorMessage from './ErrorMessage';

const ErrorMessageStory = {
  component: ErrorMessage,
  title: 'ErrorMessage',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ErrorMessageStory;

export const Default = {
  args: {},
};
