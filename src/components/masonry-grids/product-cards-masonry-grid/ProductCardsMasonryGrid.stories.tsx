import ProductCardsMasonryGrid from './ProductCardsMasonryGrid';

const ProductCardsMasonryGridStory = {
  component: ProductCardsMasonryGrid,
  title: 'MasonryGrids/ProductCardsMasonryGrid',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ProductCardsMasonryGridStory;

export const Default = {
  args: {
    products: [
      {
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
      {
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
      {
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
    ],
  },
};
