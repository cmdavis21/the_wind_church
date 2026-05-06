import { EVENT_RENTAL_KEY, EventRentalInquiry, FORM_TYPES } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateEventRentalInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: EventRentalInquiry) => {
      const res = await fetch('/api/sanity/event-rental-inquiry', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${EVENT_RENTAL_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [EVENT_RENTAL_KEY],
    onSuccess: async (d, variables) => {
      queryClient.invalidateQueries({ queryKey: [EVENT_RENTAL_KEY] });

      await fetch('/api/aws/email', {
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
