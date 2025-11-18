import ErrorPage from './ErrorPage';

const ErrorPageStory = {
  component: ErrorPage,
  title: 'ErrorPage',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ErrorPageStory;

export const Default = {
  args: {},
};
