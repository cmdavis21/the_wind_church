import AlertMessage from './AlertMessage';

const AlertMessageStory = {
  component: AlertMessage,
  title: 'Alerts/AlertMessage',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default AlertMessageStory;

export const Default = {
  args: {},
};
