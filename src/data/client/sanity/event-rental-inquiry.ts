import { createEventRentalInquiryClient } from '@/data/server/sanity/mutations/event-rental-inquiry';
import { EVENT_RENTAL_KEY, FORM_TYPES } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

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
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.EVENT_RENTAL}`,
          },
        }),
      });
    },
  });
};
