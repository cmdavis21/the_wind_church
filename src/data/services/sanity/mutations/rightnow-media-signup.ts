import { RightnowMediaSignup } from '@/data/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
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
    mutationKey: ['SANITY MUTATION CREATE RIGHTNOW MEDIA SIGNUP'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE RIGHTNOW MEDIA SIGNUP'],
      });
    },
  });
};
