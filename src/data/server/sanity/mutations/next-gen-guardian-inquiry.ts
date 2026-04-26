import { NextGenGuardianInquiry } from '@/data/types';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createNextGenGuardianInquiryClient = async (data: NextGenGuardianInquiry) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'nextGenGuardianInquiry',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE NEXT GEN GUARDIAN INQUIRY', err.message);
    throw new Error('Next Gen Guardian Inquiry creation failed');
  }
};
