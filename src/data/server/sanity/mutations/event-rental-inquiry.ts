import { EventRentalInquiry } from '@/data/types';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createEventRentalInquiryClient = async (data: EventRentalInquiry) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'eventRental',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE EVENT RENTAL INQUIRY', err.message);
    throw new Error('Event rental inquiry creation failed');
  }
};
