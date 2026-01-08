import { CONTACT_SIGNUP_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, FullContact, PartialContact } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { getContactIdByEmailQuery } from '../queries/contacts';

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
    console.error('### FAILED TO INSERT CONTACT', err.message);
    throw new Error('Contact creation or update failed');
  }
};

export const useCreateContactSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactClient,
    mutationKey: [CONTACT_SIGNUP_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [CONTACT_SIGNUP_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.CONTACT_SIGNUP,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/contacts`,
          },
        }),
      });
    },
  });
};
