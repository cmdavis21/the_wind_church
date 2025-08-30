import { EventRentalInquiry } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContactClient } from './contact-signup';
import { SanityClient } from '../client';

export const createEventRentalInquiryClient = async (data: EventRentalInquiry) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'eventRental',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE EVENT RENTAL INQUIRY', err.message);
    throw new Error('Event rental inquiry creation failed');
  }
};

export const useCreateEventRentalInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEventRentalInquiryClient,
    mutationKey: ['SANITY MUTATION CREATE EVENT RENTAL INQUIRY'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE EVENT RENTAL INQUIRY'],
      });
    },
  });
};
