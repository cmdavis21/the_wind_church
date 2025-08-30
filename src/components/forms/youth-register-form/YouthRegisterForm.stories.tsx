import YouthRegisterForm from './YouthRegisterForm';

const YouthRegisterFormStory = {
  component: YouthRegisterForm,
  title: 'Forms/YouthRegisterForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default YouthRegisterFormStory;

export const Default = {
  args: {},
};
