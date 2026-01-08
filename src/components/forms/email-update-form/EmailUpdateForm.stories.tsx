import EmailUpdateForm from './EmailUpdateForm';

const EmailUpdateFormStory = {
  component: EmailUpdateForm,
  title: 'forms/EmailUpdateForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default EmailUpdateFormStory;

export const Default = {
  args: {},
};
