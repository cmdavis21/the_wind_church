import OrderLookupForm from './OrderLookupForm';

const OrderLookupFormStory = {
  component: OrderLookupForm,
  title: 'Forms/OrderLookupForm',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default OrderLookupFormStory;

export const Default = {
  args: {
    inputEmail: (email: string) => alert(email),
  },
};
