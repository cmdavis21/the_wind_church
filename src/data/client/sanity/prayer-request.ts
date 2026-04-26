import { FORM_TYPES, PRAYER_REQUEST_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPrayerRequestClient } from '@/data/server/sanity/mutations/prayer-request';
import { WEBSITE_URL } from '../env.client';

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
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.PRAYER_REQUEST}`,
          },
        }),
      });
    },
  });
};
