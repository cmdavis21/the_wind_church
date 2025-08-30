import { render, screen } from '@testing-library/react';

import { AttributeType, ProductPreview } from '@/data/types';

import ProductCardsMasonryGrid from './ProductCardsMasonryGrid';
import '@testing-library/jest-dom';

// Mock the ProductCard component to check if it's rendered
jest.mock('../../cards/product-card/ProductCard', () =>
  jest.fn(() => <div data-testid="product-card" />)
);

describe('ProductCardsMasonryGrid', () => {
  const mockProducts: ProductPreview[] = [
    {
      image: { src: '/test-image1.jpg', alt: 'Test Image 1' },
      name: 'Test Product 1',
      price: '100.00',
      slug: 'test-product-1',
      attributes: [
        {
          type: AttributeType.COLOR,
          options: ['Red', 'Blue'],
          name: 'Color',
        },
        {
          type: AttributeType.SIZE,
          options: ['S', 'M'],
          name: 'Size',
        },
      ],
      id: 1,
      salesPrice: '',
      categories: ['Books and Guides'],
    },
    {
      image: { src: '/test-image2.jpg', alt: 'Test Image 2' },
      name: 'Test Product 2',
      price: '200.00',
      slug: 'test-product-2',
      attributes: [
        { type: AttributeType.COLOR, options: ['Green'], name: 'Color' },
        { type: AttributeType.SIZE, options: ['L'], name: 'Size' },
      ],
      id: 2,
      salesPrice: '',
      categories: ['Apparel'],
    },
  ];

  it('renders correctly with products', () => {
    render(<ProductCardsMasonryGrid products={mockProducts} />);

    // Ensure ProductCard components are rendered for each product
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(mockProducts.length);
  });

  it('renders with default grid configuration', () => {
    render(<ProductCardsMasonryGrid products={mockProducts} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(
      mockProducts.length
    );
  });

  it('renders empty state when no products are provided', () => {
    render(<ProductCardsMasonryGrid products={[]} />);

    // Since there are no products, no ProductCard should be rendered
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });
});
