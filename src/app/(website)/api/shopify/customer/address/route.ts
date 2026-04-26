import { updateCustomerAddress } from '@/data/server/shopify/admin/mutations/customer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, address } = await req.json();
  const customer = await updateCustomerAddress({ id, address });

  if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

  return NextResponse.json(customer);
}
