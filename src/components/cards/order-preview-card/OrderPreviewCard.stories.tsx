import OrderPreviewCard from './OrderPreviewCard';

const OrderPreviewCardStory = {
  component: OrderPreviewCard,
  title: 'Cards/OrderPreviewCard',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default OrderPreviewCardStory;

export const Default = {
  args: {
    image: {
      src: '/images/misc/logo_placeholder.png',
      alt: 'alt text',
    },
    name: 'Cozy Sweater',
    price: '$35.00',
    salesPrice: '$20.00',
    categories: ['Apparel', "Women's Fashion"],
    colorVariants: ['Black', 'White', 'Beige'],
    sizeVariants: ['SM', 'MD', 'LG', 'XL'],
    slug: 'cozy-swetaer',
    outOfStock: false,
  },
};
