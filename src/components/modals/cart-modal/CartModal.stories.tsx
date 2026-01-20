import CartModal from './CartModal';

const CartModalStory = {
  component: CartModal,
  title: 'modals/CartModal',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default CartModalStory;

export const Default = {
  args: {},
};
