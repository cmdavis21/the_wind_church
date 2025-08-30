import FormSuccessErrorMessage from './FormSuccessErrorMessage';

const FormSuccessErrorMessageStory = {
  component: FormSuccessErrorMessage,
  title: 'Forms/FormSuccessErrorMessage',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default FormSuccessErrorMessageStory;

export const Default = {
  args: {
    error: false,
    message: 'Thank you for joining.',
  },
};

export const WithRefresh = {
  args: {
    error: false,
    message: 'Thank you for joining.',
    refreshForm: () => alert('Clicked!'),
  },
};
