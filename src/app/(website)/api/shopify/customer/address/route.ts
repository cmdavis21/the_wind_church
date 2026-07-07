import { updateCustomerAddress } from '@/data/server/shopify/admin/mutations/customer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { customer_id, address_id, address } = await req.json();
  const customer = await updateCustomerAddress({ customer_id, address_id, address });

  if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

  return NextResponse.json(customer);
}
