import { FullContact, PartialContact } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getContactIdByEmailQuery } from '../queries/contacts';
import { SanityClient } from '../client';
import { CONTACT_SIGNUP_KEY } from '@/data/constants';

export const createContactClient = async (data: FullContact | PartialContact): Promise<string> => {
  try {
    const existingContact = await getContactIdByEmailQuery(data.email);

    if (existingContact) {
      const patchedContact = await SanityClient.patch(existingContact._id).set(data).commit();
      return patchedContact._id;
    } else {
      const newContact = await SanityClient.create({
        _type: 'contact',
        ...data,
      });
      return newContact._id;
    }
  } catch (err: any) {
    console.error('### FAILED TO UPSERT CONTACT', err.message);
    throw new Error('Contact creation or update failed');
  }
};

export const useCreateContactSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactClient,
    mutationKey: [CONTACT_SIGNUP_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CONTACT_SIGNUP_KEY],
      });
    },
  });
};
