import { WEBSITE_BASE_URL } from '@/data/constants';
import { Metadata } from 'next';
import OrdersClient from './nossr';

export const metadata: Metadata = {
  title: 'Orders',
  description: 'View your orders from The Wind Church bookstore.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/bookstore/orders`,
  },
};

const OrdersPage = () => <OrdersClient />;

export default OrdersPage;
