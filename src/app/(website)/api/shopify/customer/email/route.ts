import { updateCustomerEmail } from '@/data/server/shopify/admin/mutations/customer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, email } = await req.json();
  const customer = await updateCustomerEmail({ id, email });

  if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

  return NextResponse.json(customer);
}
