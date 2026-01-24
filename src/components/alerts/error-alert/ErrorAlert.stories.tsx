import ErrorAlert from './ErrorAlert';

const ErrorAlertStory = {
  component: ErrorAlert,
  title: 'Alerts/ErrorAlert',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ErrorAlertStory;

export const Default = {
  args: {},
};
