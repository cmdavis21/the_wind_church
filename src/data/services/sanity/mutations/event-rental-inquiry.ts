import { EVENT_RENTAL_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { EventRentalInquiry, FORM_TYPES } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

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
    mutationKey: [EVENT_RENTAL_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [EVENT_RENTAL_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.EVENT_RENTAL,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.EVENT_RENTAL}`,
          },
        }),
      });
    },
  });
};
