import { MINISTRY_CONNECT_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, MinistryConnection } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

export const useCreateMinistryConnection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMinistryConnectionClient,
    mutationKey: [MINISTRY_CONNECT_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [MINISTRY_CONNECT_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.MINISTRY_CONNECTION,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.MINISTRY_CONNECTION}`,
          },
        }),
      });
    },
  });
};
