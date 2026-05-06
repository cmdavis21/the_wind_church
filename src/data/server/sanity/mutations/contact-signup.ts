import { FullContact, PartialContact } from '@/data/types';
import { SanityClient } from '../client';
import { getContactIdByEmailQuery } from '../queries/contacts';

export const createContactClient = async (data: FullContact | PartialContact): Promise<string> => {
  try {
    const existingContact = await getContactIdByEmailQuery(data.email);

    if (existingContact) {
      const patchedContact = await SanityClient.patch(existingContact._id).set(data).commit();
      return patchedContact._id;
    } else {
      const newContact = await SanityClient.create({ _type: 'contact', ...data });
      return newContact._id;
    }
  } catch (err: any) {
    console.error('### FAILED TO INSERT CONTACT', err.message);
    throw new Error('Contact creation or update failed');
  }
};
