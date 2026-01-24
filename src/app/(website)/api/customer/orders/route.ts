import { getAdminCustomerOrders } from '@/data/services/shopify/admin/queries/orders';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();
  const orders = await getAdminCustomerOrders(email);

  if (!orders) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

  return NextResponse.json(orders);
}
