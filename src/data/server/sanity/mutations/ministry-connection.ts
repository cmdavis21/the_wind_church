import { MinistryConnection } from '@/data/types';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createMinistryConnectionClient = async (data: MinistryConnection) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'ministryConnection',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE MINISTRY CONNECTION', err.message);
    throw new Error('Ministry Connection creation failed');
  }
};
