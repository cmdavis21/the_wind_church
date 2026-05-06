import { SanityClient } from '@/data/server/sanity/client';
import { createContactClient } from '@/data/server/sanity/mutations/contact-signup';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    const result = await SanityClient.create({
      _type: 'eventRental',
      contact: { _type: 'reference', _ref: contactId },
      ...formData,
    });

    return NextResponse.json(result);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
