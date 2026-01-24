import { getAdminCustomer } from '@/data/services/shopify/admin/queries/customer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();
  const customer = await getAdminCustomer(email);

  if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

  return NextResponse.json(customer);
}
