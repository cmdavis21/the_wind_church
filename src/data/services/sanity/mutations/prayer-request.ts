import { PRAYER_REQUEST_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, PrayerRequest } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createPrayerRequestClient = async (data: PrayerRequest) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'prayerRequest',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE PRAYER REQUEST', err.message);
    throw new Error('Prayer Request creation failed');
  }
};

export const useCreatePrayerRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPrayerRequestClient,
    mutationKey: [PRAYER_REQUEST_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [PRAYER_REQUEST_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.PRAYER_REQUEST,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.PRAYER_REQUEST}`,
          },
        }),
      });
    },
  });
};
