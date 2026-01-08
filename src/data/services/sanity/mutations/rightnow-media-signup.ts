import { RIGHTNOW_MEDIA_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, RightnowMediaSignup } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createRightnowMediaSignupClient = async (data: RightnowMediaSignup) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'rightnowMedia',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE RIGHTNOW MEDIA SIGNUP', err.message);
    throw new Error('RightNow Media Signup creation failed');
  }
};

export const useCreateRightnowMediaSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRightnowMediaSignupClient,
    mutationKey: [RIGHTNOW_MEDIA_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [RIGHTNOW_MEDIA_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.RIGHTNOW_MEDIA,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.RIGHTNOW_MEDIA}`,
          },
        }),
      });
    },
  });
};
