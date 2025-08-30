import { PrayerRequest } from '@/data/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
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
    mutationKey: ['SANITY MUTATION CREATE PRAYER REQUEST'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE PRAYER REQUEST'],
      });
    },
  });
};
