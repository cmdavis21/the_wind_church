import { render, screen } from '@testing-library/react';

import { PageRoutes } from '@/data/page-routes';

import '@testing-library/jest-dom';
import OrderPreviewCard from './OrderPreviewCard';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: any) => <a {...props} />,
}));

describe('OrderPreviewCard', () => {
  const mockProduct = {
    image: { src: '/test-image.jpg', alt: 'Test Product Image' },
    name: 'Test Product',
    price: '50.00',
    salesPrice: '40.00',
    categories: ['Category 1', 'Category 2'],
    colorVariants: ['Red', 'Blue', 'Green'],
    sizeVariants: ['S', 'M', 'L'],
    slug: 'test-product',
    outOfStock: false,
  };

  it('renders product name correctly', () => {
    render(<OrderPreviewCard {...mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('displays price and sales price correctly', () => {
    render(<OrderPreviewCard {...mockProduct} />);

    expect(screen.getByText(mockProduct.price)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.salesPrice)).toBeInTheDocument();
  });

  it('shows categories if provided', () => {
    render(<OrderPreviewCard {...mockProduct} />);

    expect(screen.getByText(/Category 1 \/ Category 2/)).toBeInTheDocument();
  });

  it("shows 'Out of Stock' badge when applicable", () => {
    render(<OrderPreviewCard {...mockProduct} outOfStock={true} />);

    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
  });

  it('renders color and size variants if provided', () => {
    render(<OrderPreviewCard {...mockProduct} />);

    expect(screen.getByText('+1')).toBeInTheDocument(); // More than 3 color variants
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
  });

  it('ensures the product link navigates to the correct URL', () => {
    render(<OrderPreviewCard {...mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `${PageRoutes.bookstore}/test-product`);
  });
});
