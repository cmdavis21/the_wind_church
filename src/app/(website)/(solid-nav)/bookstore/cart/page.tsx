import { Metadata } from 'next';
import React from 'react';
import { WEBSITE_BASE_URL } from '@/data/constants';
import CartPage from './nossr';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'View your cart and checkout items from The Wind Church bookstore.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/bookstore/cart`,
  },
};

const Cart = () => <CartPage />;

export default Cart;
