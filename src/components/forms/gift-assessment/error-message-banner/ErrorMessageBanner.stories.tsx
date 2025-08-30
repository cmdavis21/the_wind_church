import ErrorMessageBanner from './ErrorMessageBanner';

const ErrorMessageBannerStory = {
  component: ErrorMessageBanner,
  title: 'Forms/GiftAssessment/ErrorMessageBanner',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ErrorMessageBannerStory;

export const Default = {
  args: {
    content: 'Please select an answer for the question.',
  },
};
