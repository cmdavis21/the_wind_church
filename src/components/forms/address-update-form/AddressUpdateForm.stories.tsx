import AddressUpdateForm from './AddressUpdateForm';

const AddressUpdateFormStory = {
  component: AddressUpdateForm,
  title: 'forms/AddressUpdateForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default AddressUpdateFormStory;

export const Default = {
  args: {},
};
